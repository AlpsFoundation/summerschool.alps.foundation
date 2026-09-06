import type { APIRoute } from 'astro';
// @ts-ignore — provided by the Cloudflare workers runtime at deploy/preview time
import { env } from 'cloudflare:workers';

export const prerender = false;

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    let name = '', email = '', note = '', website = '';
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      const b = (await request.json()) as Record<string, unknown>;
      name = String(b.name ?? '');
      email = String(b.email ?? '');
      note = String(b.note ?? '');
      website = String(b.website ?? '');
    } else {
      const f = await request.formData();
      name = String(f.get('name') ?? '');
      email = String(f.get('email') ?? '');
      note = String(f.get('note') ?? '');
      website = String(f.get('website') ?? '');
    }
    // Honeypot: bots fill the hidden "website" field. Pretend success.
    if (website.trim()) return json({ ok: true });

    name = name.trim().slice(0, 120);
    email = email.trim().toLowerCase().slice(0, 200);
    note = note.trim().slice(0, 500);
    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return json(
        { ok: false, error: 'Please give us your name and a valid email address.' },
        400
      );
    }

    const db = (env as any)?.ASS27_DB;
    if (!db) {
      return json(
        { ok: false, error: 'Sign-up is temporarily unavailable — please email summerschool@alps.foundation instead.' },
        503
      );
    }
    await db
      .prepare(
        "CREATE TABLE IF NOT EXISTS signups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, note TEXT, created_at TEXT NOT NULL DEFAULT (datetime('now')), source TEXT NOT NULL DEFAULT 'website')"
      )
      .run();
    await db
      .prepare(
        'INSERT INTO signups (name, email, note) VALUES (?1, ?2, ?3) ON CONFLICT(email) DO UPDATE SET name = ?1, note = ?3'
      )
      .bind(name, email, note)
      .run();
    return json({ ok: true });
  } catch {
    return json(
      { ok: false, error: 'Something went wrong — please email summerschool@alps.foundation instead.' },
      500
    );
  }
};
