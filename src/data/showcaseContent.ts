import { advancedShowcases } from './advancedShowcases';
import { showcaseExperiences, type ExperienceLayout } from './showcaseExperiences';
import { expansionBySlug, type ExpansionCopy } from './showcaseExpansion';

export type ShowcaseContentKind = 'article' | 'detail' | 'profile' | 'case-study' | 'report' | 'control' | 'roster' | 'event' | 'plan' | 'booking';
export type ShowcaseContentRecord = {
  concept: string;
  section: string;
  slug: string;
  kind: ShowcaseContentKind;
  title: ExpansionCopy;
  meta: ExpansionCopy;
  intro: ExpansionCopy;
  image: string;
  crop?: number;
  index: number;
};

export type ShowcaseMediaSource = { image: string; crop?: number };

const c = (en: string, it: string, fr: string, es: string): ExpansionCopy => ({ en, it, fr, es });

export const showcaseSlug = (value: string) => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

export const showcaseItemSlug = (section: string, title: string, index: number) => `${showcaseSlug(section)}-${showcaseSlug(title)}-${index + 1}`;
export const showcaseItemHref = (concept: string, section: string, title: string, index: number) => `/showcase/${concept}/content/${showcaseItemSlug(section, title, index)}/`;
export const showcaseCardSlug = (title: string, index: number) => `featured-${showcaseSlug(title)}-${index + 1}`;
export const showcaseCardHref = (concept: string, title: string, index: number) => `/showcase/${concept}/content/${showcaseCardSlug(title, index)}/`;
export const showcaseExtraHref = (concept: string, slug: string) => `/showcase/${concept}/content/${slug}/`;

const generatedGrids = {
  lume: '/assets/showcases/generated/lume-content-grid.png',
  lumeDetail: '/assets/showcases/generated/lume-detail-grid.png',
  braci: '/assets/showcases/generated/braci-content-grid.png',
  nox: '/assets/showcases/generated/nox-content-grid.png',
  marea: '/assets/showcases/generated/marea-content-grid.png',
  people: '/assets/showcases/generated/people-content-grid.png',
  world: '/assets/showcases/generated/world-content-grid.png'
};

const secondaryMediaRanges: Record<string, { image: string; start: number; count?: number }> = {
  'lume-ristorante/philosophy': { image: generatedGrids.lumeDetail, start: 0, count: 3 },
  'lume-ristorante/cellar': { image: generatedGrids.lumeDetail, start: 3, count: 8 },
  'lume-ristorante/private-dining': { image: generatedGrids.lumeDetail, start: 11, count: 1 }
};

