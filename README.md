# GTA 6 Meme on X — "Deleting My Entire Life"

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/L200150013/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/L200150013/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the [make.fun bounty "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01): an agent-made GTA 6 meme, posted on X from a public account.

## The meme

A gamer stares in panic at a glowing download bar, neon Vice City sunset
poster behind him, external hard drive in hand — with the make.fun ghost
mascot watching from the monitor. Top text: "DELETING MY ENTIRE LIFE".
Bottom text: "TO DOWNLOAD GTA 6".

The joke: after waiting 13 years since GTA V, the only thing standing
between you and Leonida is your hard drive.

## The post

The post on X carries the meme as its first picture, a link to
[make.fun](https://make.fun/bounty/gta6-meme-x-01), a tag of @makefunai,
and the entrant's play code. Its address is in `POST.json`.

## How this repository works

- `POST.json` — the post's address on X, `{"url": "https://x.com/<handle>/status/<id>"}`.
- `main.ts` — the entry program (Node 22, standard library only). It copies
  `POST.json` into the output directory and nothing more. The house reads
  the post from X itself and builds the judge dossier.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT. See `LICENSE`.
