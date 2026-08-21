const copy = (en: string, it: string, fr: string, es: string) => ({ en, it, fr, es });

export const lumeNav = [
  { href: '/showcase/lume-ristorante/', label: copy('Home', 'Home', 'Accueil', 'Inicio') },
  { href: '/showcase/lume-ristorante/menu/', label: copy('Menu', 'Menu', 'Menu', 'Menú') },
  { href: '/showcase/lume-ristorante/experience/', label: copy('Experience', 'Esperienza', 'Expérience', 'Experiencia') },
];
export const lumeCta = { href: '/showcase/lume-ristorante/reservations/', label: copy('Reserve', 'Prenota', 'Réserver', 'Reservar') };

export const braciNav = [
  { href: '/showcase/braci-basilico/', label: copy('Home', 'Home', 'Accueil', 'Inicio') },
  { href: '/showcase/braci-basilico/menu/', label: copy('Menu', 'Menu', 'Menu', 'Menú') },
  { href: '/showcase/braci-basilico/events/', label: copy('Events', 'Eventi', 'Événements', 'Eventos') },
];
export const braciCta = { href: '/showcase/braci-basilico/book/', label: copy('Book a table', 'Prenota', 'Réserver', 'Reservar') };

export const aureonNav = [
  { href: '/showcase/aureon-industries/', label: copy('Company', 'Azienda', 'Entreprise', 'Empresa') },
  { href: '/showcase/aureon-industries/solutions/', label: copy('Solutions', 'Soluzioni', 'Solutions', 'Soluciones') },
  { href: '/showcase/aureon-industries/projects/', label: copy('Projects', 'Progetti', 'Projets', 'Proyectos') },
];
export const aureonCta = { href: '/showcase/aureon-industries/contact/', label: copy('Start a project', 'Avvia un progetto', 'Démarrer un projet', 'Iniciar un proyecto') };
