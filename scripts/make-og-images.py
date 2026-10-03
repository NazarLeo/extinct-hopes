#!/usr/bin/env python3
"""
Builds the 1200x630 link-preview images in public/og/.

Run it by hand when you add a game or want to swap its preview art:

    pip install pillow
    python3 scripts/make-og-images.py            # rebuild everything
    python3 scripts/make-og-images.py spamton-night   # rebuild one slug

Each entry is a source image URL; it is cover-cropped (centre) to 1200x630.
The output file name is the game's slug, which is what src/data/games.js
expects at /og/<slug>.jpg.
"""
import io
import sys
import urllib.request
from pathlib import Path

from PIL import Image

W, H = 1200, 630
OUT = Path(__file__).resolve().parent.parent / "public" / "og"

play = lambda id: f"https://play-lh.googleusercontent.com/{id}=w1920-h1080-rw"
jolt_thumb = lambda path: f"https://m.gjcdn.net/game-thumbnail/1500/{path}"

# slug -> (source url, vertical focus 0..1; 0.5 = centre)
SOURCES = {
    "game-lab": (play("fcBwhlXMVfTn4Av7m57rBb7MvOc6dD0xo7QlcocZz19m2_839e8x0IA7nl5iv7kReAJiFeo75uJugnA0465zx3w"), 0.5),
    "game-escape": (play("hPn1r52WxXK3fBbeVQP5bUwSKEX9JwdMSTzaR7l3AfQolcUNHxFtV6U3qxKZb0m_2oK6N3tGxdNXW_mE5Yk42W0"), 0.5),
    "game-cyborg": (play("Kro5KmeFwe_5V5JE4SHSyhfz1-k42C_QN2SMrmRBfjAxUVS-SG3xde3-NhvvMjpKcGnK08aIckoeSRuSUXt9Tqo"), 0.5),
    "spamton-night": (jolt_thumb("1089431-crop278_79_941_452-yikvfftr-v4.webp"), 0.5),
    "one-night-with-piggy": ("https://m.gjcdn.net/game-screenshot/1200/49255861-ddrbtmbg-v4.webp", 0.5),
    "fnaf-2-movie-edition": (jolt_thumb("1034245-crop133_0_1381_702-zummpfku-v4.webp"), 0.5),
    "gravity-falls-exorcism": (jolt_thumb("919820-nbd8yyxj-v4.webp"), 0.5),
    "fnaf-movie-edition": (jolt_thumb("850220-fxbbqemn-v4.webp"), 0.5),
    "project-dream-pc": (jolt_thumb("753130-ruwzkzhd-v4.webp"), 0.5),
    "brawl-park": (jolt_thumb("683592-wgrkbcjm-v4.webp"), 0.5),
}


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return Image.open(io.BytesIO(r.read())).convert("RGB")


def cover(im, focus=0.5):
    """Scale to fill 1200x630, then crop the overflow."""
    s = max(W / im.width, H / im.height)
    im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    left = (im.width - W) // 2
    top = round((im.height - H) * focus)
    return im.crop((left, top, left + W, top + H))


def save(im, name):
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f"{name}.jpg"
    im.save(path, quality=84, optimize=True, progressive=True)
    print(f"{path.relative_to(OUT.parent.parent)}  {path.stat().st_size // 1024} KB")


def main(only):
    covers = {}
    for slug, (url, focus) in SOURCES.items():
        if only and slug not in only and "site" not in only:
            continue
        covers[slug] = cover(fetch(url), focus)
        if not only or slug in only:
            save(covers[slug], slug)

    # Site-wide default: the three chapters side by side.
    if not only or "site" in only:
        strips = [covers[s] for s in ("game-lab", "game-escape", "game-cyborg")]
        sheet = Image.new("RGB", (W, H))
        for i, im in enumerate(strips):
            x0 = i * (W // 3)
            sheet.paste(im.crop((W // 2 - W // 6, 0, W // 2 + W // 6, H)), (x0, 0))
        save(sheet, "site")


if __name__ == "__main__":
    main(set(sys.argv[1:]))
