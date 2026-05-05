# PRD — La Maria și Ion · Modern Restaurant Website

## Original Problem Statement
Create a Modern Restaurant Website for "La Maria si Ion" — dark, moody & cinematic, fully localized in Romanian.

## User Choices
- **Brand**: La Maria și Ion · Restaurant tradițional românesc, Regie București
- **Features**: Menu showcase + full menu page, Gallery, Story/About, Contact + Location Map, ANPC badges, Legal pages
- **Visual Style**: Dark, moody & cinematic (warm amber accents)
- **Language**: 100% Romanian
- **No food delivery integrations** (no Glovo / Bolt Food / Tazz per user request)

## Architecture
- **Frontend**: React 19, Tailwind, lucide-react, Fraunces + Manrope fonts, IntersectionObserver reveals
- **Backend**: FastAPI (template — unused for site content)
- **Database**: MongoDB (no app collections used; static frontend)
- **Routing**: SPA with `/`, `/meniu`, `/legal/*`, custom 404

## Core Implemented Features
- Sticky glass header with logo + desktop nav + mobile drawer
- Cinematic hero with background, gradient overlay, dual CTAs
- Story section (chef pasta image, asymmetric layout, 5+ ani / 150+ preparate / 200 locuri stats)
- 2 Parallax bands (Penne carbonara, terasa La Maria și Ion)
- Menu teaser section (tabbed categories) + Gallery (4 photos)
- Reviews snippet (Google) + Contact w/ Google Maps embed
- Full menu page `/meniu` with sticky sidebar + chapter navigation
- Footer with authentic CUI/J details, ANPC badges (SOL + SAL)
- Legal pages (Termeni, Cookies, Politica de Confidențialitate)
- Custom 404 page, mobile-only sticky "Sună acum" CTA
- SEO: JSON-LD schema, lazy loading, `<picture>` tags, custom favicon

## Changelog

### 2026-02 — Menu Sync 04.2026 + Story Image Fix
- Sincronizat `menuFull.js` și `menu.js` cu PDF Meniu 04.2026 (sursă oficială restaurant)
- Schimbat secțiunea Paste de la **Tagliatelle → Penne siciliene** (corecție majoră)
- Adăugat preparate noi: Tomahawk porc, Tochitură moldovenească, Cârnatzuri cu ai, Frigărui de pui, Salată Caesar, Salată cu ton, Cremă zahăr ars, Clătite cu înghețată, Carcalete cu carne garniță, ciorbe (fasole/pui/perișoare)
- Eliminat preparate care nu mai sunt în meniu: Mehmet Bey în harem, Iahnie cu ciont afumat, Legume Ratatouille/chinezești, Orez ca la Harem, Salăți dân ficăței, Salăți cu caș și groștior
- Actualizat toate prețurile și gramajele exact ca în PDF (cca 80% au crescut cu 1-7 lei)
- Reverted Story image de la papanași Wikipedia blurat → bucătar pregătind paste (mariasiion.ro)

### 2025-12 — Initial Build
- Full responsive UI cu temă cinematică dark
- Logo transparent personalizat în header și footer
- Detalii companie autentice (CUI, J), telefon, adresă, email
- ANPC badges (SOL + SAL) reale în footer

## Backlog
- **P2**: Real photography (înlocuire orice imagine Unsplash rămasă cu fotografii reale)
- **P2**: Online reservations (date/time picker → MongoDB) — amânat
- **P2**: Newsletter / wine club signup
- **P3**: Replace Google Maps embed with Mapbox styled dark theme
- **P3**: Press / awards section

## Next Tasks
1. Înlocuirea imaginilor placeholder rămase (parallax band 1 - Penne carbonara) cu fotografii reale ale restaurantului
2. Reservation form persistat în MongoDB (cu admin view)
3. Newsletter subscription (Resend / SendGrid)
