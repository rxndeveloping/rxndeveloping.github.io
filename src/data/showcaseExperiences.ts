import type { ExpansionCopy } from './showcaseExpansion';

export type ExperienceLayout = 'editorial'|'catalog'|'booking'|'directory'|'order'|'schedule'|'pricing'|'dashboard'|'technical'|'cases'|'roster'|'form';
export type ExperienceItem = { title:ExpansionCopy; meta:ExpansionCopy; detail?:ExpansionCopy; value?:number; group?:string };
export type ShowcaseExperience = { layout:ExperienceLayout; items:ExperienceItem[]; note?:ExpansionCopy };

const c=(en:string,it:string,fr:string,es:string):ExpansionCopy=>({en,it,fr,es});
const translateMeta=(text:string,replacements:Array<[string,string]>)=>replacements.reduce((value,[from,to])=>value.replace(new RegExp(`\\b${from.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\b`,'g'),to),text);
const meta=(en:string):ExpansionCopy=>({
 en,
 it:translateMeta(en,[['OPEN SLOTS','POSTI LIBERI'],['LIVE OCCUPANCY','OCCUPAZIONE LIVE'],['ON REQUEST','SU RICHIESTA'],['VIDEO AVAILABLE','VIDEO DISPONIBILE'],['PREDICTIVE MAINTENANCE','MANUTENZIONE PREDITTIVA'],['RECOVERED','RECUPERATE'],['UNPLANNED DOWNTIME','FERMI IMPREVISTI'],['THROUGHPUT','PRODUTTIVITÀ'],['GUESTS','OSPITI'],['PEOPLE','PERSONE'],['PLACES','POSTI'],['LABELS','ETICHETTE'],['PAIRINGS','ABBINAMENTI'],['MONTHS','MESI'],['MONTH','MESE'],['WEEKS','SETTIMANE'],['WEEK','SETTIMANA'],['DAYS','GIORNI'],['DAY','GIORNO'],['YEAR','ANNO'],['FROM','DA'],['NEXT','PROSSIMO'],['TODAY','OGGI'],['TOMORROW','DOMANI'],['AVAILABLE','DISPONIBILE'],['FREE','GRATUITO'],['SLICES','FETTE'],['SINCE','DAL'],['OPEN','APERTO'],['HEALTHY','OPERATIVI']]),
 fr:translateMeta(en,[['OPEN SLOTS','PLACES LIBRES'],['LIVE OCCUPANCY','OCCUPATION EN DIRECT'],['ON REQUEST','SUR DEMANDE'],['VIDEO AVAILABLE','VIDÉO DISPONIBLE'],['PREDICTIVE MAINTENANCE','MAINTENANCE PRÉDICTIVE'],['RECOVERED','RÉCUPÉRÉES'],['UNPLANNED DOWNTIME','ARRÊTS IMPRÉVUS'],['THROUGHPUT','DÉBIT'],['GUESTS','INVITÉS'],['PEOPLE','PERSONNES'],['PLACES','PLACES'],['LABELS','RÉFÉRENCES'],['PAIRINGS','ACCORDS'],['MONTHS','MOIS'],['MONTH','MOIS'],['WEEKS','SEMAINES'],['WEEK','SEMAINE'],['DAYS','JOURS'],['DAY','JOUR'],['YEAR','AN'],['FROM','À PARTIR DE'],['NEXT','PROCHAIN'],['TODAY','AUJOURD’HUI'],['TOMORROW','DEMAIN'],['AVAILABLE','DISPONIBLE'],['FREE','GRATUIT'],['SLICES','PARTS'],['SINCE','DEPUIS'],['OPEN','OUVERT'],['HEALTHY','OPÉRATIONNELLES']]),
 es:translateMeta(en,[['OPEN SLOTS','PLAZAS LIBRES'],['LIVE OCCUPANCY','OCUPACIÓN EN VIVO'],['ON REQUEST','BAJO PETICIÓN'],['VIDEO AVAILABLE','VIDEO DISPONIBLE'],['PREDICTIVE MAINTENANCE','MANTENIMIENTO PREDICTIVO'],['RECOVERED','RECUPERADAS'],['UNPLANNED DOWNTIME','PARADAS IMPREVISTAS'],['THROUGHPUT','RENDIMIENTO'],['GUESTS','INVITADOS'],['PEOPLE','PERSONAS'],['PLACES','PLAZAS'],['LABELS','REFERENCIAS'],['PAIRINGS','MARIDAJES'],['MONTHS','MESES'],['MONTH','MES'],['WEEKS','SEMANAS'],['WEEK','SEMANA'],['DAYS','DÍAS'],['DAY','DÍA'],['YEAR','AÑO'],['FROM','DESDE'],['NEXT','PRÓXIMO'],['TODAY','HOY'],['TOMORROW','MAÑANA'],['AVAILABLE','DISPONIBLE'],['FREE','GRATIS'],['SLICES','PORCIONES'],['SINCE','DESDE'],['OPEN','ABIERTO'],['HEALTHY','OPERATIVOS']])
});
const i=(title:ExpansionCopy,metadata:string,detail?:ExpansionCopy,value?:number,group?:string):ExperienceItem=>({title,meta:meta(metadata),detail,value,group});
const e=(layout:ExperienceLayout,items:ExperienceItem[],note?:ExpansionCopy):ShowcaseExperience=>({layout,items,note});