const mediaRanges: Record<string, { image: string; start: number; count?: number }> = {
  'lume-ristorante/philosophy': { image: generatedGrids.lume, start: 0 },
  'lume-ristorante/cellar': { image: generatedGrids.lume, start: 3 },
  'lume-ristorante/private-dining': { image: generatedGrids.lume, start: 9 },
  'lume-ristorante/journal': { image: generatedGrids.lume, start: 0 },
  'braci-basilico/story': { image: generatedGrids.braci, start: 0 },
  'braci-basilico/locations': { image: generatedGrids.braci, start: 3 },
  'braci-basilico/delivery': { image: generatedGrids.braci, start: 6 },
  'braci-basilico/community': { image: generatedGrids.braci, start: 9 },
  'nox-social-club/rooms': { image: generatedGrids.nox, start: 0 },
  'nox-social-club/artists': { image: generatedGrids.nox, start: 3 },
  'nox-social-club/membership': { image: generatedGrids.nox, start: 0 },
  'nox-social-club/private-hire': { image: generatedGrids.nox, start: 0 },
  'marea-beach-club/beach': { image: generatedGrids.marea, start: 0 },
  'marea-beach-club/wellness': { image: generatedGrids.marea, start: 3 },
  'marea-beach-club/events': { image: generatedGrids.marea, start: 6 },
  'marea-beach-club/private-hire': { image: generatedGrids.marea, start: 9 },
  'kinetic-fitness-club/coaches': { image: generatedGrids.people, start: 3 },
  'kinetic-fitness-club/recovery': { image: generatedGrids.people, start: 3 },
  'kinetic-fitness-club/locations': { image: generatedGrids.people, start: 3 },
  'kinetic-fitness-club/journal': { image: generatedGrids.people, start: 3 },
  'novacare-clinic/services': { image: generatedGrids.people, start: 6 },
  'novacare-clinic/patient-area': { image: generatedGrids.people, start: 6 },
  'novacare-clinic/prevention': { image: generatedGrids.people, start: 6 },
  'novacare-clinic/resources': { image: generatedGrids.people, start: 6 },
  'forge-digital-academy/mentors': { image: generatedGrids.people, start: 9 },
  'forge-digital-academy/projects': { image: generatedGrids.people, start: 9 },
  'forge-digital-academy/pricing': { image: generatedGrids.people, start: 9 },
  'forge-digital-academy/enterprise': { image: generatedGrids.people, start: 9 },
  'atlas-journeys/about': { image: generatedGrids.world, start: 0 },
  'atlas-journeys/stays': { image: generatedGrids.world, start: 0 },
  'atlas-journeys/concierge': { image: generatedGrids.world, start: 0 },
  'atlas-journeys/partners': { image: generatedGrids.world, start: 0 },
  'northline-motors/brands': { image: generatedGrids.world, start: 3 },
  'northline-motors/sell-your-car': { image: generatedGrids.world, start: 3 },
  'northline-motors/concierge': { image: generatedGrids.world, start: 3 },
  'northline-motors/journal': { image: generatedGrids.world, start: 3 },
  'aureon-industries/platform': { image: generatedGrids.world, start: 6, count: 3 },
  'aureon-industries/industries': { image: generatedGrids.world, start: 6 },
  'aureon-industries/customers': { image: generatedGrids.world, start: 6 },
  'aureon-industries/security': { image: generatedGrids.world, start: 6, count: 3 },
  'vertex-arena/teams': { image: generatedGrids.world, start: 9, count: 3 },
  'vertex-arena/broadcast': { image: generatedGrids.world, start: 9 },
  'vertex-arena/hospitality': { image: generatedGrids.world, start: 9 },
  'vertex-arena/news': { image: generatedGrids.world, start: 9 },
  'vertex-arena/featured': { image: generatedGrids.world, start: 9 },
  'kinetic-fitness-club/featured': { image: generatedGrids.people, start: 3 },
  'northline-motors/featured': { image: generatedGrids.world, start: 3 },
  'novacare-clinic/featured': { image: generatedGrids.people, start: 6 },
  'atlas-journeys/featured': { image: generatedGrids.world, start: 0 },
  'forge-digital-academy/featured': { image: generatedGrids.people, start: 9 }
};

export const showcaseMediaFor = (concept: string, section: string, index: number, fallback: string): ShowcaseMediaSource => {
  const range = mediaRanges[`${concept}/${section}`];
  const crop = range && (range.count === undefined || index < range.count) ? range.start + index : undefined;
  if (range && typeof crop === 'number' && crop < 12) return { image: range.image, crop };
  return { image: fallback };
};

export const showcaseSecondaryMediaFor = (concept: string, section: string, index: number, primary: ShowcaseMediaSource): ShowcaseMediaSource => {
  const range = secondaryMediaRanges[`${concept}/${section}`];
  if (range && (range.count === undefined || index < range.count)) return { image: range.image, crop: range.start + index };
  if (typeof primary.crop === 'number') return { image: primary.image, crop: (primary.crop + 4) % 12 };
  return primary;
};

const kindByLayout: Record<ExperienceLayout, ShowcaseContentKind> = {
  editorial: 'article',
  catalog: 'detail',
  booking: 'booking',
  directory: 'profile',
  order: 'detail',
  schedule: 'event',
  pricing: 'plan',
  dashboard: 'report',
  technical: 'control',
  cases: 'case-study',
  roster: 'roster',
  form: 'detail'
};

