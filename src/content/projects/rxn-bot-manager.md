---
title: "RxN Bot Manager"
slug: "rxn-bot-manager"
portfolioType: "software"
portfolioOrder: 2
shortDescription: "RxN Bot Manager is a Windows desktop application designed to centrally manage multiple Discord and Telegram bots from a single interface. It provides real-time process monitoring, individual and global bot controls, integrated logs, background execution and automatic Windows startup."
category: "Software/Automation/Dekstop Application"
status: "Completed"
developmentPeriod: "July--July 2026"
technologies:
  - "JavaScript"
  - "Node.js"
  - "Python"
  - "PyQt6"
  - "Windows APIs"
  - "QProcess"
  - "Windows System Tray"
systems:
  - "Multi-platform Discord and Telegram bot management"
  - "Centralized bot control dashboard"
  - "Individual bot Start / Stop controls"
  - "Global Start All / Stop All system"
  - "Multi-process bot architecture"
  - "Python process execution and management"
  - "Node.js process execution and management"
  - "Automatic runtime and dependency detection"
  - "Bot configuration and environment validation"
  - "Real-time process status monitoring"
  - "Offline / Starting / Online / Stopping / Partial / Error state system"
  - "Real-time integrated system logs"
  - "Process stdout capture and visualization"
  - "Process error detection and reporting"
  - "Automatic process termination management"
  - "Forced process shutdown fallback system"
  - "Windows automatic startup integration"
  - "Windows Registry startup management"
  - "System tray background execution"
  - "System tray quick-action menu"
  - "Background operation when the main window is closed"
  - "Bot-specific platform organization"
  - "Discord and Telegram dedicated UI sections"
  - "Custom desktop control interface with PySide6 / Qt"
  - "Executable resource and asset management"
  - "Frozen executable path handling"
  - "External Python and Node.js runtime detection"
contributors:
  - member: "ryze"
    role: "Developed the process-management architecture, runtime validation, real-time logging, bot status monitoring, Windows startup integration and background system-tray functionality."
  - member: "ninja"
    role: "Designed the application interface and user experience, structured the Discord/Telegram management workflow, integrated bot configurations and assets, and handled application testing and release integration."
cover:
  src: "assets/projects/rxn-bot-manager/cover.png"
  alt: "RxN Bot Manager project cover"
gallery:
  - src: "assets/projects/rxn-bot-manager/image-01.png"
    alt: "RxN Bot Manager screenshot 1"
  - src: "assets/projects/rxn-bot-manager/image-02.png"
    alt: "RxN Bot Manager screenshot 2"
  - src: "assets/projects/rxn-bot-manager/image-03.png"
    alt: "RxN Bot Manager screenshot 3"
  - src: "assets/projects/rxn-bot-manager/image-04.png"
    alt: "RxN Bot Manager screenshot 4"
  - src: "assets/projects/rxn-bot-manager/image-05.png"
    alt: "RxN Bot Manager screenshot 5"
  - src: "assets/projects/rxn-bot-manager/image-06.png"
    alt: "RxN Bot Manager screenshot 6"
videos:
  - type: "youtube"
    url: "https://youtu.be/YJlLYSh-qO0"
    title: "Project demonstration"
    poster: "assets/projects/rxn-bot-manager/video-poster.png"
featured: true
featuredOrder: 2
translations:
  - language: "it"
    shortDescription: "Un'applicazione desktop Windows per gestire centralmente più bot Discord e Telegram da un'unica interfaccia, con monitoraggio in tempo reale, controlli individuali e globali, log integrati, esecuzione in background e avvio automatico."
    description: "RxN Bot Manager centralizza l'esecuzione e il controllo di più bot Discord e Telegram in un'applicazione Windows moderna. Permette di avviare, arrestare e riavviare singoli processi o l'intero gruppo, controllare stato e log in tempo reale e configurare l'esecuzione in background e l'avvio con Windows. La configurazione viene salvata localmente e i dati sensibili restano protetti sul dispositivo."
    category: "Applicazione desktop Windows"
    status: "Completato"
    roleRyze: "Ideazione, requisiti, flussi operativi, test dei bot, revisione UI/UX e controllo qualità."
    roleNinja: "Architettura, sviluppo dell'applicazione Windows, gestione dei processi, log, persistenza, sicurezza e packaging."
  - language: "fr"
    shortDescription: "Une application Windows permettant de gérer plusieurs bots Discord et Telegram depuis une interface unique, avec suivi en temps réel, commandes individuelles et globales, journaux intégrés, exécution en arrière-plan et démarrage automatique."
    description: "RxN Bot Manager centralise l'exécution et le contrôle de plusieurs bots Discord et Telegram dans une application Windows moderne. Il permet de démarrer, arrêter et redémarrer chaque processus ou tout le groupe, de consulter l'état et les journaux en temps réel, puis de configurer l'arrière-plan et le lancement avec Windows. La configuration est enregistrée localement et les données sensibles restent protégées sur l'appareil."
    category: "Application Windows"
    status: "Terminé"
    roleRyze: "Concept, besoins, flux opérationnels, tests des bots, revue UI/UX et assurance qualité."
    roleNinja: "Architecture, développement Windows, gestion des processus, journaux, persistance, sécurité et packaging."
  - language: "es"
    shortDescription: "Una aplicación Windows para gestionar varios bots de Discord y Telegram desde una sola interfaz, con monitorización en tiempo real, controles individuales y globales, registros integrados, ejecución en segundo plano e inicio automático."
    description: "RxN Bot Manager centraliza la ejecución y el control de múltiples bots de Discord y Telegram en una aplicación moderna para Windows. Permite iniciar, detener y reiniciar procesos individuales o todo el grupo, consultar estado y registros en tiempo real y configurar la ejecución en segundo plano y el inicio con Windows. La configuración se guarda localmente y los datos sensibles permanecen protegidos en el dispositivo."
    category: "Aplicación de escritorio Windows"
    status: "Completado"
    roleRyze: "Concepto, requisitos, flujos operativos, pruebas de bots, revisión UI/UX y control de calidad."
    roleNinja: "Arquitectura, desarrollo Windows, gestión de procesos, registros, persistencia, seguridad y empaquetado."
draft: false
---

RxN Bot Manager is a multi-platform desktop management application built to simplify the control and monitoring of multiple Discord and Telegram bots.

The application provides a centralized control center where every bot can be started and stopped individually or managed globally through dedicated Start All and Stop All controls. Each bot is represented by its own interface card with platform information, status indicators and process details.

The manager includes a dedicated process-management system capable of launching both Python and Node.js components. Before execution, it validates required scripts, environment files and runtime dependencies to prevent invalid launches.

Bot Manager also captures the output generated by each running component and displays it inside an integrated real-time system log, making debugging and monitoring possible without opening separate terminals.

The application continuously tracks process states and distinguishes between offline, starting, online, stopping, partially running and error states. It also supports Windows startup integration through the Windows Registry and continues running in the system tray when the main window is closed.

The result is a single desktop control environment for managing heterogeneous bot services and their associated components without manually launching or monitoring multiple command-line processes.
