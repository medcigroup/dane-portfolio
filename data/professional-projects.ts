export type ProfessionalProject = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  period: string;
  organization: string;
  department: string;
  role: string;
  status: string;
  summary: string;
  challenge: string;
  objective: string;
  image: string;
  imageAlt: string;
  externalUrl?: string;
  metrics: { value: string; label: string; detail: string }[];
  context: string[];
  dataSpecifications: { label: string; value: string }[];
  methodSteps: { title: string; description: string }[];
  spectralFamilies: {
    title: string;
    description: string;
    indices: string[];
    classification: string;
  }[];
  architecture: { title: string; items: string[] }[];
  contribution: string[];
  results: { title: string; description: string }[];
  limitations: string[];
  perspectives: string[];
  deliverables: string[];
  tools: string[];
  sourceNote: string;
  sectionLabels?: {
    contextTitle?: string;
    specificationsEyebrow?: string;
    specificationsTitle?: string;
    methodTitle?: string;
    familiesEyebrow?: string;
    familiesTitle?: string;
    architectureEyebrow?: string;
    architectureTitle?: string;
    architectureNote?: string;
    resultsEyebrow?: string;
    resultsTitle?: string;
    limitationsEyebrow?: string;
    limitationsTitle?: string;
    perspectivesTitle?: string;
  };
};