const contextualIntro = (kind: ShowcaseContentKind, title: ExpansionCopy): ExpansionCopy => {
  const templates: Record<ShowcaseContentKind, ExpansionCopy> = {
    article: c(`A complete editorial feature about ${title.en}, with context, decisions, and field notes.`, `Un approfondimento completo su ${title.it}, con contesto, decisioni e note dal campo.`, `Un dossier complet sur ${title.fr}, avec contexte, décisions et notes de terrain.`, `Un reportaje completo sobre ${title.es}, con contexto, decisiones y notas de campo.`),
    detail: c(`Explore the complete specification, character, and practical information for ${title.en}.`, `Esplora caratteristiche, identità e informazioni pratiche di ${title.it}.`, `Découvrez les caractéristiques, l’identité et les informations pratiques de ${title.fr}.`, `Explora las características, la identidad y la información práctica de ${title.es}.`),
    profile: c(`A complete profile covering background, specialisms, availability, and working approach.`, `Un profilo completo con esperienza, specialità, disponibilità e metodo di lavoro.`, `Un profil complet avec parcours, spécialités, disponibilité et méthode de travail.`, `Un perfil completo con experiencia, especialidades, disponibilidad y método de trabajo.`),
    'case-study': c(`The full case study: initial context, system design, delivery, and measured outcome.`, `Il caso studio completo: contesto iniziale, sistema, realizzazione e risultati misurati.`, `L’étude de cas complète : contexte, système, réalisation et résultats mesurés.`, `El caso de estudio completo: contexto, sistema, ejecución y resultados medidos.`),
    report: c(`A structured operational report with current signals, findings, and next actions.`, `Un report operativo con segnali attuali, risultati e prossime azioni.`, `Un rapport opérationnel avec signaux actuels, résultats et prochaines actions.`, `Un informe operativo con señales actuales, resultados y próximas acciones.`),
    control: c(`A technical control page with architecture, verification steps, and evidence.`, `Una pagina tecnica con architettura, verifiche ed evidenze.`, `Une page technique avec architecture, vérifications et preuves.`, `Una página técnica con arquitectura, verificaciones y evidencias.`),
    roster: c(`Team identity, current form, player roles, and season statistics in one complete profile.`, `Identità del team, forma attuale, ruoli e statistiche stagionali in un profilo completo.`, `Identité de l’équipe, forme actuelle, rôles et statistiques de saison.`, `Identidad del equipo, forma actual, roles y estadísticas de temporada.`),
    event: c(`Programme, access information, availability, and the complete reservation journey.`, `Programma, accesso, disponibilità e percorso completo di prenotazione.`, `Programme, accès, disponibilité et parcours complet de réservation.`, `Programa, acceso, disponibilidad y recorrido completo de reserva.`),
    plan: c(`Everything included in this plan, comparison points, conditions, and activation steps.`, `Tutto ciò che include il piano, confronto, condizioni e procedura di attivazione.`, `Tout ce que comprend cette offre, comparatif, conditions et étapes d’activation.`, `Todo lo incluido en el plan, comparación, condiciones y pasos de activación.`),
    booking: c(`Review the experience, choose the details, and complete the demonstration booking.`, `Rivedi l’esperienza, scegli i dettagli e completa la prenotazione dimostrativa.`, `Vérifiez l’expérience, choisissez les détails et finalisez la réservation de démonstration.`, `Revisa la experiencia, elige los detalles y completa la reserva de demostración.`)
  };
  return templates[kind];
};

const generatedRecords: ShowcaseContentRecord[] = Object.entries(showcaseExperiences).flatMap(([key, experience]) => {
  const [concept, section] = key.split('/');
  const site = expansionBySlug(concept);
  return experience.items.map((item, index) => {
    const kind = kindByLayout[experience.layout];
    const media = showcaseMediaFor(concept, section, index, item.image || site?.image || '');
    return {
      concept,
      section,
      slug: showcaseItemSlug(section, item.title.en, index),
      kind,
      title: item.title,
      meta: item.meta,
      intro: item.detail || contextualIntro(kind, item.title),
      image: media.image,
      crop: media.crop,
      index
    };
  });
});

const advancedRecords: ShowcaseContentRecord[] = advancedShowcases.flatMap((concept) => concept.cards.map((card, index) => {
  const kind: ShowcaseContentKind = concept.tool === 'clinic' ? 'profile' : concept.tool === 'academy' ? 'plan' : concept.tool === 'tickets' ? 'event' : 'detail';
  const media = showcaseMediaFor(concept.slug, 'featured', index, concept.image);
  return {
    concept: concept.slug,
    section: concept.pages[0]?.slug || '',
    slug: showcaseCardSlug(card.title.en, index),
    kind,
    title: card.title,
    meta: c(card.eyebrow, card.eyebrow, card.eyebrow, card.eyebrow),
    intro: card.text,
    image: media.image,
    crop: media.crop,
    index
  };
}));

