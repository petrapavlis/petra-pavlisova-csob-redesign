# Petra Pavlisová — Interactive CV pro ČSOB

Projekt: React + Vite + Tailwind v4 + Framer Motion.
Cíl: interaktivní CV/redesign-journey web, publikovaný na GitHub Pages.

Struktura App.jsx:

- Dvě přepínatelné vizuální varianty (MinimalVariant, ColorVariant) přes tlačítko vpravo nahoře
- Minimal = černobílý editorial styl (font Fraunces, tenké linky, bez gradientů)
- Original = barevná verze s gradienty (blue/slate paleta)
- Sdílená data: stages[], proofPoints[]
- Fotka v hero sekci: src/assets/petra-pavlisova.jpg, grayscale filtr

Preferuji minimalistickou variantu jako hlavní směr dalšího ladění.
GitHub repo: petra-pavlisova-csob-redesign, base path nastaven ve vite.config.js.
