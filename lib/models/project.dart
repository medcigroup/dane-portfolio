class Project {
  final String id;
  final String title;
  final String period;
  final String organization;
  final String description;
  final String detailedDescription; // Description complète
  final List<String> technologies;
  final String category;
  final String? imageUrl;
  final String? webLink; // Lien web du projet
  final String? githubLink; // Lien GitHub
  final List<String> features; // Fonctionnalités clés
  final List<String> challenges; // Défis relevés
  final List<String> results; // Résultats obtenus
  final List<String>? screenshots; // Captures d'écran

  Project({
    required this.id,
    required this.title,
    required this.period,
    required this.organization,
    required this.description,
    required this.detailedDescription,
    required this.technologies,
    required this.category,
    this.imageUrl,
    this.webLink,
    this.githubLink,
    required this.features,
    required this.challenges,
    required this.results,
    this.screenshots,
  });

  // Vos projets avec tous les détails
  static List<Project> getProjects() {
    return [
      Project(
        id: 'pegmatite_app',
        title: "Application Découverte Pegmatite",
        period: "Mai - Août 2025",
        organization: "SODEMI",
        description: "Application web pour découverte prédictive de prospects à fort potentiel en pegmatite",
        detailedDescription: """
Cette application innovante développée pour la SODEMI (Société pour le Développement Minier de la Côte d'Ivoire) utilise l'intelligence artificielle et l'analyse géospatiale pour identifier les zones à fort potentiel en pegmatite dans les régions ouest du pays.

Le système intègre des données géologiques, géophysiques et de télédétection pour générer des cartes prédictives précises, optimisant ainsi les efforts d'exploration minière.
        """,
        technologies: ["Python", "GIS", "Machine Learning", "PostgreSQL", "QGIS", "PostGIS"],
        category: "Télédétection & IA",
        webLink: "https://sodemi.ci/pegmatite-discovery",
        githubLink: "https://github.com/dannkamenan/pegmatite-app",
        imageUrl: "assets/images/pegmatite_app.png",
        features: [
          "Analyse géospatiale multi-sources",
          "Algorithmes de prédiction ML",
          "Interface de visualisation interactive",
          "Intégration de données géologiques et géophysiques",
          "Export de cartes thématiques",
          "Tableau de bord analytique"
        ],
        challenges: [
          "Intégration de sources de données hétérogènes",
          "Optimisation des algorithmes de prédiction",
          "Gestion de volumes massifs de données géospatiales",
          "Développement d'une interface utilisateur intuitive"
        ],
        results: [
          "Identification de 15 zones à fort potentiel",
          "Réduction de 40% du temps d'exploration",
          "Amélioration de la précision des prédictions à 85%",
          "Adoption par l'équipe géologique de SODEMI"
        ],
        screenshots: [
          "assets/screenshots/pegmatite_1.png",
          "assets/screenshots/pegmatite_2.png",
          "assets/screenshots/pegmatite_3.png",
        ],
      ),

      Project(
        id: 'climate_app',
        title: "Application Mobile Climat",
        period: "2023 - 2024",
        organization: "Freelance",
        description: "Application Flutter pour visualisation et analyse de données climatiques",
        detailedDescription: """
En tant que consultant indépendant, j'ai conçu et développé une application mobile et web complète pour la visualisation et l'analyse de données climatiques en temps réel.

Cette solution permet aux utilisateurs de suivre les indicateurs environnementaux (NDVI, SPI, température, précipitations) à travers des cartes interactives et des tableaux de bord dynamiques.
        """,
        technologies: ["Flutter", "Dart", "Firebase", "PostGIS", "Leaflet", "Google Earth Engine"],
        category: "Développement Mobile",
        webLink: "https://climate-app-ci.web.app",
        githubLink: "https://github.com/dannkamenan/climate-flutter-app",
        imageUrl: "assets/images/climate_app.png",
        features: [
          "Cartes interactives avec Flutter Map et Leaflet",
          "Connexion à des bases de données SIG (Firebase, PostGIS)",
          "Calcul d'indices climatiques (NDVI, SPI, etc.)",
          "Tableaux de bord en temps réel",
          "Notifications d'alertes climatiques",
          "Export de rapports personnalisés"
        ],
        challenges: [
          "Optimisation des performances sur mobile",
          "Synchronisation des données en temps réel",
          "Gestion de la cartographie offline",
          "Interface responsive multi-plateformes"
        ],
        results: [
          "Application déployée sur Android et iOS",
          "Plus de 500 téléchargements",
          "Note moyenne de 4.5/5 sur les stores",
          "Utilisée par des chercheurs et agriculteurs"
        ],
        screenshots: [
          "assets/screenshots/climate_1.png",
          "assets/screenshots/climate_2.png",
          "assets/screenshots/climate_3.png",
        ],
      ),

      Project(
        id: 'drought_zanzan',
        title: "Évaluation Sécheresse Zanzan",
        period: "2022 - 2024",
        organization: "CURAT - Université Félix Houphouët-Boigny",
        description: "Télédétection pour évaluation de la sécheresse (1984-2053)",
        detailedDescription: """
Ce projet de recherche de Master 2 utilise la télédétection pour évaluer l'évolution de la sécheresse dans le district autonome du Zanzan sur une période de 70 ans.

L'étude combine des données historiques (1984-2024) avec des projections climatiques (2025-2053) pour identifier les zones vulnérables et proposer des stratégies d'adaptation.
        """,
        technologies: ["Python", "QGIS", "Google Earth Engine", "Landsat", "SNAP", "R"],
        category: "Recherche",
        webLink: null,
        githubLink: "https://github.com/dannkamenan/drought-assessment-zanzan",
        imageUrl: "assets/images/drought_study.png",
        features: [
          "Traitement d'images Landsat 5, 7, 8, 9",
          "Calcul d'indices ETCCDI et indices de sécheresse",
          "Analyse multi-temporelle (1984-2053)",
          "Cartographie des zones à risque",
          "Modélisation prospective",
          "Analyse statistique des tendances climatiques"
        ],
        challenges: [
          "Harmonisation de données multi-capteurs",
          "Gestion de séries temporelles longues",
          "Validation des projections climatiques",
          "Traitement de données manquantes"
        ],
        results: [
          "Identification de 3 zones hautement vulnérables",
          "Publication d'un mémoire de 102 pages",
          "Recommandations pour les politiques d'adaptation",
          "Présentation aux autorités locales"
        ],
        screenshots: [
          "assets/screenshots/drought_1.png",
          "assets/screenshots/drought_2.png",
        ],
      ),

      Project(
        id: 'wetland_kan',
        title: "Gestion Zone Humide du Kan",
        period: "2024",
        organization: "STRM-CURAT",
        description: "Base de données géographiques pour le suivi des zones humides",
        detailedDescription: """
Mise en place d'une base de données géographiques complète pour la valorisation et la gestion durable de la zone humide du Kan à Tiébissou.

Ce projet terrain a permis de cartographier les zones agricoles, d'analyser la dynamique écologique et d'évaluer les services écosystémiques fournis par cette zone humide critique.
        """,
        technologies: ["QGIS", "KOBO COLLECT", "QField", "PostgreSQL", "Python"],
        category: "Gestion Environnementale",
        webLink: null,
        githubLink: null,
        imageUrl: "assets/images/wetland_kan.png",
        features: [
          "Collecte de données terrain avec KOBO COLLECT et QField",
          "Base de données géographiques PostgreSQL/PostGIS",
          "Cartographie thématique des zones agricoles",
          "Analyse de la dynamique écologique",
          "Évaluation des services écosystémiques",
          "Système de suivi temporel"
        ],
        challenges: [
          "Accessibilité difficile de certaines zones",
          "Coordination de l'équipe terrain",
          "Qualité et précision des données GPS",
          "Traitement d'images satellites haute résolution"
        ],
        results: [
          "Base de données de 500+ points géoréférencés",
          "Cartographie complète de la zone humide",
          "Plan de gestion proposé aux autorités",
          "Formation de l'équipe locale à l'utilisation des outils SIG"
        ],
        screenshots: [
          "assets/screenshots/wetland_1.png",
          "assets/screenshots/wetland_2.png",
        ],
      ),

      Project(
        id: 'water_agnibilekrou',
        title: "Eau Potable à Agnibilékrou",
        period: "2020 - 2023",
        organization: "IGT - Université Félix Houphouët-Boigny",
        description: "Étude des difficultés d'approvisionnement en eau et problèmes de santé",
        detailedDescription: """
Ce projet de recherche évalue les difficultés d'approvisionnement en eau potable et leur impact sur la santé des populations à Agnibilékrou.

L'étude combine des enquêtes terrain, des analyses statistiques et de la cartographie thématique pour identifier les zones vulnérables et proposer des solutions d'amélioration.
        """,
        technologies: ["QGIS", "SPSS", "Excel", "KOBO COLLECT", "R"],
        category: "Recherche",
        webLink: null,
        githubLink: null,
        imageUrl: "assets/images/water_study.png",
        features: [
          "Enquêtes terrain auprès de 500+ ménages",
          "Analyses statistiques (descriptives et inférentielles)",
          "Cartographie des points d'eau",
          "Identification des zones vulnérables",
          "Corrélation eau/santé",
          "Recommandations d'amélioration"
        ],
        challenges: [
          "Échantillonnage représentatif de la population",
          "Collecte de données sensibles sur la santé",
          "Analyse de corrélations complexes",
          "Communication des résultats aux autorités"
        ],
        results: [
          "Mémoire de 147 pages publié",
          "Identification de 8 quartiers prioritaires",
          "Recommandations adoptées par la mairie",
          "Sensibilisation de 2000+ habitants"
        ],
        screenshots: [
          "assets/screenshots/water_1.png",
          "assets/screenshots/water_2.png",
        ],
      ),
    ];
  }

  // Méthode pour obtenir un projet par son ID
  static Project? getProjectById(String id) {
    try {
      return getProjects().firstWhere((project) => project.id == id);
    } catch (e) {
      return null;
    }
  }
}