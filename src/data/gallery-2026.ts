// Photo <-> programme link for the 2026 recap gallery.
//
// Which photos appear here is NOT an editorial choice made in code: it is
// Matthias's review in the ASS26 Photo Review tool (216 photos reviewed,
// 141 excluded, 75 kept, saved 2026-09-03), together with the per-photo
// event tag he set there. Re-run that review to change this list.
//
// 73, not 75: a dHash sweep over the kept set found two pairs shot seconds
// apart and effectively identical, so p004 (kept p029, Regis's art workshop)
// and p070 (kept p071, the farewell hug) were dropped on Matthias's call.
// p167 (an interview still) was pulled on request 2026-09-06 -> 72.
// Re-run that sweep after any future review — the review tool shows photos
// grouped by theme, which is exactly where near-duplicates hide.
//
// Files: /public/assets/gallery-2026/p<ASS26 number>_<tag>.jpg, 480 px tall,
// generated from the originals in
// ALPS Shared/70_Media Library/73_Photos/ALPS Summer School 2026.
//
// `slot` is the anchor id of the matching row in the Programme timetable
// (Program.astro renders `slot-d<day>-<index>`), which is what makes the link
// work in both directions: a gallery photo names its session and jumps to it,
// and a session row shows its own photos.

export type EventInfo = { day: string; label: string; slot?: string };

export const events: Record<string, EventInfo> = {
  'd1-arrival': { day: 'Day 1 · Sun 26 Jul', label: 'Arrival & check-in', slot: 'slot-d1-0' },
  'd1-welcome': { day: 'Day 1 · Sun 26 Jul', label: 'Welcoming speech', slot: 'slot-d1-1' },
  'd1-sharing': { day: 'Day 1 · Sun 26 Jul', label: 'Introduction / sharing circle', slot: 'slot-d1-3' },
  'd1-ice': { day: 'Day 1 · Sun 26 Jul', label: 'We break the ice', slot: 'slot-d1-4' },
  'd2-yousefi': { day: 'Day 2 · Mon 27 Jul', label: 'Lecture — Yousefi: Beyond the hype', slot: 'slot-d2-2' },
  'd2-meling-lec': { day: 'Day 2 · Mon 27 Jul', label: 'Lecture — Meling: Philosophical perspectives', slot: 'slot-d2-3' },
  'd2-holze': { day: 'Day 2 · Mon 27 Jul', label: 'Lecture — Holze: Pharmacology of psychedelics', slot: 'slot-d2-4' },
  'd2-meditation-ws': { day: 'Day 2 · Mon 27 Jul', label: 'Meditation workshop (Meling)', slot: 'slot-d2-6' },
  'd2-clay1': { day: 'Day 2 · Mon 27 Jul', label: 'Air-dry clay, session I', slot: 'slot-d2-8' },
  'd3-scelles': { day: 'Day 3 · Tue 28 Jul', label: 'Lecture — Scelles: Trauma & addiction', slot: 'slot-d3-1' },
  'd3-boehlke': { day: 'Day 3 · Tue 28 Jul', label: 'Lecture — Böhlke: Palliative care', slot: 'slot-d3-2' },
  'd3-gruender': { day: 'Day 3 · Tue 28 Jul', label: 'Lecture — Gründer: Depression & anxiety', slot: 'slot-d3-3' },
  'd3-contact-dance': { day: 'Day 3 · Tue 28 Jul', label: 'Contact dance workshop', slot: 'slot-d3-5' },
  'd4-egger': { day: 'Day 4 · Wed 29 Jul', label: 'Lecture — Egger: The conscious brain', slot: 'slot-d4-1' },
  'd4-lietz': { day: 'Day 4 · Wed 29 Jul', label: 'Lecture — Lietz: Neuroplasticity & aging', slot: 'slot-d4-2' },
  'd4-mediano': { day: 'Day 4 · Wed 29 Jul', label: 'Lecture — Mediano: PID & psychedelics', slot: 'slot-d4-3' },
  'd4-art-ws': { day: 'Day 4 · Wed 29 Jul', label: 'Art workshop (Paroz, Fullblindness)', slot: 'slot-d4-5' },
  'd4-clay2': { day: 'Day 4 · Wed 29 Jul', label: 'Air-dry clay, session II', slot: 'slot-d4-7' },
  'd5-sansoni': { day: 'Day 5 · Thu 30 Jul', label: 'Lecture — Sansoni: Cyberdelics', slot: 'slot-d5-1' },
  'd5-breathwork': { day: 'Day 5 · Thu 30 Jul', label: 'Breathwork experience workshop', slot: 'slot-d5-2' },
  'd5-havenith': { day: 'Day 5 · Thu 30 Jul', label: 'Lecture — Havenith: Neuroscience of breathwork', slot: 'slot-d5-5' },
  'd5-storytelling': { day: 'Day 5 · Thu 30 Jul', label: 'Psychedelic storytelling (Day)', slot: 'slot-d5-7' },
  'd6-villiger': { day: 'Day 6 · Fri 31 Jul', label: 'Lecture — Villiger: Ethics of PAT', slot: 'slot-d6-1' },
  'd6-day': { day: 'Day 6 · Fri 31 Jul', label: 'Lecture — Day: Culture & society', slot: 'slot-d6-2' },
  'd6-aicher': { day: 'Day 6 · Fri 31 Jul', label: 'Lecture — Aicher: Integration in practice', slot: 'slot-d6-3' },
  'd6-panel': { day: 'Day 6 · Fri 31 Jul', label: "Founders' panel (Dornbierer & Weydert)", slot: 'slot-d6-5' },
  'd6-closing': { day: 'Day 6 · Fri 31 Jul', label: 'Closing ritual', slot: 'slot-d6-6' },
  'd6-openmic': { day: 'Day 6 · Fri 31 Jul', label: 'Open mic', slot: 'slot-d6-8' },
  'd6-afterparty': { day: 'Day 6 · Fri 31 Jul', label: 'Afterparty', slot: 'slot-d6-9' },
  'd7-departure': { day: 'Day 7 · Sat 1 Aug', label: 'Departure & farewells', slot: 'slot-d7-1' },
  'g-meditation': { day: 'Any day', label: 'Morning meditation' },
  'g-meals': { day: 'Any day', label: 'Meals & catering' },
  'g-moonrise': { day: 'Any day', label: 'Moonrise at the lake' },
  'g-lake': { day: 'Any day', label: 'Lake & swimming' },
  'g-walks': { day: 'Any day', label: 'Walks & excursions' },
  'g-venue': { day: 'Any day', label: 'Around Le Camp' },
  'g-breaks': { day: 'Any day', label: 'Breaks & free time' },
  'g-other': { day: 'Any day', label: 'Other / not sure' },
};

