---
title: "RxN YouTube Downloader"
slug: "rxn-youtube-downloader"
portfolioType: "software"
portfolioOrder: 4
shortDescription: "RxN YouTube Downloader is a modern, standalone desktop application that allows users to download videos and audio from YouTube."
category: "Dekstop Application/Software"
status: "Completed"
developmentPeriod: "May-May 2026"
technologies:
  - "Node.js"
  - "Python"
  - "PyQt6"
  - "PyInstaller"
systems:
  - "Modern Dark-Themed GUI"
  - "Quality Selection"
  - "YouTube Metadata Extraction"
  - "Cookie Management"
  - "Node.js Integration"
  - "ffmpeg Merging"
  - "Threaded Download Engine"
  - "Multi-format Audio Conversion"
  - "Packaged Standalone Executable"
contributors:
  - member: "ryze"
    role: "Lead Developer (full project architecture, GUI design with PyQt6, download engine integration using yt-dlp, threading and QThread implementation), YouTube Metadata Extraction (thumbnail, title, channel, duration real-time fetch), Quality Selector & Audio Converter (best video+audio merging, MP3 extraction via ffmpeg), Cookie Management System (toggle for private/age-restricted videos, cookies.txt support), Node.js Challenge Solver Integration (automatic n-challenge bypass with remote EJS components), Standalone Packaged Executable (PyInstaller build with ffmpeg and all dependencies embedded)."
  - member: "ninja"
    role: "Ninja did not contribute to the development of RxN YouTube Downloader."
cover:
  src: "assets/projects/rxn-youtube-downloader/cover.png"
  alt: "RxN YouTube Downloader project cover"
gallery:
  - src: "assets/projects/rxn-youtube-downloader/image-01.png"
    alt: "RxN YouTube Downloader screenshot 1"
  - src: "assets/projects/rxn-youtube-downloader/image-02.png"
    alt: "RxN YouTube Downloader screenshot 2"
  - src: "assets/projects/rxn-youtube-downloader/image-03.png"
    alt: "RxN YouTube Downloader screenshot 3"
videos:
  - type: "youtube"
    url: "https://youtu.be/_3s8t4oapVA"
    title: "Project demonstration"
    poster: "assets/projects/rxn-youtube-downloader/video-poster.png"
featured: true
featuredOrder: 4
translations:
  - language: "it"
    shortDescription: "Un'applicazione desktop moderna e autonoma che permette di scaricare video e audio da YouTube."
    description: "RxN YouTube Downloader combina yt-dlp con un'interfaccia PyQt6 per recuperare i metadati dei video e scaricare contenuti nella migliore qualità video e audio oppure in formato MP3. Gestisce autenticazione tramite cookie, unisce i flussi con ffmpeg e integra Node.js per affrontare i sistemi anti-bot. È distribuito come singolo eseguibile Windows senza dipendenze esterne."
    category: "Applicazione desktop / software"
    status: "Completato"
    systems: ["Interfaccia moderna in tema scuro", "Selezione della qualità", "Estrazione dei metadati YouTube", "Gestione dei cookie", "Integrazione Node.js", "Unione tramite ffmpeg", "Motore di download multithread", "Conversione audio multi-formato", "Eseguibile autonomo"]
    roleRyze: "Sviluppo principale: architettura, GUI PyQt6, integrazione yt-dlp, metadati, selezione qualità, conversione audio, cookie, Node.js e packaging PyInstaller."
    roleNinja: "Ninja non ha contribuito allo sviluppo di RxN YouTube Downloader."
  - language: "fr"
    shortDescription: "Une application de bureau moderne et autonome permettant de télécharger des vidéos et de l'audio depuis YouTube."
    description: "RxN YouTube Downloader combine yt-dlp avec une interface PyQt6 pour récupérer les métadonnées et télécharger le contenu en qualité vidéo et audio optimale ou au format MP3. Il gère l'authentification par cookies, fusionne les flux avec ffmpeg et intègre Node.js pour les mécanismes anti-bot. Il est distribué comme un exécutable Windows autonome."
    category: "Application de bureau / logiciel"
    status: "Terminé"
    systems: ["Interface sombre moderne", "Sélection de la qualité", "Extraction des métadonnées YouTube", "Gestion des cookies", "Intégration Node.js", "Fusion avec ffmpeg", "Moteur de téléchargement multithread", "Conversion audio multiformat", "Exécutable autonome"]
    roleRyze: "Développement principal : architecture, interface PyQt6, intégration yt-dlp, métadonnées, qualité, audio, cookies, Node.js et packaging PyInstaller."
    roleNinja: "Ninja n'a pas contribué au développement de RxN YouTube Downloader."
  - language: "es"
    shortDescription: "Una aplicación de escritorio moderna y autónoma para descargar vídeos y audio de YouTube."
    description: "RxN YouTube Downloader combina yt-dlp con una interfaz PyQt6 para obtener metadatos y descargar contenido en la mejor calidad de vídeo y audio o en formato MP3. Gestiona autenticación mediante cookies, combina flujos con ffmpeg e integra Node.js para los mecanismos antibot. Se distribuye como un único ejecutable autónomo para Windows."
    category: "Aplicación de escritorio / software"
    status: "Completado"
    systems: ["Interfaz moderna de tema oscuro", "Selección de calidad", "Extracción de metadatos de YouTube", "Gestión de cookies", "Integración Node.js", "Combinación con ffmpeg", "Motor de descarga multihilo", "Conversión de audio multiformato", "Ejecutable autónomo"]
    roleRyze: "Desarrollo principal: arquitectura, interfaz PyQt6, integración yt-dlp, metadatos, calidad, audio, cookies, Node.js y empaquetado PyInstaller."
    roleNinja: "Ninja no contribuyó al desarrollo de RxN YouTube Downloader."
draft: false
---

RxN YouTube Downloader is a YouTube downloader designed to offer a seamless user experience. It combines the power of yt-dlp with a polished PyQt6 frontend, enabling users to fetch video metadata (title, channel, duration, thumbnail) and download content in either best video+audio or audio-only (MP3 320kbps) formats. The application handles YouTube’s anti-bot “n challenge” via Node.js integration, supports cookie authentication for age-restricted/private videos, and uses ffmpeg to merge streams without re-encoding. It runs entirely offline, requires no external dependencies, and is packaged as a single .exe file for Windows, making it ideal for users who want a reliable, easy-to-use downloader.
