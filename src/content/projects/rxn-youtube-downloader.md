---
title: "RxN YouTube Downloader"
slug: "rxn-youtube-downloader"
shortDescription: "RxN YouTube Downloader is a modern, standalone desktop application that allows users to download videos and audio from YouTube."
category: "Dekstop Application/Software"
technologies:
  - "Python"
  - "PyQt6"
  - "Node.js"
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
  - "Error Handling & Logging"
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
featured: false
draft: false
---

RxN YouTube Downloader is a YouTube downloader designed to offer a seamless user experience. It combines the power of yt-dlp with a polished PyQt6 frontend, enabling users to fetch video metadata (title, channel, duration, thumbnail) and download content in either best video+audio or audio-only (MP3 320kbps) formats. The application handles YouTube’s anti-bot “n challenge” via Node.js integration, supports cookie authentication for age-restricted/private videos, and uses ffmpeg to merge streams without re-encoding. It runs entirely offline, requires no external dependencies, and is packaged as a single .exe file for Windows, making it ideal for users who want a reliable, easy-to-use downloader.