export const professionalProjects: ProfessionalProject[] = [
  {
    slug: "growaa-agri-analytics",
    title: "Développement de la plateforme GROWAA",
    shortTitle: "GROWAA · Agriculture de précision",
    eyebrow: "AgriTech · Produit SaaS · Direction technologique",
    period: "En cours",
    organization: "GROWAA",
    department: "Grow Agri Analytics",
    role: "CTO · Co-conception et développement de la plateforme",
    status: "Plateforme web en production",
    summary:
      "Pilotage technologique et développement de GROWAA, une plateforme d’agriculture de précision qui transforme les images satellitaires en indicateurs, alertes et recommandations directement exploitables à l’échelle de la parcelle.",
    challenge:
      "Rendre l’analyse satellitaire agricole suffisamment simple, rapide et lisible pour accompagner les décisions quotidiennes des exploitants, sans leur imposer la complexité des outils géospatiaux.",
    objective:
      "Concevoir une plateforme unifiée permettant de délimiter les parcelles, suivre leur état, interpréter des indices de végétation et produire des recommandations opérationnelles pour mieux planifier l’irrigation, la récolte et les interventions au champ.",
    image: "/images/growaa-platform.png",
    imageAlt: "Interface de la plateforme GROWAA montrant une carte de parcelles agricoles et leurs indicateurs",
    externalUrl: "https://growaa.io/",
    metrics: [
      { value: "10", label: "indices de végétation", detail: "Indicateurs mobilisés pour le suivi des cultures" },
      { value: "1", label: "plateforme unifiée", detail: "Cartographie, analyses et rapports dans un même environnement" },
      { value: "Web", label: "accès à la solution", detail: "Une interface utilisable depuis un navigateur" },
      { value: "IA", label: "aide agronomique", detail: "Interprétation des données et recommandations contextualisées" },
    ],
    context: [
      "Les exploitants agricoles disposent de plus en plus de données satellitaires, météorologiques et parcellaires, mais leur exploitation reste souvent réservée à des spécialistes. GROWAA rapproche ces informations du terrain au moyen d’une interface claire, centrée sur les décisions à prendre.",
      "La plateforme associe cartographie interactive, suivi d’indicateurs de végétation, alertes et rapports partageables. Le produit est pensé pour le contexte ivoirien, avec une expérience en français et des parcours adaptés aux réalités opérationnelles locales.",
    ],
    dataSpecifications: [
      { label: "Unité d’analyse", value: "Parcelle agricole" },
      { label: "Source principale", value: "Imagerie satellitaire" },
      { label: "Indicateurs", value: "10 indices de végétation" },
      { label: "Restitution", value: "Cartes, alertes et rapports" },
      { label: "Interface", value: "Application web responsive" },
      { label: "Marché initial", value: "Côte d’Ivoire" },
    ],
    methodSteps: [
      {
        title: "Cadrer le produit et les usages",
        description: "Traduction des besoins agricoles en parcours simples : création de parcelles, consultation des analyses, suivi des alertes et partage des résultats.",
      },
      {
        title: "Concevoir l’architecture technique",
        description: "Définition d’une architecture modulaire reliant l’interface Flutter, les services cartographiques et la chaîne d’analyse des données agricoles.",
      },
      {
        title: "Développer l’expérience cartographique",
        description: "Mise en œuvre de la visualisation des parcelles, de leur délimitation et de la consultation contextualisée des indicateurs sur la carte.",
      },
      {
        title: "Transformer les données en décisions",
        description: "Structuration des indices, alertes et recommandations afin de rendre les observations satellitaires directement compréhensibles et actionnables.",
      },
      {
        title: "Déployer et faire évoluer la plateforme",
        description: "Mise en production du produit web, suivi de sa fiabilité et amélioration continue des fonctionnalités selon les usages terrain.",
      },
    ],
    spectralFamilies: [
      {
        title: "Suivi des cultures",
        description: "Lecture synthétique de la vigueur, de l’humidité et de l’évolution des parcelles à partir d’indices de végétation.",
        indices: ["Vigueur", "Humidité", "Évolution", "Anomalies"],
        classification: "Une lecture par parcelle pour repérer rapidement les zones qui demandent une attention particulière.",
      },
      {
        title: "Aide à la décision",
        description: "Passage de l’observation à l’action grâce aux alertes, à l’assistance agronomique et aux rapports prêts à partager.",
        indices: ["Alertes", "Agronome IA", "Rapports", "Recommandations"],
        classification: "Des informations hiérarchisées pour irriguer, intervenir ou préparer la récolte au bon moment.",
      },
    ],
    architecture: [
      {
        title: "Expérience produit",
        items: ["Flutter Web", "Interface responsive", "Parcours en français", "Tableaux de bord parcellaires"],
      },
      {
        title: "Cartographie",
        items: ["Google Maps", "OpenStreetMap", "Délimitation de parcelles", "Visualisation thématique"],
      },
      {
        title: "Intelligence agricole",
        items: ["Indices de végétation", "Analyse satellitaire", "Alertes opérationnelles", "Rapports partageables"],
      },
    ],
    contribution: [
      "Définition de la vision technologique et de la feuille de route produit",
      "Conception de l’architecture fonctionnelle et technique de la plateforme",
      "Développement de l’application web et de ses parcours cartographiques",
      "Intégration des indicateurs satellitaires et des mécanismes d’aide à la décision",
      "Pilotage de la mise en production, de la qualité et des évolutions du produit",
    ],
    results: [
      {
        title: "Une plateforme accessible en ligne",
        description: "GROWAA dispose d’une expérience web publique et d’un espace applicatif pour gérer et analyser les parcelles agricoles.",
      },
      {
        title: "La parcelle au centre du produit",
        description: "La cartographie, les indicateurs et les recommandations sont organisés autour de l’unité de décision réelle de l’exploitant.",
      },
      {
        title: "Des analyses rendues lisibles",
        description: "Les indices de végétation sont présentés sous forme de cartes, de signaux et de rapports faciles à interpréter.",
      },
      {
        title: "Une base évolutive",
        description: "L’architecture modulaire permet d’enrichir progressivement les sources de données, les analyses et l’accompagnement agronomique.",
      },
    ],
    limitations: [
      "La qualité des analyses dépend de la disponibilité, de la résolution et de la fraîcheur des images satellitaires.",
      "La couverture nuageuse peut réduire la continuité du suivi optique pendant certaines périodes.",
      "Les recommandations doivent rester contextualisées par la culture, le stade phénologique et les observations de terrain.",
      "L’adoption implique une expérience sobre en données et adaptée aux conditions de connectivité des utilisateurs.",
    ],
    perspectives: [
      "Renforcer la personnalisation des recommandations selon les cultures et les profils d’exploitation.",
      "Croiser davantage les observations satellitaires avec les données météo et les retours du terrain.",
      "Développer les alertes prédictives et les synthèses automatiques à l’échelle d’un portefeuille de parcelles.",
      "Étendre les partenariats avec les agronomes, coopératives et acteurs de la chaîne de valeur agricole.",
    ],
    deliverables: [
      "Plateforme web GROWAA",
      "Interface cartographique de gestion des parcelles",
      "Tableaux de bord et indices de végétation",
      "Système d’alertes et de recommandations",
      "Rapports agricoles partageables",
      "Architecture technique évolutive",
    ],
    tools: ["Flutter Web", "Google Maps", "OpenStreetMap", "Télédétection", "Analyse satellitaire", "IA"],
    sourceNote:
      "Présentation fondée sur les fonctionnalités publiques de GROWAA et sur mon rôle de CTO dans la conception et le développement de la plateforme.",
    sectionLabels: {
      contextTitle: "Transformer l’observation satellitaire en outil de pilotage agricole.",
      specificationsEyebrow: "Périmètre produit",
      specificationsTitle: "Une plateforme conçue autour de la parcelle.",
      methodTitle: "Du besoin terrain à la mise en production.",
      familiesEyebrow: "Capacités de la plateforme",
      familiesTitle: "Observer, comprendre et décider dans un même espace.",
      architectureEyebrow: "Architecture produit",
      architectureTitle: "Une chaîne cohérente, de la carte à la recommandation.",
      architectureNote: "La plateforme évolue par modules afin d’intégrer progressivement de nouvelles données et de nouveaux services agricoles.",
      resultsEyebrow: "Produit livré",
      resultsTitle: "Une première version opérationnelle et évolutive.",
      limitationsEyebrow: "Contraintes de conception",
      limitationsTitle: "Les réalités techniques et terrain prises en compte.",
      perspectivesTitle: "Faire grandir l’intelligence agricole de GROWAA.",
    },
  },
  {
    slug: "pegmatites-sodemi",
    title: "Cartographie prédictive de prospects pegmatitiques",
    shortTitle: "Prospection prédictive de pegmatites",
    eyebrow: "Géosciences · Télédétection · SODEMI",
    period: "Mai–août 2025",
    organization: "SODEMI",
    department: "DDP · SGDG",
    role: "Ingénieur stagiaire en télédétection et SIG",
    status: "Fondements méthodologiques et architecture conceptuelle",
    summary:
      "Développement d’une méthode de cartographie prédictive pour identifier des prospects miniers à fort potentiel en combinant images Landsat 9, indices spectraux, classifications non supervisées et données géologiques.",
    challenge:
      "Repérer des signatures pegmatitiques dans un environnement tropical où la végétation, les surfaces en eau et l’altération latéritique peuvent masquer les formations géologiques primaires.",
    objective:
      "Construire une chaîne de traitement reproductible et définir l’architecture d’une application web capable de transformer les observations satellitaires en cartes de prospects à valider sur le terrain.",
    image: "/images/pegmatite-prospectivity.png",
    imageAlt: "Composition satellitaire utilisée pour l’analyse de prospectivité pegmatitique",
    externalUrl: "https://medcigroup.github.io/pegmatiteApp/",
    metrics: [
      { value: "30 m", label: "Résolution Landsat 9", detail: "Produit L2SP de réflectance de surface" },
      { value: "6", label: "Bandes spectrales empilées", detail: "B2 à B7 : visible, PIR et SWIR" },
      { value: "8", label: "Indices spectraux développés", detail: "3 feldspathiques et 5 ferro-magnésiens" },
      { value: "2", label: "Classifications configurées", detail: "K-Means et ISODATA" },
    ],
    context: [
      "Les pegmatites du Craton Ouest-Africain constituent des cibles d’exploration pour des minéraux critiques tels que le lithium, le césium, le tantale et le niobium. La Côte d’Ivoire possède un contexte géologique favorable, notamment dans les domaines archéens et paléoprotérozoïques.",
      "La détection satellitaire reste toutefois difficile en contexte tropical. Les profils d’altération, la couverture végétale, les nuages et les mélanges de pixels réduisent la visibilité des signatures minérales. Le projet répond à cette difficulté par une chaîne de prétraitement, d’indices diagnostiques et d’analyse multicritère.",
    ],
    dataSpecifications: [
      { label: "Capteur", value: "Landsat 9" },
      { label: "Produit", value: "L2SP · Surface Reflectance" },
      { label: "Résolution", value: "30 mètres" },
      { label: "Bandes", value: "B2, B3, B4, B5, B6 et B7" },
      { label: "Nuages", value: "Couverture inférieure à 30 %" },
      { label: "Masques", value: "NDVI > 0,3 · NDWI > 0,2" },
    ],
    methodSteps: [
      {
        title: "Acquérir et préparer les images",
        description: "Sélection des produits Landsat 9 L2SP, empilement des bandes B2 à B7 et contrôle de la couverture nuageuse.",
      },
      {
        title: "Réduire les interférences",
        description: "Application de masques NDVI et NDWI afin d’écarter les pixels dominés par la végétation ou les surfaces en eau.",
      },
      {
        title: "Calculer les signatures diagnostiques",
        description: "Production de huit indices spectraux ciblant deux familles de pegmatites : feldspathiques grenues et ferro-magnésiennes.",
      },
      {
        title: "Segmenter les unités spectrales",
        description: "Configuration de classifications non supervisées K-Means et ISODATA avec 15 à 20 classes et 50 itérations maximales.",
      },
      {
        title: "Hiérarchiser les pixels candidats",
        description: "Analyse multicritère et classement des signatures candidates en potentiel élevé, moyen ou faible avant validation terrain.",
      },
    ],
    spectralFamilies: [
      {
        title: "Pegmatites feldspathiques grenues",
        description: "Détection des formations claires riches en feldspath et quartz.",
        indices: ["Feldspath_Ratio", "Quartz_Index", "Bright_Index"],
        classification: "K-Means · stack de 9 variables · seuil de convergence 0,01",
      },
      {
        title: "Pegmatites à biotite-magnétite",
        description: "Recherche des signatures associées aux minéraux ferro-magnésiens et aux micas.",
        indices: ["Iron_Ratio", "Ferrous_Iron", "Magnetite_Index", "Reflectance_Moyenne", "Biotite_OH"],
        classification: "ISODATA · stack de 11 variables · écart-type 2,0",
      },
    ],
    architecture: [
      {
        title: "Interface cartographique",
        items: ["Flutter Web", "flutter_map", "BLoC/Cubit", "Graphiques avec fl_chart"],
      },
      {
        title: "Traitement géospatial",
        items: ["FastAPI", "GDAL et Rasterio", "Scikit-learn", "Celery et Redis"],
      },
      {
        title: "Données et diffusion",
        items: ["PostgreSQL/PostGIS", "GeoServer WMS/WFS", "Stockage MinIO ou S3", "Exports SHP, KML et GeoJSON"],
      },
    ],
    contribution: [
      "Structuration du flux de traitement satellitaire et des règles de masquage",
      "Conception de huit indices spectraux adaptés aux signatures pegmatitiques ciblées",
      "Paramétrage des classifications K-Means et ISODATA",
      "Formalisation de l’analyse multicritère et du protocole de validation terrain",
      "Conception de l’architecture fonctionnelle et technique de l’application cartographique",
    ],
    results: [
      {
        title: "Prétraitement opérationnel",
        description: "L’empilement des six bandes et les masques NDVI/NDWI ont été mis en œuvre pour réduire les interférences spectrales.",
      },
      {
        title: "Huit indices spécialisés",
        description: "Trois indices feldspathiques et cinq indices ferro-magnésiens constituent l’apport méthodologique principal du stage.",
      },
      {
        title: "Paramètres de classification établis",
        description: "Les configurations K-Means et ISODATA ont été définies pour segmenter les unités spectrales candidates.",
      },
      {
        title: "Premiers contrastes encourageants",
        description: "Les essais disponibles montrent une discrimination préliminaire entre zones candidates et roches encaissantes, à confirmer sur le terrain.",
      },
    ],
    limitations: [
      "Le stage a été interrompu avant la validation complète de l’approche et le développement final de l’application web.",
      "À 30 m de résolution, Landsat 9 détecte difficilement les dykes pegmatitiques plus étroits que 60 à 90 m.",
      "Les mélanges de pixels et les contacts lithologiques compliquent l’interprétation des signatures spectrales.",
      "Les données géophysiques et géochimiques à haute résolution disponibles pour la validation croisée étaient limitées.",
      "La couverture nuageuse et l’accessibilité des zones forestières contraignent l’acquisition d’images et la validation terrain.",
    ],
    perspectives: [
      "Combiner Landsat 9 avec Sentinel-2, ASTER et Sentinel-1 pour améliorer la résolution et l’information structurale.",
      "Tester des modèles Random Forest et des réseaux convolutifs sur des échantillons validés.",
      "Intégrer les données géologiques, géophysiques, géochimiques et topographiques dans un modèle prédictif commun.",
      "Réaliser une campagne terrain stratifiée et viser un seuil minimal de précision de 65 % avant usage opérationnel.",
    ],
    deliverables: [
      "Monogramme reproductible du processus de prospection",
      "Jeu de huit indices spectraux diagnostiques",
      "Paramétrage des classifications K-Means et ISODATA",
      "Protocole conceptuel de validation terrain",
      "Architecture modulaire de l’application web et mobile",
      "Rapport de stage SODEMI",
    ],
    tools: ["Landsat 9", "Python", "QGIS", "K-Means", "ISODATA", "Flutter", "FastAPI", "PostGIS"],
    sourceNote:
      "Synthèse établie à partir du rapport de stage SODEMI. Les résultats présentés sont préliminaires et n’ont pas fait l’objet d’une validation terrain complète pendant la période du stage.",
  },
];

