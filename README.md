# Encore — Event Booking Platform

A responsive event discovery and ticket registration platform built for **Sqrock IT Solutions — Web Development Internship, Project Phase 1, Task 3**.

## Live features

- **Homepage** — hero with a ticket-stub signature card, trust bar, category chips, featured events, closing CTA.
- **Events page** — search by name, category filters, sort by date/price.
- **Event details page** — image gallery, schedule, organizer & venue info, live countdown timer.
- **Registration form** — name/email/phone validation, ticket quantity stepper, computes total price, confirmation screen.
- **My tickets** — registration history pulled from `localStorage`, with cancel support.
- **Sign in / Sign up (bonus)** — mock auth stored in `localStorage`, pre-fills the registration form when logged in.
- **Admin dashboard (bonus)** — read-only events + registrations stats table.
- **Event countdown timer (bonus)** — live days/hours/minutes/seconds on the details page.
- **Dark mode (bonus)** — toggle in the navbar, persisted across visits.
- Fully responsive: mobile, tablet, desktop.

## Tech stack

- React 19 + Vite
- React Router v7
- Tailwind CSS v4
- lucide-react icons
- Browser `localStorage` as a mock backend (no server required)

## Project structure

```
src/
├── components/       # Navbar, Footer, EventCard, SearchFilter, Countdown
├── pages/            # Home, Events, EventDetails, Registration, MyTickets, Login, Signup, AdminDashboard, NotFound
├── context/          # ThemeContext (dark mode), RegistrationContext (tickets + mock auth)
├── data/             # events.js — static event data
├── utils/            # validators.js — form validation helpers
├── App.jsx
├── main.jsx
└── index.css         # Tailwind + design tokens
```

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Notes

- Event photography is sourced from **LoremFlickr** (loremflickr.com), which returns real, keyword-matched, Creative Commons-licensed photos from Flickr (e.g. actual concert/festival shots for those categories, not random unrelated images). Swap the URLs in `src/data/events.js` for your own event photos before shipping — and note LoremFlickr images still carry individual CC license/attribution terms from their original photographers, so check those if you plan to publish this publicly.
- Fonts: **Fraunces** (display) + **Inter** (body) + **JetBrains Mono** (ticket codes/times) via Google Fonts.
- This is a frontend-only demo: registrations and accounts live in the browser's `localStorage`, so data resets if it's cleared.

---
Built as part of the Sqrock IT Solutions internship program.
