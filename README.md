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

## Dashboard segreteria (demo)

E disponibile una dashboard in `admin` pensata per la segreteria:
- anagrafica soci (`nome`, `cognome`, `codice fiscale`);
- registrazione operazioni con `ID ricevuta` progressivo (`001`, `002`, ...), causale, importo e metodo pagamento;
- export PDF trimestrale con dettaglio cliente/spesa.

### Setup iniziale (una sola volta)

1. Apri `/admin` dal sito.
2. Password predefinita: `village123` (protezione leggera lato browser, adatta a demo).
3. Compila la sezione "Configurazione GitHub":
   - `Owner`
   - `Repository`
   - `Branch` (di solito `main`)
   - `Path file dati` (`public/data/club-data.json`)
   - `Token (PAT)` con permesso `contents:write` sul repository
4. Salva la configurazione.

Da quel momento la segreteria usa solo la dashboard e i dati vengono salvati online su `public/data/club-data.json`.
