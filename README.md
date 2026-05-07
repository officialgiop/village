# Village Fregene Padel & Suites

Sito vetrina mobile-first realizzato con Astro + Tailwind per promuovere:
- il circolo padel (campi, lezioni, tornei);
- le suites con cucina;
- i servizi accessori (bar, palestra, solarium, eventi).

## Stack

- Astro 4
- Tailwind CSS 3
- Deploy automatico su GitHub Pages tramite GitHub Actions

## Comandi

- `npm install` installa le dipendenze
- `npm run dev` avvia il progetto in locale
- `npm run build` genera il sito statico in `dist/`
- `npm run preview` anteprima del build

## Deploy su GitHub Pages

1. Pubblica il repository su GitHub.
2. Assicurati che il branch principale sia `main`.
3. In GitHub vai in `Settings > Pages` e seleziona `GitHub Actions` come source.
4. Ogni push su `main` avviera il workflow in `.github/workflows/deploy.yml`.

## Dominio custom

Quando acquisti il dominio:
1. aggiungi il dominio in `Settings > Pages`;
2. configura i record DNS dal tuo registrar verso GitHub Pages;
3. abilita `Enforce HTTPS` appena disponibile.
