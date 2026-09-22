# StompLab marketing site

Pure static site (HTML / CSS / JS — no npm) for **StompLab**.

- Live product: https://stomplab.app
- Marketing site: https://stomplab-site.vercel.app
- Guide: https://stomplab.app/guide

## Design

Cream + cobalt + ice Lab system with Apple-inspired structure and motion:

- Sticky frosted nav (52–56px, blur after 24px scroll)
- Oversized mixed-case Archivo hero
- One sticky signal-chain story sequence
- Feature bento, free demo gallery, dark cinematic stage
- Free vs Pro pricing with yearly savings, then FAQ

## Visitor path

1. **3 free demos** (no account): Teen Spirit, Enter Sandman, Comfortably Numb
2. **Sign in** → 3 free custom builds
3. **Subscribe** $6.99/month or $75/year (~$8.88 saved) via Polar → any song, Create, History, Gear; **50 custom builds / month** (demos never count)

## Files

| File | Role |
|------|------|
| `index.html` | Conversion landing |
| `styles.css` | Lab tokens + Apple-inspired layout/motion |
| `main.js` | Nav, reveals, sticky story, pricing toggle |
| `privacy.html` | Auth, Polar, AI gateway |
| `favicon.svg` / `wordmark.svg` | Cream SL sticker mark |
| `vercel.json` | cleanUrls + security headers |

## Deploy

Project **stomplab-site** serves this static tree at https://stomplab-site.vercel.app/. No build step. All CTAs go to https://stomplab.app.

## Honest marketing

No fake testimonials, user counts, press logos, or personal credits. Soft disclaimer: research starting points, not 100% copies. Not affiliated with Line 6 / Yamaha.