const professionalProjectTranslations: Record<string, Partial<ProfessionalProject>> = {
  "growaa-agri-analytics": {
    title: "Development of the GROWAA platform",
    shortTitle: "GROWAA · Precision agriculture",
    eyebrow: "AgriTech · SaaS product · Technology leadership",
    period: "Ongoing",
    role: "CTO · Platform co-design and development",
    status: "Web platform in production",
    summary: "Technology leadership and development of GROWAA, a precision-agriculture platform that turns satellite imagery into actionable indicators, alerts and recommendations at field scale.",
    challenge: "Make agricultural satellite analysis simple, fast and readable enough to support farmers’ daily decisions without exposing them to the complexity of geospatial tools.",
    objective: "Design a unified platform for defining fields, monitoring their condition, interpreting vegetation indices and producing operational recommendations for irrigation, harvesting and field operations.",
    imageAlt: "GROWAA platform interface showing an agricultural field map and its indicators",
    sourceNote: "Presentation based on GROWAA’s public features and on my role as CTO in the platform’s design and development.",
    metrics: [
      { value: "10", label: "vegetation indices", detail: "Indicators used for crop monitoring" },
      { value: "1", label: "unified platform", detail: "Mapping, analysis and reports in one environment" },
      { value: "Web", label: "solution access", detail: "An interface available from a browser" },
      { value: "AI", label: "agronomic assistance", detail: "Contextual data interpretation and recommendations" },
    ],
    context: [
      "Farmers have access to increasing amounts of satellite, weather and field data, but using it often remains the work of specialists. GROWAA brings these sources closer to the field through a clear interface focused on decisions.",
      "The platform combines interactive mapping, vegetation-index monitoring, alerts and shareable reports. It is designed for the Ivorian context, with an experience in French and workflows adapted to local operating conditions.",
    ],
    dataSpecifications: [
      { label: "Analysis unit", value: "Agricultural field" },
      { label: "Primary source", value: "Satellite imagery" },
      { label: "Indicators", value: "10 vegetation indices" },
      { label: "Output", value: "Maps, alerts and reports" },
      { label: "Interface", value: "Responsive web application" },
      { label: "Initial market", value: "Côte d’Ivoire" },
    ],
    methodSteps: [
      { title: "Frame the product and its uses", description: "Translate agricultural needs into simple workflows: field creation, analysis review, alert monitoring and result sharing." },
      { title: "Design the technical architecture", description: "Define a modular architecture connecting the Flutter interface, mapping services and agricultural data-analysis pipeline." },
      { title: "Develop the mapping experience", description: "Implement field visualization and delineation, together with contextual indicator exploration on the map." },
      { title: "Turn data into decisions", description: "Structure indices, alerts and recommendations so satellite observations become understandable and actionable." },
      { title: "Deploy and evolve the platform", description: "Put the web product into production, monitor its reliability and continuously improve features based on field use." },
    ],
    spectralFamilies: [
      { title: "Crop monitoring", description: "A concise view of field vigor, moisture and change based on vegetation indices.", indices: ["Vigor", "Moisture", "Change", "Anomalies"], classification: "A field-by-field view to quickly identify areas requiring attention." },
      { title: "Decision support", description: "Move from observation to action through alerts, agronomic assistance and ready-to-share reports.", indices: ["Alerts", "AI agronomist", "Reports", "Recommendations"], classification: "Prioritized information for irrigation, intervention or harvest planning at the right time." },
    ],
    architecture: [
      { title: "Product experience", items: ["Flutter Web", "Responsive interface", "French-language workflows", "Field dashboards"] },
      { title: "Mapping", items: ["Google Maps", "OpenStreetMap", "Field delineation", "Thematic visualization"] },
      { title: "Agricultural intelligence", items: ["Vegetation indices", "Satellite analysis", "Operational alerts", "Shareable reports"] },
    ],
    contribution: [
      "Define the technology vision and product roadmap",
      "Design the platform’s functional and technical architecture",
      "Develop the web application and its mapping workflows",
      "Integrate satellite indicators and decision-support mechanisms",
      "Lead production delivery, quality and product evolution",
    ],
    results: [
      { title: "An online platform", description: "GROWAA provides a public web experience and an application space for managing and analyzing agricultural fields." },
      { title: "The field at the center", description: "Mapping, indicators and recommendations are organized around the farmer’s actual decision unit." },
      { title: "More readable analysis", description: "Vegetation indices are presented as maps, signals and reports that are easy to interpret." },
      { title: "An extensible foundation", description: "The modular architecture allows data sources, analysis and agronomic support to grow over time." },
    ],
    limitations: [
      "Analysis quality depends on the availability, resolution and freshness of satellite imagery.",
      "Cloud cover can reduce the continuity of optical monitoring during certain periods.",
      "Recommendations must remain contextualized by crop, growth stage and field observations.",
      "Adoption requires a data-light experience adapted to users’ connectivity conditions.",
    ],
    perspectives: [
      "Further personalize recommendations by crop and farm profile.",
      "Combine satellite observations more closely with weather data and field feedback.",
      "Develop predictive alerts and automated summaries across portfolios of fields.",
      "Expand partnerships with agronomists, cooperatives and agricultural value-chain actors.",
    ],
    deliverables: ["GROWAA web platform", "Field-management mapping interface", "Dashboards and vegetation indices", "Alert and recommendation system", "Shareable agricultural reports", "Extensible technical architecture"],
    tools: ["Flutter Web", "Google Maps", "OpenStreetMap", "Remote sensing", "Satellite analysis", "AI"],
    sectionLabels: {
      contextTitle: "Turning satellite observation into an agricultural management tool.",
      specificationsEyebrow: "Product scope",
      specificationsTitle: "A platform designed around the field.",
      methodTitle: "From field needs to production.",
      familiesEyebrow: "Platform capabilities",
      familiesTitle: "Observe, understand and decide in one place.",
      architectureEyebrow: "Product architecture",
      architectureTitle: "A coherent chain from map to recommendation.",
      architectureNote: "The platform evolves through modules that progressively integrate new agricultural data and services.",
      resultsEyebrow: "Delivered product",
      resultsTitle: "An operational and extensible first version.",
      limitationsEyebrow: "Design constraints",
      limitationsTitle: "Technical and field realities built into the product.",
      perspectivesTitle: "Growing GROWAA’s agricultural intelligence.",
    },
  },
  "pegmatites-sodemi": {
    title: "Predictive mapping of pegmatite prospects",
    shortTitle: "Predictive pegmatite prospecting",
    eyebrow: "Geoscience · Remote sensing · SODEMI",
    period: "May–August 2025",
    role: "Remote-sensing and GIS intern",
    status: "Methodological foundations and conceptual architecture",
    summary: "Development of a predictive-mapping method to identify high-potential mining prospects by combining Landsat 9 imagery, spectral indices, unsupervised classifications and geological data.",
    challenge: "Detect pegmatite signatures in a tropical environment where vegetation, water surfaces and lateritic weathering can conceal primary geological formations.",
    objective: "Build a reproducible processing chain and define a web-application architecture that turns satellite observations into prospect maps for field validation.",
    imageAlt: "Satellite composition used for pegmatite prospectivity analysis",
    sourceNote: "Summary based on the SODEMI internship report. The results are preliminary and were not fully field-validated during the internship.",
    metrics: [
      { value: "30 m", label: "Landsat 9 resolution", detail: "L2SP surface-reflectance product" },
      { value: "6", label: "stacked spectral bands", detail: "B2 to B7: visible, NIR and SWIR" },
      { value: "8", label: "spectral indices developed", detail: "3 feldspathic and 5 ferromagnesian indices" },
      { value: "2", label: "configured classifications", detail: "K-Means and ISODATA" },
    ],
    context: [
      "Pegmatites in the West African Craton are exploration targets for critical minerals such as lithium, cesium, tantalum and niobium. Côte d’Ivoire has a favorable geological setting, particularly in Archean and Paleoproterozoic domains.",
      "Satellite detection remains difficult in tropical environments. Weathering profiles, vegetation, clouds and mixed pixels reduce the visibility of mineral signatures. This project addresses the challenge through preprocessing, diagnostic indices and multicriteria analysis.",
    ],
    dataSpecifications: [
      { label: "Sensor", value: "Landsat 9" },
      { label: "Product", value: "L2SP · Surface Reflectance" },
      { label: "Resolution", value: "30 meters" },
      { label: "Bands", value: "B2, B3, B4, B5, B6 and B7" },
      { label: "Clouds", value: "Less than 30% cloud cover" },
      { label: "Masks", value: "NDVI > 0.3 · NDWI > 0.2" },
    ],
    methodSteps: [
      { title: "Acquire and prepare imagery", description: "Select Landsat 9 L2SP products, stack bands B2 to B7 and check cloud cover." },
      { title: "Reduce interference", description: "Apply NDVI and NDWI masks to exclude pixels dominated by vegetation or water surfaces." },
      { title: "Calculate diagnostic signatures", description: "Produce eight spectral indices targeting two pegmatite families: coarse feldspathic and ferromagnesian." },
      { title: "Segment spectral units", description: "Configure unsupervised K-Means and ISODATA classifications with 15 to 20 classes and a maximum of 50 iterations." },
      { title: "Rank candidate pixels", description: "Use multicriteria analysis to rank candidate signatures as high, medium or low potential before field validation." },
    ],
    spectralFamilies: [
      { title: "Coarse feldspathic pegmatites", description: "Detect light-colored formations rich in feldspar and quartz.", indices: ["Feldspar_Ratio", "Quartz_Index", "Bright_Index"], classification: "K-Means · 9-variable stack · 0.01 convergence threshold" },
      { title: "Biotite-magnetite pegmatites", description: "Search for signatures associated with ferromagnesian minerals and micas.", indices: ["Iron_Ratio", "Ferrous_Iron", "Magnetite_Index", "Mean_Reflectance", "Biotite_OH"], classification: "ISODATA · 11-variable stack · standard deviation 2.0" },
    ],
    architecture: [
      { title: "Mapping interface", items: ["Flutter Web", "flutter_map", "BLoC/Cubit", "Charts with fl_chart"] },
      { title: "Geospatial processing", items: ["FastAPI", "GDAL and Rasterio", "Scikit-learn", "Celery and Redis"] },
      { title: "Data and delivery", items: ["PostgreSQL/PostGIS", "GeoServer WMS/WFS", "MinIO or S3 storage", "SHP, KML and GeoJSON exports"] },
    ],
    contribution: [
      "Structure the satellite-processing workflow and masking rules",
      "Design eight spectral indices for the targeted pegmatite signatures",
      "Configure K-Means and ISODATA classifications",
      "Formalize the multicriteria analysis and field-validation protocol",
      "Design the functional and technical architecture of the mapping application",
    ],
    results: [
      { title: "Operational preprocessing", description: "Six-band stacking and NDVI/NDWI masks were implemented to reduce spectral interference." },
      { title: "Eight specialized indices", description: "Three feldspathic and five ferromagnesian indices form the internship’s main methodological contribution." },
      { title: "Classification parameters established", description: "K-Means and ISODATA configurations were defined to segment candidate spectral units." },
      { title: "Promising initial contrasts", description: "Available trials show preliminary discrimination between candidate areas and host rocks, to be confirmed in the field." },
    ],
    limitations: [
      "The internship ended before full validation of the approach and final development of the web application.",
      "At 30 m resolution, Landsat 9 has difficulty detecting pegmatite dykes narrower than 60 to 90 m.",
      "Mixed pixels and lithological contacts complicate the interpretation of spectral signatures.",
      "High-resolution geophysical and geochemical data available for cross-validation were limited.",
      "Cloud cover and access to forested areas constrain imagery acquisition and field validation.",
    ],
    perspectives: [
      "Combine Landsat 9 with Sentinel-2, ASTER and Sentinel-1 to improve resolution and structural information.",
      "Test Random Forest models and convolutional networks on validated samples.",
      "Integrate geological, geophysical, geochemical and topographic data into a shared predictive model.",
      "Conduct a stratified field campaign and target a minimum accuracy threshold of 65% before operational use.",
    ],
    deliverables: ["Reproducible prospecting workflow", "Set of eight diagnostic spectral indices", "K-Means and ISODATA classification configuration", "Conceptual field-validation protocol", "Modular web and mobile application architecture", "SODEMI internship report"],
    tools: ["Landsat 9", "Python", "QGIS", "K-Means", "ISODATA", "Flutter", "FastAPI", "PostGIS"],
  },
};

export const professionalProjectsEn: ProfessionalProject[] = professionalProjects.map((project) => ({
  ...project,
  ...professionalProjectTranslations[project.slug],
}));
