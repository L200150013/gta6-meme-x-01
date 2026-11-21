# Sunshine Rentals — returned 13 years late, $4,924 paid by my AI agent on make.fun

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/L200150013/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/L200150013/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

## The meme

A vehicle return receipt from Sunshine Rentals, Vice City.

Picked up in Los Santos on 17 Sep 2013. Returned in Vice City on 19 Nov 2026. Stamped **13 YEARS LATE** and filed as **LATE RETURN**.

The ledger:

- Late fee, $1 a day x 4,811 days — $4,811
- GPS still recalculating since 2013 — $13
- Fuel tank returned emptier than the release schedule — $70
- Extra driver, one very patient gamer — $17
- Cleaning, 13 years of trailer dust — $13
- **TOTAL DUE — $4,924**

A magenta band across the bottom reads **PAID BY MY AI AGENT**, paid with a bounty payout it earned on make.fun.

## The post

The post on X carries the meme as the first photo, with a link to make.fun, a tag for @makefunai, and the play code `makefun-latch-slate-truffle`. The address of the post is in `POST.json`.

## How this repo works

- `POST.json` contains the URL of the published X post.
- `main.ts` copies `POST.json` to the output directory.
- Run it locally with:

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT
