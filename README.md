# RxN Developing Website

Portfolio statico di RxN Developing, costruito con Astro e predisposto per GitHub Pages all'indirizzo `https://ryzexfn750.github.io/`.

## Avvio locale

Requisiti: Node.js 24 e pnpm.

```powershell
pnpm install
pnpm dev
```

Apri l'indirizzo locale mostrato nel terminale. Per controllare la versione finale:

```powershell
pnpm build
pnpm preview
```

## Aggiungere un progetto

### Metodo consigliato: Project Studio

1. Avvia il sito con `pnpm dev`.
2. Apri `http://localhost:4321/studio/` in Chrome o Edge.
3. Compila titolo, descrizioni, tecnologie, ruoli, immagini, video e link.
4. Premi **Choose website folder & save**.
5. Seleziona la cartella principale `rxn-developing-website` quando il browser lo richiede.
6. Project Studio crea automaticamente il Markdown e copia i media nelle cartelle corrette.
7. Controlla il risultato nel sito, poi esegui `pnpm build`.

Project Studio non invia dati a servizi esterni e non contiene credenziali. L'accesso alla cartella avviene soltanto dopo l'autorizzazione esplicita del browser.

### Eliminare un progetto

1. Apri Project Studio e raggiungi **Manage projects**.
2. Premi **Choose website folder** e seleziona la cartella principale del sito.
3. Seleziona il progetto da rimuovere.
4. Lascia attiva l'opzione per rimuovere anche immagini e video, se non servono più.
5. Premi **Delete selected project** e conferma l'operazione.

Project Studio elimina il file Markdown e, quando richiesto, la cartella media con lo stesso slug. L'eliminazione diventa pubblica soltanto dopo commit e push.

### Metodo manuale

1. Crea `public/assets/projects/slug-del-progetto/`.
2. Inserisci cover, immagini, poster e video realmente disponibili.
3. Copia `docs/project-template.md` in `src/content/projects/slug-del-progetto.md`.
4. Compila i campi necessari e rimuovi quelli non usati.
5. Imposta `draft: false` quando il progetto è pronto.
6. Esegui `pnpm build` per validare dati e percorsi.
7. Esegui commit e push sul repository `ryzexfn750/ryzexfn750.github.io`.

Il file Markdown genera automaticamente la card, l'eventuale presenza in Home e la pagina `/projects/slug-del-progetto/`.

## Campi importanti

- `featured: true` mostra il progetto nella Home.
- `featuredOrder` stabilisce l'ordine dei progetti in evidenza.
- `draft: true` mantiene il progetto nel repository senza pubblicarlo.
- `contributors` può contenere Ryze, Ninja o entrambi.
- immagini e video vengono mostrati soltanto quando esistono nel file dati.

Per un video locale usa `type: local` e indica `mp4`, `webm` o entrambi. Per YouTube e Vimeo usa l'URL o l'ID del video.

## Modificare il sito

- dati generali: `src/data/site.json`
- profili: `src/data/team.json`
- competenze e linguaggi: `src/data/skills.json`
- contatti: `src/data/social.json`
- colori e layout: `src/styles/global.css`
- logo e avatar: `public/assets/brand` e `public/assets/avatars`

## Pubblicazione

Il workflow `.github/workflows/deploy.yml` esegue automaticamente validazione, build e pubblicazione dopo ogni push su `main`.

Su GitHub apri **Settings → Pages** e seleziona **GitHub Actions** come sorgente. Il repository deve chiamarsi esattamente `ryzexfn750.github.io` per pubblicare il sito alla radice dell'indirizzo previsto.