export const showcaseExperiences:Record<string,ShowcaseExperience>={
 'lume-ristorante/philosophy':e('editorial',[
  i(c('The producer before the ingredient','Il produttore prima dell’ingrediente','Le producteur avant l’ingrédient','El productor antes del ingrediente'),'FIELD NOTE 01',c('Four farms, one fishing cooperative, and a direct relationship that changes the menu every week.','Quattro aziende, una cooperativa di pesca e un rapporto diretto che cambia il menu ogni settimana.','Quatre fermes, une coopérative de pêche et un lien direct qui change le menu chaque semaine.','Cuatro granjas, una cooperativa pesquera y una relación directa que cambia el menú cada semana.')),
  i(c('A kitchen measured in seasons','Una cucina misurata in stagioni','Une cuisine mesurée en saisons','Una cocina medida en estaciones'),'RESEARCH 02'),
  i(c('Nothing useful becomes waste','Nulla di utile diventa scarto','Rien d’utile ne devient déchet','Nada útil se convierte en residuo'),'PRACTICE 03')]),
 'lume-ristorante/cellar':e('catalog',[
  i(c('Alpine whites','Bianchi alpini','Blancs alpins','Blancos alpinos'),'18 LABELS · €58—€180',undefined,82,'white'),
  i(c('Native Italian reds','Rossi autoctoni italiani','Rouges autochtones italiens','Tintos autóctonos italianos'),'27 LABELS · €62—€240',undefined,96,'red'),
  i(c('Grower Champagne','Champagne di vigneron','Champagnes de vignerons','Champagne de viticultor'),'12 LABELS · €95—€320',undefined,120,'sparkling'),
  i(c('Alcohol-free pairings','Abbinamenti analcolici','Accords sans alcool','Maridajes sin alcohol'),'6 PAIRINGS · €38',undefined,38,'pairing')]),
 'lume-ristorante/private-dining':e('booking',[
  i(c('The Library','La Biblioteca','La Bibliothèque','La Biblioteca'),'4—8 GUESTS · FROM €680',undefined,680),
  i(c('Chef’s table','Tavolo dello chef','Table du chef','Mesa del chef'),'6 GUESTS · FROM €840',undefined,840),
  i(c('Lume exclusive','Lume in esclusiva','Lume en exclusivité','Lume en exclusiva'),'20—42 GUESTS · ON REQUEST',undefined,1600)]),
 'lume-ristorante/journal':e('editorial',[
  i(c('Winter citrus, preserved','Agrumi d’inverno, conservati','Agrumes d’hiver, conservés','Cítricos de invierno, conservados'),'6 MIN READ'),
  i(c('Inside the bread programme','Dentro il programma del pane','Dans le programme du pain','Dentro del programa de pan'),'8 MIN READ'),
  i(c('Meet Mara, our ceramicist','Mara, la nostra ceramista','Mara, notre céramiste','Mara, nuestra ceramista'),'PORTRAIT · 05')]),

 'braci-basilico/story':e('editorial',[
  i(c('The first oven on Via Nizza','Il primo forno in Via Nizza','Le premier four de Via Nizza','El primer horno de Via Nizza'),'EST. 2021'),
  i(c('Why the dough rests for 48 hours','Perché l’impasto riposa 48 ore','Pourquoi la pâte repose 48 heures','Por qué la masa reposa 48 horas'),'DOUGH LAB 04'),
  i(c('The records behind Friday service','I dischi del servizio del venerdì','Les disques du service du vendredi','Los discos del servicio del viernes'),'PLAYLIST 38')]),
 'braci-basilico/locations':e('directory',[
  i(c('San Salvario','San Salvario','San Salvario','San Salvario'),'VIA NIZZA 28 · OPEN 18—01'),
  i(c('Vanchiglia','Vanchiglia','Vanchiglia','Vanchiglia'),'VIA BAVA 17 · OPEN 18—00'),
  i(c('Porta Palazzo','Porta Palazzo','Porta Palazzo','Porta Palazzo'),'PIAZZA REPUBBLICA 3 · OPEN 12—00')]),
 'braci-basilico/delivery':e('order',[
  i(c('Marinara Feroce','Marinara Feroce','Marinara Feroce','Marinara Feroce'),'TOMATO · GARLIC · CHILLI · €9',undefined,9,'pizza'),
  i(c('Braci 01','Braci 01','Braci 01','Braci 01'),'FIOR DI LATTE · ’NDUJA · HONEY · €14',undefined,14,'pizza'),
  i(c('Basilico Club','Basilico Club','Basilico Club','Basilico Club'),'BURRATA · PESTO · LEMON · €15',undefined,15,'pizza'),
  i(c('Charred greens','Verdure alla brace','Légumes grillés','Verduras a la brasa'),'SEASONAL · €7',undefined,7,'side')]),
 'braci-basilico/community':e('schedule',[
  i(c('Vinyl Friday','Venerdì in vinile','Vendredi vinyle','Viernes de vinilo'),'FRI 22:00 · FREE'),
  i(c('Guest pizza: Lievito Madre','Pizza ospite: Lievito Madre','Pizza invitée : Lievito Madre','Pizza invitada: Lievito Madre'),'SAT 19:00 · 80 SLICES'),
  i(c('Neighbourhood long table','Tavolata di quartiere','Grande table du quartier','Mesa larga del barrio'),'SUN 13:00 · 24 PLACES')]),

 'nox-social-club/rooms':e('catalog',[
  i(c('The Listening Room','La Sala d’ascolto','La Salle d’écoute','La Sala de escucha'),'48 PEOPLE · ANALOG SOUND'),
  i(c('The Red Bar','Il Red Bar','Le Red Bar','El Red Bar'),'70 PEOPLE · COCKTAIL SERVICE'),
  i(c('The Basement','Il Basement','Le Sous-sol','El Sótano'),'180 PEOPLE · LIVE STAGE')]),
 'nox-social-club/artists':e('directory',[
  i(c('Mara Vale','Mara Vale','Mara Vale','Mara Vale'),'RESIDENT · LEFTFIELD HOUSE'),
  i(c('Niko Serein','Niko Serein','Niko Serein','Niko Serein'),'GUEST · AMBIENT / DUB'),
  i(c('Tessellate','Tessellate','Tessellate','Tessellate'),'LIVE · MODULAR SYNTH')]),
 'nox-social-club/membership':e('pricing',[
  i(c('Listener','Listener','Auditeur','Oyente'),'€18 / MONTH',c('Priority programme access and monthly listening session.','Accesso prioritario al programma e sessione mensile.','Accès prioritaire et session mensuelle.','Acceso prioritario y sesión mensual.'),18),
  i(c('Resident','Resident','Résident','Residente'),'€42 / MONTH',c('Early booking, member entry, and bottle storage.','Prenotazione anticipata, ingresso member e bottle storage.','Réservation anticipée, entrée membre et stockage.','Reserva anticipada, entrada de miembro y almacenamiento.'),42),
  i(c('Patron','Patron','Mécène','Patrón'),'€96 / MONTH',c('Guest passes, private sessions, and concierge booking.','Guest pass, sessioni private e concierge booking.','Invitations, sessions privées et conciergerie.','Pases, sesiones privadas y conserjería.'),96)]),
 'nox-social-club/private-hire':e('booking',[
  i(c('Listening Room only','Solo Listening Room','Listening Room seule','Solo Listening Room'),'FROM €1,200 · 48 GUESTS',undefined,1200),
  i(c('Red Bar + Basement','Red Bar + Basement','Red Bar + Sous-sol','Red Bar + Sótano'),'FROM €3,800 · 220 GUESTS',undefined,3800),
  i(c('Full club takeover','Club in esclusiva','Club en exclusivité','Club en exclusiva'),'FROM €6,400 · 300 GUESTS',undefined,6400)]),

 'marea-beach-club/beach':e('booking',[
  i(c('Front-row cabana','Cabana prima fila','Cabane première ligne','Cabaña primera fila'),'2—4 GUESTS · €180',undefined,180),
  i(c('Family garden','Giardino famiglia','Jardin famille','Jardín familiar'),'4—6 GUESTS · €135',undefined,135),
  i(c('Quiet deck','Quiet deck','Pont calme','Terraza tranquila'),'2 GUESTS · €90',undefined,90)]),
 'marea-beach-club/wellness':e('schedule',[
  i(c('Sunrise mobility','Mobilità all’alba','Mobilité à l’aube','Movilidad al amanecer'),'07:00 · 12 PLACES · €22'),
  i(c('Coastal recovery','Recovery costiero','Récupération côtière','Recuperación costera'),'11:30 · 6 PLACES · €48'),
  i(c('Sunset breathwork','Respiro al tramonto','Respiration au coucher du soleil','Respiración al atardecer'),'19:00 · 16 PLACES · €18')]),
 'marea-beach-club/events':e('schedule',[
  i(c('Full Moon Table','Tavola di luna piena','Table de pleine lune','Mesa de luna llena'),'18 AUG · 20:30 · €95'),
  i(c('Coastline Sessions','Coastline Sessions','Coastline Sessions','Coastline Sessions'),'23 AUG · 18:00 · €28'),
  i(c('Guest chef: Ada Serra','Chef ospite: Ada Serra','Cheffe invitée : Ada Serra','Chef invitada: Ada Serra'),'31 AUG · 20:00 · €120')]),
 'marea-beach-club/private-hire':e('booking',[
  i(c('Sunset ceremony','Cerimonia al tramonto','Cérémonie au coucher du soleil','Ceremonia al atardecer'),'40—90 GUESTS · FROM €4,800',undefined,4800),
  i(c('Brand retreat','Brand retreat','Retraite de marque','Retiro de marca'),'20—60 GUESTS · FROM €3,200',undefined,3200),
  i(c('Full coastline','Costa in esclusiva','Côte en exclusivité','Costa en exclusiva'),'UP TO 240 · ON REQUEST',undefined,9000)]),

 'aureon-industries/platform':e('dashboard',[
  i(c('Connected lines','Linee connesse','Lignes connectées','Líneas conectadas'),'18 / 18 · ONLINE'),
  i(c('Edge gateways','Gateway edge','Passerelles edge','Gateways edge'),'36 · HEALTHY'),
  i(c('Events processed','Eventi processati','Événements traités','Eventos procesados'),'2.8M / DAY'),
  i(c('Median response','Risposta mediana','Réponse médiane','Respuesta media'),'84 MS')]),
 'aureon-industries/industries':e('cases',[
  i(c('Automotive assembly','Assemblaggio automotive','Assemblage automobile','Ensamblaje de automóviles'),'18 LINES · 3 SITES'),
  i(c('Regulated food production','Produzione alimentare regolamentata','Production alimentaire réglementée','Producción alimentaria regulada'),'TRACEABILITY · HACCP'),
  i(c('Energy & utilities','Energia e utility','Énergie et services publics','Energía y servicios'),'PREDICTIVE MAINTENANCE')]),
 'aureon-industries/customers':e('cases',[
  i(c('North assembly network','Rete di assemblaggio Nord','Réseau d’assemblage Nord','Red de ensamblaje Norte'),'−31% UNPLANNED DOWNTIME'),
  i(c('Valley packaging group','Valley Packaging Group','Groupe Valley Packaging','Grupo Valley Packaging'),'+18% THROUGHPUT'),
  i(c('Helix energy operations','Helix Energy Operations','Opérations Helix Energy','Operaciones Helix Energy'),'420 HOURS RECOVERED')]),
 'aureon-industries/security':e('technical',[
  i(c('Identity boundary','Confine identità','Périmètre d’identité','Límite de identidad'),'SSO · MFA · RBAC'),
  i(c('Network segmentation','Segmentazione di rete','Segmentation réseau','Segmentación de red'),'EDGE / OT / CLOUD'),
  i(c('Audit evidence','Evidenze di audit','Preuves d’audit','Evidencia de auditoría'),'365-DAY IMMUTABLE LOG'),
  i(c('Recovery objective','Obiettivo di recovery','Objectif de reprise','Objetivo de recuperación'),'RPO 5 MIN · RTO 30 MIN')]),

 'vertex-arena/teams':e('roster',[
  i(c('NOVA','NOVA','NOVA','NOVA'),'#01 · 18W / 3L'),i(c('EMBER','EMBER','EMBER','EMBER'),'#02 · 16W / 5L'),i(c('ORBIT','ORBIT','ORBIT','ORBIT'),'#03 · 14W / 7L'),i(c('RIFT','RIFT','RIFT','RIFT'),'#04 · 12W / 9L')]),
 'vertex-arena/broadcast':e('schedule',[
  i(c('Opening desk','Studio d’apertura','Plateau d’ouverture','Mesa de apertura'),'17:15 · EN / IT / FR / ES'),
  i(c('NOVA vs EMBER','NOVA vs EMBER','NOVA vs EMBER','NOVA vs EMBER'),'18:30 · MAIN FEED + POV'),
  i(c('Analyst room','Sala analisi','Salle d’analyse','Sala de análisis'),'21:00 · LIVE DATA')]),
 'vertex-arena/hospitality':e('pricing',[
  i(c('Team suite','Team suite','Suite équipe','Suite de equipo'),'€1,850 / 10 GUESTS',undefined,1850),
  i(c('Caster table','Tavolo caster','Table commentateurs','Mesa de comentaristas'),'€2,700 / 16 GUESTS',undefined,2700),
  i(c('Arena takeover','Arena takeover','Privatisation arène','Arena exclusiva'),'FROM €8,900',undefined,8900)]),
 'vertex-arena/news':e('editorial',[
  i(c('NOVA changes its late-round system','NOVA cambia il sistema dei round finali','NOVA change son système de fin de manche','NOVA cambia su sistema de rondas finales'),'TACTICAL · 7 MIN'),
  i(c('Inside the new broadcast desk','Dentro il nuovo broadcast desk','Dans le nouveau plateau broadcast','Dentro del nuevo set de emisión'),'VENUE · 5 MIN'),
  i(c('Community cup registration opens','Apre la Community Cup','Ouverture de la Community Cup','Abre la Community Cup'),'COMMUNITY · 02 SEP')]),

 'kinetic-fitness-club/coaches':e('directory',[
  i(c('Mila Riva','Mila Riva','Mila Riva','Mila Riva'),'STRENGTH · IT / EN · TUE—SAT'),
  i(c('Noah Chen','Noah Chen','Noah Chen','Noah Chen'),'ENGINE · EN / FR · MON—FRI'),
  i(c('Ana Soler','Ana Soler','Ana Soler','Ana Soler'),'MOBILITY · ES / IT · WED—SUN')]),
 'kinetic-fitness-club/recovery':e('schedule',[
  i(c('Movement screen','Screening movimento','Bilan mouvement','Evaluación de movimiento'),'45 MIN · €55'),
  i(c('Cold + sauna circuit','Circuito freddo + sauna','Circuit froid + sauna','Circuito frío + sauna'),'60 MIN · €32'),
  i(c('Sports physiotherapy','Fisioterapia sportiva','Physiothérapie sportive','Fisioterapia deportiva'),'50 MIN · €75')]),
 'kinetic-fitness-club/locations':e('directory',[
  i(c('Milano Porta Nuova','Milano Porta Nuova','Milan Porta Nuova','Milán Porta Nuova'),'06—23 · 42% LIVE OCCUPANCY'),
  i(c('Milano Navigli','Milano Navigli','Milan Navigli','Milán Navigli'),'06—22 · 58% LIVE OCCUPANCY'),
  i(c('Monza Performance Lab','Monza Performance Lab','Monza Performance Lab','Monza Performance Lab'),'07—21 · 31% LIVE OCCUPANCY')]),
 'kinetic-fitness-club/journal':e('editorial',[
  i(c('Strength volume without guesswork','Volume di forza senza andare a caso','Volume de force sans approximation','Volumen de fuerza sin improvisar'),'COACH NOTE · 8 MIN'),
  i(c('What readiness actually measures','Cosa misura davvero la readiness','Ce que mesure vraiment la préparation','Qué mide realmente la preparación'),'RESEARCH · 6 MIN'),
  i(c('A practical sleep protocol','Un protocollo pratico per il sonno','Un protocole de sommeil pratique','Un protocolo de sueño práctico'),'RECOVERY · 5 MIN')]),

 'northline-motors/brands':e('catalog',[
  i(c('Apex Motorworks','Apex Motorworks','Apex Motorworks','Apex Motorworks'),'12 VEHICLES · €78K—€146K',undefined,78000,'performance'),
  i(c('Vector Automobili','Vector Automobili','Vector Automobili','Vector Automobili'),'8 VEHICLES · €84K—€220K',undefined,84000,'gt'),
  i(c('Northline Electric','Northline Electric','Northline Electric','Northline Electric'),'6 VEHICLES · €72K—€118K',undefined,72000,'electric')]),
 'northline-motors/sell-your-car':e('form',[
  i(c('Vehicle details','Dati del veicolo','Détails du véhicule','Datos del vehículo'),'STEP 01'),
  i(c('Condition & history','Condizioni e storico','État et historique','Estado e historial'),'STEP 02'),
  i(c('Inspection & offer','Ispezione e offerta','Inspection et offre','Inspección y oferta'),'STEP 03')]),
 'northline-motors/concierge':e('pricing',[
  i(c('Care','Care','Care','Care'),'€190 / MONTH',undefined,190),
  i(c('Collection','Collection','Collection','Collection'),'€420 / MONTH',undefined,420),
  i(c('Track & transport','Pista e trasporto','Circuit et transport','Circuito y transporte'),'FROM €680 / MONTH',undefined,680)]),
 'northline-motors/journal':e('editorial',[
  i(c('A grand tourer across the Dolomites','Una gran turismo sulle Dolomiti','Une GT dans les Dolomites','Un gran turismo por los Dolomitas'),'ROAD TEST · 12 MIN'),
  i(c('Buying carbon-ceramic brakes used','Comprare freni carboceramici usati','Acheter des freins carbone-céramique d’occasion','Comprar frenos carbocerámicos usados'),'GUIDE · 9 MIN'),
  i(c('Inside an analogue collection','Dentro una collezione analogica','Dans une collection analogique','Dentro de una colección analógica'),'COLLECTION · 7 MIN')]),

 'novacare-clinic/services':e('directory',[
  i(c('Heart & prevention','Cuore e prevenzione','Cœur et prévention','Corazón y prevención'),'CARDIOLOGY · NEXT 16:40'),
  i(c('Movement clinic','Clinica del movimento','Clinique du mouvement','Clínica del movimiento'),'SPORTS MEDICINE · TOMORROW'),
  i(c('Mind & sleep','Mente e sonno','Esprit et sommeil','Mente y sueño'),'INTEGRATED CARE · VIDEO AVAILABLE')]),
 'novacare-clinic/patient-area':e('dashboard',[
  i(c('Next appointment','Prossimo appuntamento','Prochain rendez-vous','Próxima cita'),'18 SEP · 16:40'),
  i(c('Documents ready','Documenti pronti','Documents prêts','Documentos listos'),'4 / 4'),
  i(c('New reports','Nuovi referti','Nouveaux résultats','Nuevos informes'),'2 AVAILABLE'),
  i(c('Care tasks','Attività del percorso','Tâches de soins','Tareas de atención'),'3 OF 5 COMPLETE')]),
 'novacare-clinic/prevention':e('pricing',[
  i(c('Essential screening','Screening essenziale','Dépistage essentiel','Cribado esencial'),'€180 / YEAR',undefined,180),
  i(c('Active life','Vita attiva','Vie active','Vida activa'),'€320 / YEAR',undefined,320),
  i(c('Complete prevention','Prevenzione completa','Prévention complète','Prevención completa'),'€590 / YEAR',undefined,590)]),
 'novacare-clinic/resources':e('editorial',[
  i(c('Preparing for blood tests','Prepararsi agli esami del sangue','Se préparer aux analyses sanguines','Prepararse para análisis de sangre'),'PATIENT GUIDE · 4 MIN'),
  i(c('Understanding an MRI referral','Capire una prescrizione RM','Comprendre une prescription IRM','Entender una solicitud de RM'),'DIAGNOSTICS · 6 MIN'),
  i(c('When to use urgent care','Quando usare l’assistenza urgente','Quand utiliser les soins urgents','Cuándo usar atención urgente'),'SAFETY · 5 MIN')]),

 'atlas-journeys/about':e('editorial',[
  i(c('Why we travel slowly','Perché viaggiamo lentamente','Pourquoi nous voyageons lentement','Por qué viajamos despacio'),'MANIFESTO · 6 MIN'),
  i(c('Meet the field designers','I nostri field designer','Nos designers de terrain','Nuestros diseñadores de campo'),'PEOPLE · 08'),
  i(c('Local value, measured','Valore locale, misurato','Valeur locale, mesurée','Valor local, medido'),'IMPACT REPORT')]),
 'atlas-journeys/stays':e('catalog',[
  i(c('Kurokawa forest ryokan','Ryokan nella foresta di Kurokawa','Ryokan forestier de Kurokawa','Ryokan del bosque de Kurokawa'),'JAPAN · FROM €420',undefined,420,'quiet'),
  i(c('Cádiz courtyard house','Casa a corte di Cadice','Maison à patio de Cadix','Casa patio de Cádiz'),'SPAIN · FROM €260',undefined,260,'culture'),
  i(c('Westfjords cabin','Cabin nei Fiordi Occidentali','Cabane des Westfjords','Cabaña de los Fiordos Occidentales'),'ICELAND · FROM €380',undefined,380,'remote')]),
 'atlas-journeys/concierge':e('form',[
  i(c('Before departure','Prima della partenza','Avant le départ','Antes de salir'),'DOCUMENTS · PACKING · ACCESS'),
  i(c('On the road','Durante il viaggio','En voyage','Durante el viaje'),'24/7 LOCAL SUPPORT'),
  i(c('After returning','Al ritorno','Au retour','Al volver'),'ARCHIVE · FOLLOW-UP')]),
 'atlas-journeys/partners':e('directory',[
  i(c('Nami Field Office','Nami Field Office','Nami Field Office','Nami Field Office'),'TOHOKU · SINCE 2018'),
  i(c('Sur Atlas Collective','Sur Atlas Collective','Sur Atlas Collective','Sur Atlas Collective'),'ANDALUSIA · SINCE 2020'),
  i(c('Norður Studio','Norður Studio','Norður Studio','Norður Studio'),'WESTFJORDS · SINCE 2017')]),

 'forge-digital-academy/mentors':e('directory',[
  i(c('Amira Cole','Amira Cole','Amira Cole','Amira Cole'),'SYSTEMS · 12 OPEN SLOTS'),
  i(c('Leo Marin','Leo Marin','Leo Marin','Leo Marin'),'FRONTEND · 8 OPEN SLOTS'),
  i(c('Noor Benali','Noor Benali','Noor Benali','Noor Benali'),'AUTOMATION · 10 OPEN SLOTS')]),
 'forge-digital-academy/projects':e('cases',[
  i(c('Incident response console','Console di incident response','Console de réponse aux incidents','Consola de respuesta a incidentes'),'COHORT 26 · TYPESCRIPT'),
  i(c('Community request router','Router richieste community','Routeur de demandes communautaires','Enrutador de solicitudes comunitarias'),'COHORT 25 · PYTHON'),
  i(c('Accessible component system','Sistema di componenti accessibili','Système de composants accessibles','Sistema de componentes accesibles'),'COHORT 24 · ASTRO')]),
 'forge-digital-academy/pricing':e('pricing',[
  i(c('Interface systems','Sistemi di interfaccia','Systèmes d’interface','Sistemas de interfaz'),'€690 · 6 WEEKS',undefined,690),
  i(c('Automation engineering','Automation engineering','Ingénierie automation','Ingeniería de automatización'),'€980 · 8 WEEKS',undefined,980),
  i(c('Full-stack systems','Sistemi full-stack','Systèmes full-stack','Sistemas full-stack'),'€1,480 · 12 WEEKS',undefined,1480)]),
 'forge-digital-academy/enterprise':e('form',[
  i(c('Team capability map','Mappa competenze team','Cartographie des compétences','Mapa de capacidades del equipo'),'DISCOVERY · 2 WEEKS'),
  i(c('Private learning track','Percorso formativo privato','Parcours privé','Ruta formativa privada'),'8—16 WEEKS'),
  i(c('Outcome dashboard','Dashboard dei risultati','Dashboard des résultats','Panel de resultados'),'LIVE REPORTING')])
};

export const experienceFor=(site:string,page:string)=>showcaseExperiences[`${site}/${page}`];