const extraRecords: ShowcaseContentRecord[] = [
  ...[
    ['Static Bloom','€15','Gin, shiso, clarified citrus, fino sherry.','Gin, shiso, agrumi chiarificati, fino sherry.','Gin, shiso, agrumes clarifiés, fino sherry.','Ginebra, shiso, cítricos clarificados, fino sherry.'],
    ['Velvet Signal','€16','Rye, cocoa, amaro, smoked cherry.','Rye, cacao, amaro, ciliegia affumicata.','Rye, cacao, amaro, cerise fumée.','Rye, cacao, amaro, cereza ahumada.'],
    ['Night Service','€15','Mezcal, roasted pineapple, chilli, lime.','Mezcal, ananas arrostito, peperoncino, lime.','Mezcal, ananas rôti, piment, citron vert.','Mezcal, piña asada, chile, lima.'],
    ['Zero Frequency','€11','Jasmine, verjus, white peach, tonic. Alcohol free.','Gelsomino, verjus, pesca bianca, tonica. Analcolico.','Jasmin, verjus, pêche blanche, tonic. Sans alcool.','Jazmín, verjus, melocotón blanco, tónica. Sin alcohol.'],
    ['Black Orchid','€16','Vodka, blackcurrant, sake, Timut pepper.','Vodka, ribes nero, sakè, pepe di Timut.','Vodka, cassis, saké, poivre de Timut.','Vodka, grosella negra, sake, pimienta de Timut.'],
    ['Satellite Spritz','€14','Orange bitter, kombucha, pét-nat.','Bitter all’arancia, kombucha, pet-nat.','Bitter orange, kombucha, pét-nat.','Bitter de naranja, kombucha, pét-nat.'],
    ['Nocturne No. 7','€17','Agricole rum, coffee, banana, nutmeg.','Rum agricolo, caffè, banana, noce moscata.','Rhum agricole, café, banane, muscade.','Ron agrícola, café, plátano, nuez moscada.'],
    ['Quiet Signal','€11','Oolong tea, pear, sea salt, soda. Alcohol free.','Tè oolong, pera, sale marino, soda. Analcolico.','Thé oolong, poire, sel marin, soda. Sans alcool.','Té oolong, pera, sal marina, soda. Sin alcohol.']
  ].map((drink, index): ShowcaseContentRecord => ({
    concept: 'nox-social-club', section: 'cocktails', slug: `cocktail-${showcaseSlug(drink[0])}`, kind: 'detail',
    title: c(drink[0], drink[0], drink[0], drink[0]), meta: c(drink[1], drink[1], drink[1], drink[1]),
    intro: c(drink[2], drink[3], drink[4], drink[5]), image: generatedGrids.nox, crop: 9 + (index % 3), index
  })),
  ...[
    ['Foundations 45','07:00 · MILA · 45 MIN'],['Engine 30','12:30 · NOAH · 30 MIN'],['Velocity','18:30 · AMIR · 45 MIN'],['Reset Lab','20:00 · ANA · 45 MIN']
  ].map((entry, index): ShowcaseContentRecord => ({
    concept: 'kinetic-fitness-club', section: 'classes', slug: `class-${showcaseSlug(entry[0])}`, kind: 'booking',
    title: c(entry[0], entry[0], entry[0], entry[0]), meta: c(entry[1], entry[1], entry[1], entry[1]),
    intro: contextualIntro('booking', c(entry[0], entry[0], entry[0], entry[0])), image: '/assets/showcases/kinetic/hero.jpg', index
  })),
  { concept:'vertex-arena', section:'tickets', slug:'continental-masters-checkout', kind:'booking', title:c('Continental Masters checkout','Checkout Continental Masters','Paiement Continental Masters','Pago Continental Masters'), meta:c('18 OCT · 18:30 · DIGITAL PASS','18 OTT · 18:30 · PASS DIGITALE','18 OCT · 18:30 · PASS NUMÉRIQUE','18 OCT · 18:30 · PASE DIGITAL'), intro:contextualIntro('booking',c('Continental Masters','Continental Masters','Continental Masters','Continental Masters')), image:'/assets/showcases/vertex/hero.jpg', index:0 },
  { concept:'kinetic-fitness-club', section:'membership', slug:'membership-activation', kind:'plan', title:c('Activate your Kinetic membership','Attiva il tuo abbonamento Kinetic','Activez votre abonnement Kinetic','Activa tu membresía Kinetic'), meta:c('7-DAY TRIAL · FLEXIBLE MONTHLY','PROVA 7 GIORNI · MENSILE FLESSIBILE','ESSAI 7 JOURS · MENSUEL FLEXIBLE','PRUEBA 7 DÍAS · MENSUAL FLEXIBLE'), intro:contextualIntro('plan',c('Kinetic membership','abbonamento Kinetic','abonnement Kinetic','membresía Kinetic')), image:'/assets/showcases/kinetic/hero.jpg', index:0 },
  { concept:'northline-motors', section:'configure', slug:'test-drive-request', kind:'booking', title:c('Complete the test-drive request','Completa la richiesta di test drive','Finaliser la demande d’essai','Completa la solicitud de prueba'), meta:c('48H DELIVERY · VERIFIED VEHICLE','CONSEGNA 48H · VEICOLO VERIFICATO','LIVRAISON 48H · VÉHICULE VÉRIFIÉ','ENTREGA 48H · VEHÍCULO VERIFICADO'), intro:contextualIntro('booking',c('test drive','test drive','essai routier','prueba de conducción')), image:'/assets/showcases/northline/hero.jpg', index:0 },
  { concept:'northline-motors', section:'ownership', slug:'service-plan-management', kind:'plan', title:c('Service plan management','Gestione piano service','Gestion du plan d’entretien','Gestión del plan de servicio'), meta:c('SCHEDULED CARE · DIGITAL HISTORY','MANUTENZIONE · STORICO DIGITALE','ENTRETIEN · HISTORIQUE NUMÉRIQUE','MANTENIMIENTO · HISTORIAL DIGITAL'), intro:c('Review scheduled work, vehicle collection, approved operations, and the complete digital service history.','Rivedi interventi programmati, ritiro, operazioni approvate e storico service digitale completo.','Consultez les interventions, la collecte, les opérations approuvées et l’historique numérique complet.','Revisa trabajos programados, recogida, operaciones aprobadas e historial digital completo.'), image:'/assets/showcases/northline/hero.jpg', index:0 },
  { concept:'northline-motors', section:'ownership', slug:'secure-storage-availability', kind:'booking', title:c('Secure storage availability','Disponibilità deposito sicuro','Disponibilité du stockage sécurisé','Disponibilidad de almacenamiento seguro'), meta:c('CLIMATE CONTROL · MONTHLY CARE','CLIMA CONTROLLATO · CURA MENSILE','CLIMATISATION · SUIVI MENSUEL','CLIMATIZACIÓN · CUIDADO MENSUAL'), intro:c('Choose the storage period, access requirements, collection service, and monthly vehicle-care schedule.','Scegli periodo, necessità di accesso, servizio di ritiro e programma mensile di cura del veicolo.','Choisissez la période, les besoins d’accès, la collecte et le programme mensuel de suivi du véhicule.','Elige periodo, necesidades de acceso, recogida y programa mensual de cuidado del vehículo.'), image:'/assets/showcases/northline/hero.jpg', index:1 },
  { concept:'northline-motors', section:'ownership', slug:'roadside-support-cover', kind:'detail', title:c('European roadside support cover','Copertura assistenza stradale europea','Couverture d’assistance routière européenne','Cobertura de asistencia europea'), meta:c('EUROPE · 24/7 · SPECIALIST TRANSPORT','EUROPA · 24/7 · TRASPORTO SPECIALIZZATO','EUROPE · 24/7 · TRANSPORT SPÉCIALISÉ','EUROPA · 24/7 · TRANSPORTE ESPECIALIZADO'), intro:c('Coverage boundaries, recovery procedures, onward travel, and specialist transport explained in detail.','Confini della copertura, procedure di recupero, viaggio sostitutivo e trasporto specializzato spiegati nel dettaglio.','Limites de couverture, procédures de dépannage, poursuite du voyage et transport spécialisé en détail.','Límites de cobertura, recuperación, viaje alternativo y transporte especializado explicados en detalle.'), image:'/assets/showcases/northline/hero.jpg', index:2 },
  { concept:'atlas-journeys', section:'trip-builder', slug:'route-consultation', kind:'booking', title:c('Review the route with a field designer','Rivedi l’itinerario con un field designer','Revoir l’itinéraire avec un field designer','Revisa la ruta con un diseñador de viaje'), meta:c('1:1 ROUTE REVIEW · 45 MIN','REVISIONE 1:1 · 45 MIN','RÉVISION 1:1 · 45 MIN','REVISIÓN 1:1 · 45 MIN'), intro:contextualIntro('booking',c('route review','revisione itinerario','révision d’itinéraire','revisión de ruta')), image:'/assets/showcases/atlas/hero.jpg', index:0 }
];

export const showcaseContentRecords = [...generatedRecords, ...advancedRecords, ...extraRecords];
export const contentFor = (concept: string, slug: string) => showcaseContentRecords.find((record) => record.concept === concept && record.slug === slug);
export const relatedContentFor = (record: ShowcaseContentRecord) => showcaseContentRecords.filter((item) => item.concept === record.concept && item.slug !== record.slug).slice(0, 3);
