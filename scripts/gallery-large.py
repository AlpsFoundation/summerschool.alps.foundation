#!/usr/bin/env python3
"""Build the full-size gallery set the recap lightbox opens.

The 480 px files in public/assets/gallery-2026/ are the carousel strip; these
are what you see when you click one. Named identically, one folder down, so a
photo's small and large file are the same name in two places.

Source of truth for WHICH photos exist is src/data/gallery-2026.ts, itself
generated from Matthias's review in the ASS26 Photo Review artifact. Run this
after any change there; it is resumable and prunes files no longer listed.
"""
import glob, os, re, sys
from PIL import Image, ImageOps

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = ("/Users/matthias/Library/CloudStorage/"
       "GoogleDrive-matthias.leitner@alps.foundation/Shared drives/ALPS Shared/"
       "70_Media Library/73_Photos/ALPS Summer School 2026")
OUT = os.path.join(REPO, "public/assets/gallery-2026/large")
BOX = (1500, 1000)  # fits a wide landscape and a tall portrait at 80vh

data = open(os.path.join(REPO, "src/data/gallery-2026.ts"), encoding="utf-8").read()
wanted = re.findall(r"\{ n: '(\d{3})', tag: '([^']+)'", data)
if not wanted:
    sys.exit("no photos parsed out of src/data/gallery-2026.ts")

os.makedirs(OUT, exist_ok=True)
made = skipped = 0
missing = []
keep = set()

for num, tag in wanted:
    name = f"p{num}_{tag}.jpg"
    keep.add(name)
    dest = os.path.join(OUT, name)
    if os.path.exists(dest) and os.path.getsize(dest) > 4000:
        skipped += 1
        continue
    hits = glob.glob(os.path.join(SRC, f"ASS26-{num}_*"))
    if not hits:
        missing.append(num)
        continue
    im = ImageOps.exif_transpose(Image.open(hits[0]))
    if im.mode != "RGB":
        im = im.convert("RGB")
    im.thumbnail(BOX, Image.LANCZOS)
    im.save(dest, "JPEG", quality=80, optimize=True, progressive=True)
    made += 1
    print(f"{made + skipped}/{len(wanted)} {name} {im.width}x{im.height}", flush=True)

pruned = [f for f in os.listdir(OUT) if f.endswith(".jpg") and f not in keep]
for f in pruned:
    os.remove(os.path.join(OUT, f))

print(f"DONE made={made} skipped={skipped} pruned={pruned} missing={missing}")
