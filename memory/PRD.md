# PRD — Lucenta · Modern Italian Restaurant Website

## Original Problem Statement
Create a Modern Restaurant Website.

## User Choices
- **Cuisine**: Fine dining Italian / Pizzeria
- **Features**: Menu showcase with categories & prices, Gallery, Chef's story / About, Contact + location map
- **Visual Style**: Dark, moody & cinematic (warm tones)
- **Reservations storage**: Skipped (visual CTA only)

## Architecture
- **Frontend**: React 19, Tailwind, lucide-react, Cormorant Garamond + Manrope fonts
- **Backend**: FastAPI (template — unchanged, only `/api/` health route used)
- **Database**: MongoDB (no app collections required)
- **Brand**: "Lucenta · Trattoria · Pizzeria" — Brera, Milano

## User Personas
- **Diner / Visitor**: Browsing for ambience, menu, and reservation info
- **Reservation seeker**: Looking for hours, location, phone

## Core Requirements (Static)
- Cinematic dark UI with editorial typography
- Menu organized by categories (Antipasti · Pasta · Pizza · Secondi · Dolci) with prices
- Chef's story / about section
- Photo gallery (bento grid)
- Contact + embedded Google Maps location

## Implemented (2025-12)
- Sticky glass header with desktop nav + mobile drawer
- Cinematic hero w/ background image, gradient overlay, dual CTAs
- Story section with chef portrait, asymmetric layout, stats (12 yrs / 72h dough / 1 wood oven)
- Menu section with tabbed categories, dotted-leader item rows, tasting menu note
- Gallery with 4-tile asymmetric bento grid + film-style captions
- Contact with embedded Google Maps (grayscale), info rows (address, hours, phone, email), phone CTA
- Footer with social links, hours, large wordmark
- IntersectionObserver-based fade-up reveal animations
- Smooth-scroll anchor nav between all sections
- All interactive elements carry `data-testid` attributes
- Verified by testing_agent_v3 (frontend 100% pass, no console errors)

## Backlog
- **P1**: Online reservations (date/time picker → MongoDB) — deferred per user
- **P1**: Newsletter / wine club signup
- **P2**: Bilingual content (IT/EN toggle)
- **P2**: Press / awards section
- **P2**: Private events booking page
- **P2**: Real photography (replace Unsplash placeholders) + custom illustrations
- **P3**: Replace embed map with Mapbox styled dark theme

## Next Tasks
1. Add reservation form persisted to MongoDB (with admin view)
2. Add newsletter subscription (Resend / SendGrid)
3. Replace Google Maps embed with Mapbox + custom dark style