export type Photo = {
  /** ASS26 media-library number, e.g. '084'. */
  n: string;
  /** Content slug from the media-library filename. */
  tag: string;
  /** Key into `events`, or null where the photo was left untagged. */
  event: string | null;
};

/**
 * Curated carousel order: categories interleaved so the strip stays varied.
 * One deliberate exception — p029 (the blindfolded art workshop) sits at 63
 * of 72, inside the last quarter, at Matthias's request 2026-09-06. Keep it
 * there if this list is regenerated.
 */
export const photos: Photo[] = [
  { n: '063', tag: 'lecture-audience-mats', event: 'd5-havenith' },
  { n: '034', tag: 'evening-sharing-circle', event: 'd6-openmic' },
  { n: '056', tag: 'dining-room-lake-view', event: 'd1-welcome' },
  { n: '021', tag: 'moonrise-shore-silhouettes', event: 'g-moonrise' },
  { n: '055', tag: 'terrace-view-lake', event: 'd1-welcome' },
  { n: '051', tag: 'group-toast-outdoor', event: 'd6-afterparty' },
  { n: '081', tag: 'lecture-dissociative-disorders', event: 'd3-scelles' },
  { n: '054', tag: 'circular-breathwork-talk', event: 'd5-havenith' },
  { n: '024', tag: 'outdoor-painting-lakeview', event: 'd4-clay2' },
  { n: '062', tag: 'watermelon-prep-kitchen', event: 'g-meals' },
  { n: '022', tag: 'moonrise-shore-gathering', event: 'g-moonrise' },
  { n: '119', tag: 'pergola-group-lakeview', event: 'g-breaks' },
  { n: '089', tag: 'candid-two-women-talking', event: null },
  { n: '084', tag: 'lecture-hall-audience-wide', event: 'd5-havenith' },
  { n: '065', tag: 'lakeside-circle-nightfall', event: 'd5-storytelling' },
  { n: '106', tag: 'catering-food-trays', event: 'g-meals' },
  { n: '023', tag: 'moonrise-facilitator-talk', event: 'g-moonrise' },
  { n: '123', tag: 'lake-swim-platform', event: 'g-lake' },
  { n: '094', tag: 'candid-headphones-warm-light', event: null },
  { n: '093', tag: 'speaker-whiteboard-curtain', event: 'd5-havenith' },
  { n: '102', tag: 'breathwork-cuddle-puddle', event: null },
  { n: '042', tag: 'dj-party-night', event: 'd6-afterparty' },
  { n: '204', tag: 'food-spread-closeup', event: 'g-meals' },
  // Retagged 2026-09-06: Matthias corrected this one — it is the open mic,
  // not the afterparty.
  { n: '027', tag: 'guitar-night-lights', event: 'd6-openmic' },
  { n: '124', tag: 'swimmer-lake-candid', event: 'g-lake' },
  { n: '096', tag: 'candid-conversation-window', event: null },
  { n: '148', tag: 'dining-hall-wide-audience', event: 'g-meals' },
  { n: '060', tag: 'outdoor-craft-amphitheater', event: 'd4-clay2' },
  { n: '028', tag: 'evening-field-walk', event: 'g-venue' },
  { n: '113', tag: 'group-huddle-discussion', event: 'g-meals' },
  { n: '154', tag: 'audience-from-behind', event: 'g-breaks' },
  { n: '061', tag: 'clay-painting-closeup', event: 'd4-clay2' },
  { n: '039', tag: 'moonrise-lake-gathering', event: 'g-moonrise' },
  { n: '114', tag: 'outdoor-lawn-group-sunlight', event: 'g-breaks' },
  { n: '164', tag: 'energetic-teaching-gesture', event: 'g-breaks' },
  { n: '239', tag: 'yellow-flower-craft', event: 'd4-clay2' },
  { n: '043', tag: 'dj-set-lights', event: 'd6-afterparty' },
  { n: '115', tag: 'outdoor-lawn-chatting', event: 'g-breaks' },
  { n: '176', tag: 'attentive-audience-woman', event: null },
  { n: '240', tag: 'orange-sun-craft-hand', event: 'd4-clay2' },
  { n: '064', tag: 'lakeside-gathering-evening', event: 'd5-storytelling' },
  { n: '116', tag: 'small-groups-outdoor-chat', event: 'g-breaks' },
  { n: '177', tag: 'lecture-hall-wide-shot', event: 'd6-day' },
  { n: '069', tag: 'farewell-group-hug', event: 'd7-departure' },
  { n: '165', tag: 'testimonial-curly-hair-portrait', event: null },
  { n: '179', tag: 'speaker-gesture-lecture', event: 'd6-day' },
  { n: '166', tag: 'testimonial-older-man-portrait', event: null },
  { n: '180', tag: 'speaker-alps-banner-gesture', event: 'd6-day' },
  { n: '071', tag: 'farewell-hug-group', event: 'd7-departure' },
  { n: '189', tag: 'workshop-wide-red-lighting', event: 'd6-aicher' },
  { n: '126', tag: 'evening-fairy-lights-gathering', event: 'd5-storytelling' },
  { n: '169', tag: 'testimonial-woman-portrait', event: null },
  { n: '215', tag: 'panel-discussion-wide', event: 'd6-panel' },
  { n: '129', tag: 'storytelling-animated-gesture', event: 'd5-storytelling' },
  { n: '173', tag: 'attentive-listener-curly-beard', event: null },
  { n: '218', tag: 'panel-discussion-candid', event: 'd6-panel' },
  { n: '131', tag: 'hawaiian-shirt-storytelling', event: 'd5-storytelling' },
  { n: '174', tag: 'attentive-listener-portrait', event: null },
  { n: '133', tag: 'storytelling-closeup-expressive', event: 'd5-storytelling' },
  { n: '184', tag: 'hand-gesture-detail', event: null },
  { n: '134', tag: 'candlelit-close-moment', event: 'd5-storytelling' },
  { n: '224', tag: 'candid-portrait-woman-outdoor', event: null },
  { n: '029', tag: 'blindfold-nature-exercise', event: 'd4-art-ws' },
  { n: '135', tag: 'purple-lighting-atmosphere', event: 'd5-storytelling' },
  { n: '225', tag: 'candid-man-cap-portrait', event: null },
  { n: '136', tag: 'moonrise-over-lake', event: 'g-moonrise' },
  { n: '228', tag: 'group-candid-near-houses', event: 'd6-closing' },
  { n: '137', tag: 'moonrise-lakeside-gathering', event: 'g-moonrise' },
  { n: '233', tag: 'candid-portrait-striped-hat', event: 'd6-closing' },
  { n: '197', tag: 'violin-through-leaves', event: 'g-breaks' },
  { n: '238', tag: 'candid-conversation-outdoor', event: 'd6-closing' },
  { n: '200', tag: 'guitarist-sitting-scenic', event: 'g-breaks' },
];

export const photoSrc = (p: Photo) => `/assets/gallery-2026/p${p.n}_${p.tag}.jpg`;

export const photoAlt = (p: Photo) =>
  `${p.tag.replace(/-/g, ' ')} — ALPS Summer School 2026`;

/** Human label for a photo's session, e.g. 'Lecture — Day: Culture & society'. */
export const eventLabel = (p: Photo) =>
  p.event ? (events[p.event]?.label ?? null) : null;

/** Programme anchor for a photo, when its session has a timetable row. */
export const eventSlot = (p: Photo) =>
  p.event ? (events[p.event]?.slot ?? null) : null;

/** Full-size file for the gallery lightbox (see scripts/gallery-large.py). */
export const photoLarge = (p: Photo) =>
  `/assets/gallery-2026/large/p${p.n}_${p.tag}.jpg`;
