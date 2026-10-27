export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  organization: string;
  summary: string;
  image: string;
  imageAlt: string;
  tools: string[];
  question: string;
  data: string[];
  methods: string[];
  contribution: string[];
  results: string[];
  deliverables: string[];
  metrics?: { value: string; label: string; detail?: string }[];
  context?: string[];
  methodSteps?: { title: string; description: string }[];
  keyFindings?: { title: string; description: string }[];
  limitations?: string[];
  recommendations?: string[];
  sourceNote?: string;
  externalUrl?: string;
  documentUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "secheresse-zanzan",
    title: "Sécheresse dans le Zanzan, 1984–2053",
    eyebrow: "Télédétection & climat",
    period: "2022–2024",
    organization: "CURAT · Université Félix Houphouët-Boigny",
    summary:
      "Quarante années d’observations climatiques et satellitaires, complétées par des projections jusqu’en 2053, pour caractériser la sécheresse et éclairer l’adaptation territoriale.",
    image: "/images/zanzan-drought-map.png",
    imageAlt:
      "Visualisation satellitaire des contrastes de végétation et de sécheresse dans le Zanzan",
    tools: ["Landsat 5–9", "QGIS", "Python", "Google Earth Engine", "SNAP"],
    question:
      "Comment la sécheresse a-t-elle évolué dans le district autonome du Zanzan et quelles zones pourraient devenir les plus vulnérables à l’horizon 2053 ?",
    data: [
      "Images Landsat 5, 7, 8 et 9",
      "Précipitations CHIRPS et indices climatiques, 1984–2023",
      "Projections SPI et EDI, 2024–2053",
      "Enquête PAAZ sur les perceptions locales, 2024",
    ],
    methods: [
      "Harmonisation d’images satellitaires",
      "Calcul d’indices ETCCDI et d’indices spectraux",
      "Analyse de tendances et séries temporelles",
      "Cartographie des zones vulnérables",
    ],
    contribution: [
      "Conception du protocole d’analyse",
      "Traitement des données raster et climatiques",
      "Production des cartes et interprétation territoriale",
      "Rédaction du mémoire scientifique",
    ],
    results: [
      "Caractérisation de 40 années observées et de 30 années projetées",
      "Localisation des secteurs exposés aux risques de sécheresse",
      "Recommandations pour les politiques territoriales d’adaptation",
    ],
    deliverables: ["Mémoire de Master 2 · 2024", "Atlas cartographique", "Séries et indicateurs climatiques"],
    metrics: [
      { value: "40 ans", label: "de données observées", detail: "1984–2023" },
      { value: "95,2 %", label: "connaissent le changement climatique", detail: "Enquête PAAZ 2024" },
      { value: "+2 °C", label: "de température de surface", detail: "Ordre de grandeur, 1984–2024" },
      { value: "−9,5 %", label: "de forêts et ripisylves", detail: "Transition 1989–2000" },
    ],
    context: [
      "Le district autonome du Zanzan, au nord-est de la Côte d’Ivoire, dépend fortement de l’agriculture et de ressources en eau sensibles à la variabilité des pluies. La recherche confronte les perceptions des habitants aux observations climatiques et satellitaires.",
      "L’analyse distingue clairement la période historique 1984–2023 des projections 2024–2053. Elle étudie conjointement les précipitations, les températures de surface et les transformations de l’occupation du sol.",
    ],
    methodSteps: [
      { title: "Documenter les perceptions locales", description: "Analyse de l’enquête PAAZ 2024 sur la sécheresse, la chaleur, la variabilité des pluies et la durée des saisons humides." },
      { title: "Caractériser les tendances climatiques", description: "Calcul des indices ETCCDI, dont R10mm, R20mm, R30mm, CDD et SDII, puis analyse des tendances sur la période 1984–2023." },
      { title: "Mesurer les transformations du territoire", description: "Calcul de la température de surface et classification de l’occupation du sol par Random Forest, avec 70 % des échantillons pour l’apprentissage et 30 % pour la validation." },
      { title: "Évaluer la sécheresse présente et future", description: "Analyse des indices SPI et EDI, régression des séries temporelles et interpolation spatiale IDW pour repérer les secteurs les plus exposés." },
    ],
    keyFindings: [
      { title: "Une évolution climatique déjà perceptible", description: "La sécheresse est citée par 77 % des répondants, 74,9 % jugent les pluies plus variables et 94 % estiment que les saisons pluvieuses sont plus courtes." },
      { title: "Un gradient thermique nord–sud", description: "En 2024, les températures de surface dépassent 37 °C dans plusieurs secteurs du nord-ouest, notamment autour de Doropo et Téhini, tandis que le sud reste relativement plus frais." },
      { title: "Des transformations rapides de l’occupation du sol", description: "Entre 2020 et 2024, les forêts et ripisylves reculent de 5,64 points et les terres cultivées de 9,87 points, tandis que les savanes et herbages progressent de 15,80 points." },
      { title: "Des risques futurs localisés", description: "Les projections SPI et EDI signalent la persistance d’une forte variabilité, avec un risque de sécheresses prolongées autour de Bondoukou, Nassian et Sandégué." },
    ],
    limitations: [
      "Plusieurs tendances pluviométriques présentent des coefficients de détermination faibles : elles décrivent une orientation, pas une évolution certaine.",
      "La précision des cartes dépend de la résolution Landsat, de la qualité des échantillons et de la méthode d’interpolation.",
      "Les résultats 2024–2053 sont des projections climatiques et doivent être lus comme des scénarios de risque.",
    ],
    recommendations: [
      "Renforcer le suivi climatique avec des données plus fréquentes et des images satellitaires à plus haute résolution.",
      "Cibler la restauration forestière et l’agroforesterie dans les secteurs où la couverture végétale recule.",
      "Développer la gestion économe de l’eau et les cultures adaptées aux séquences sèches plus longues.",
      "Combiner modèles climatiques régionaux, SIG et intelligence artificielle pour affiner les alertes territoriales.",
    ],
    sourceNote: "Mémoire de Master Télédétection et SIG, soutenu en 2024 · observations 1984–2023 · projections 2024–2053",
    documentUrl: "/documents/MEMOIRE%20DE%20RECHERCHE%20TELEDETECTION%20ET%20SIG.pdf",
  },
  {
    slug: "pegmatites-sodemi",
    title: "Prospection prédictive de pegmatites",
    eyebrow: "Géosciences & IA",
    period: "Mai–août 2025",
    organization: "SODEMI",
    summary:
      "Intégration de données géologiques, géophysiques et satellitaires pour repérer des secteurs à fort potentiel dans l’ouest ivoirien.",
    image: "/images/pegmatite-prospectivity.png",
    imageAlt:
      "Mosaïque satellite avec zones de prospectivité minière mises en évidence",
    tools: ["Python", "QGIS", "Machine Learning", "PostgreSQL", "PostGIS"],
    question:
      "Comment combiner des sources géoscientifiques hétérogènes pour prioriser les zones d’exploration de pegmatites ?",
    data: ["Données géologiques", "Données géophysiques", "Images satellitaires", "Observations spatialisées"],
    methods: [
      "Nettoyage et intégration de données multi-sources",
      "Construction de variables spatiales",
      "Modélisation prédictive",
      "Visualisation cartographique interactive",
    ],
    contribution: [
      "Structuration de la base de données géospatiale",
      "Développement des traitements Python",
      "Conception de l’application web de visualisation",
    ],
    results: [
      "Plus de dix zones d’intérêt identifiées",
      "Chaîne d’analyse reproductible",
      "Outil de lecture et de comparaison des résultats",
    ],
    deliverables: ["Application web", "Cartes de prospectivité", "Base de données géospatiale"],
    externalUrl: "https://medcigroup.github.io/pegmatiteApp/",
  },
  {
    slug: "eau-sante-agnibilekrou",
    title: "Eau potable et santé à Agnibilékrou",
    eyebrow: "Géographie de la santé",
    period: "2020–2024",
    organization: "IGT · Université Félix Houphouët-Boigny",
    summary:
      "Enquête auprès de 350 ménages, analyse statistique et cartographie des liens entre accès à l’eau, conditions de vie et pathologies hydriques.",
    image: "/images/agnibilekrou-water.png",
    imageAlt:
      "Vue aérienne documentaire d’une ville ivoirienne et de ses infrastructures d’eau",
    tools: ["QGIS", "KoboCollect", "SPSS", "Excel", "R"],
    question:
      "Quels facteurs socio-économiques et géo-environnementaux structurent les difficultés d’accès à l’eau et les risques sanitaires ?",
    data: ["350 questionnaires ménages", "Points d’eau géolocalisés", "Données sanitaires déclarées", "Observations de terrain"],
    methods: [
      "Échantillonnage et enquête de terrain",
      "Statistiques descriptives et tests d’association",
      "Analyse de corrélations",
      "Cartographie thématique",
    ],
    contribution: [
      "Conception et administration du questionnaire",
      "Traitement statistique",
      "Analyse spatiale et cartographie",
      "Co-rédaction de l’article scientifique",
    ],
    results: [
      "Mise en évidence du rôle de la taille des ménages et de la profession",
      "Identification des espaces et pratiques vulnérables",
      "Publication des résultats dans la Revue-IRS en 2024",
    ],
    deliverables: ["Article scientifique", "Mémoire de Master 2 · 2023", "Cartes et base d’enquête"],
    metrics: [
      { value: "350", label: "ménages enquêtés", detail: "Mars 2023" },
      { value: "80 %", label: "de ménages raccordés", detail: "Réseau d’eau potable" },
      { value: "9 %", label: "disposent toujours d’eau", detail: "Parmi les ménages raccordés" },
      { value: "R² 0,865", label: "taille du ménage et cas déclarés", detail: "Association statistique" },
    ],
    context: [
      "Agnibilékrou est passée de 24 413 habitants en 1988 à 69 737 en 2021. Cette croissance augmente la pression sur les infrastructures d’eau et oblige de nombreux ménages à combiner réseau public, puits, forages et achat d’eau au détail.",
      "L’étude distingue l’accès physique au réseau, la continuité du service, les pratiques domestiques et la qualité sanitaire. Cette distinction est essentielle : être raccordé ne garantit ni une disponibilité permanente ni une eau sans risque.",
    ],
    methodSteps: [
      { title: "Observer le système d’approvisionnement", description: "Inventaire des sources d’eau, des infrastructures, des distances d’accès et des pratiques de transport et de stockage." },
      { title: "Interroger 350 ménages", description: "Enquête de terrain menée en mars 2023 sur l’accès à l’eau, les conditions socio-économiques et les pathologies hydriques déclarées." },
      { title: "Croiser les données sanitaires", description: "Mobilisation des données d’établissements de santé pour 2020–2022 afin de compléter les déclarations recueillies auprès des ménages." },
      { title: "Tester et cartographier les relations", description: "Statistiques descriptives, corrélation de Pearson, tests du Khi-deux et cartographie thématique des approvisionnements et des maladies." },
    ],
    keyFindings: [
      { title: "Le raccordement ne garantit pas la continuité", description: "Parmi les ménages alimentés en eau courante, 56 % disposent d’eau la plupart du temps, 31 % seulement de temps à autre, 9 % en permanence et 4 % rarement." },
      { title: "Les sources de boisson sont diversifiées", description: "L’eau courante est la principale source de boisson pour 41,43 % des ménages, presque à égalité avec l’achat d’eau au détail, choisi par 38,29 %." },
      { title: "Trois pathologies dominent les déclarations", description: "La fièvre typhoïde est signalée dans 45 % des foyers interrogés, la diarrhée dans 36 % et la conjonctivite dans 31 %." },
      { title: "La taille du ménage est le lien le plus marqué", description: "La relation avec le nombre de cas déclarés est forte à l’échelle étudiée (R² = 0,865). Le niveau d’instruction, en revanche, ne présente pas de dépendance significative." },
      { title: "La qualité de l’eau reste une hypothèse centrale", description: "La durée et la distance d’approvisionnement, le traitement déclaré et le stockage expliquent peu les maladies observées ; la qualité de la source et l’assainissement doivent être davantage étudiés." },
    ],
    limitations: [
      "Une partie des pathologies repose sur les déclarations des ménages et non sur un diagnostic clinique individuel.",
      "L’enquête transversale met en évidence des associations statistiques sans démontrer à elle seule une relation de causalité.",
      "La qualité microbiologique et chimique de chaque source d’eau n’a pas été mesurée systématiquement.",
      "Les données hospitalières et les données d’enquête n’utilisent pas les mêmes unités d’observation et ne doivent pas être comparées directement.",
    ],
    recommendations: [
      "Suivre régulièrement la qualité microbiologique des réseaux, puits et forages.",
      "Améliorer la continuité du service et sécuriser les solutions utilisées pendant les coupures.",
      "Renforcer l’information sur le transport, le traitement et le stockage hygiénique de l’eau.",
      "Prioriser les ménages nombreux et les enfants de moins de cinq ans dans les actions de prévention.",
    ],
    sourceNote: "Mémoire de Master Géographie, soutenu en 2023 · enquête de 350 ménages · données sanitaires 2020–2022",
    externalUrl: "https://doi.org/10.5281/zenodo.14054229",
    documentUrl: "/documents/MEMOIRE%20DE%20RECHERCHE%20GEOGRAPHIE.pdf",
  },
  {
    slug: "zone-humide-kan",
    title: "Suivi de la zone humide du Kan",
    eyebrow: "Terrain & environnement",
    period: "2024",
    organization: "STRM–CURAT · Tiébissou",
    summary:
      "Une base géographique et un dispositif de collecte pour suivre les espaces agricoles, les dynamiques écologiques et les services écosystémiques.",
    image: "/images/hero-wetland-satellite.png",
    imageAlt: "Image satellite d’une zone humide traversée de chenaux et bordée de cultures",
    tools: ["QGIS", "KoboCollect", "QField", "PostgreSQL", "PostGIS"],
    question:
      "Comment structurer une observation reproductible de la zone humide et rendre les données de terrain directement exploitables ?",
    data: ["Plus de 500 points géoréférencés", "Observations de terrain", "Images satellites", "Données agricoles"],
    methods: ["Collecte mobile", "Contrôle qualité", "Modélisation de base spatiale", "Cartographie thématique"],
    contribution: ["Préparation de la collecte", "Administration des données", "Traitement d’images", "Production cartographique"],
    results: ["Base géographique opérationnelle", "Cartographie de la zone humide", "Proposition de plan de gestion"],
    deliverables: ["Base PostGIS", "Atlas thématique", "Protocole de suivi"],
  },
];

export const publication = {
  title:
    "Corrélation entre les pathologies hydriques et les facteurs socio-économiques et géo-environnementaux de l’approvisionnement en eau potable à Agnibilékrou (Côte d’Ivoire)",
  authors: "AKE-AWOMON Djaliah Florence & KAMENAN Dane Assoumou Junior",
  journal: "Revue Internationale de la Recherche Scientifique, 2(5), 2947–2960",
  year: "2024",
  doi: "https://doi.org/10.5281/zenodo.14054229",
};
