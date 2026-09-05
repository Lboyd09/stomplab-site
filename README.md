# StompLab marketing site

Pure static site (HTML / CSS / JS – no npm) for **StompLab** / Stomp Lab by Liam Boyd.

- Live product: https://stomplab.app
- Promo site: https://stomplab-promo.vercel.app
- Guide (authoritative product copy): https://stomplab.app/guide

## Visitor path

1. **3 free demos** (no account): Smells Like Teen Spirit, Enter Sandman, Comfortably Numb — always downloadable
2. **Sign in** → 3 free custom song researches
3. **Subscribe** monthly (**$6.99**) or yearly (**$75**, ~$8.88 saved) via Polar in the app → any song, Create, History, and Gear; **50 custom builds / calendar month** (demos never count)

## Files

| File | Role |
|------|------|
| `index.html` | Conversion landing (hero → demos → pricing → FAQ) |
| `styles.css` | Cream editorial (Oswald + Archivo + IBM Plex Mono) |
| `main.js` | Sticky nav, mobile menu, FAQ, scroll reveal |
| `privacy.html` | Auth, Polar, Gemini gateway, Amazon affiliate, stomplab1@gmail.com |
| `favicon.svg` / `wordmark.svg` | White SL mark |
| `vercel.json` | `cleanUrls` + security headers |

OG image hotlinked from `https://stomplab.app/og.jpg` (no large local JPGs).

## Deploy

Point Vercel project **stomplab-promo** at this repo (`Lboyd09/stomplab-site`). No build step.

## Honest marketing

No fake testimonials, user counts, press logos, or awards. Demos + clear subscription pricing are the proof.

## Brand

Cream paper `#f3efe6`, cards `#faf7f0`, text `#141414`, muted `#e7e1d4` / `#5c5850`, LCD accent `#7dff9a`. Support: stomplab1@gmail.com. CTAs → https://stomplab.app.
