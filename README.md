# StompLab marketing site

Pure static site (HTML / CSS / JS – no npm) for **StompLab** / Stomp Lab by Liam Boyd.

- Live product: https://stomplab.vercel.app
- Promo site: https://stomplab-promo.vercel.app
- Guide (authoritative product copy): https://stomplab.vercel.app/guide

## Visitor path

1. **3 free demos** (no account): Smells Like Teen Spirit, Enter Sandman, Comfortably Numb — always downloadable
2. **Sign in** → 3 free custom song researches
3. **Subscribe** monthly (**$6.99**) or yearly (**$75**, ~$8.88 saved) via Polar in the app → any song, Create, History, and Gear; **50 custom builds / calendar month** (demos never count)

## Files

| File | Role |
|------|------|
| `index.html` | Conversion landing (hero → demos → pricing → FAQ) |
| `styles.css` | Dark studio theme (Archivo + IBM Plex) |
| `main.js` | Mobile nav + FAQ accordion |
| `privacy.html` | Auth, Polar subscriptions, AI Gateway |
| `favicon.svg` / `wordmark.svg` | SL pedal mark |
| `vercel.json` | `cleanUrls` + security headers |

OG image hotlinked from `https://stomplab.vercel.app/og.jpg` (no large local JPGs).

## Deploy

Point Vercel project **stomplab-promo** at this repo (`Lboyd09/stomplab-site`). No build step.

## Honest marketing

No fake testimonials, user counts, press logos, or awards. Demos + clear subscription pricing are the proof.
