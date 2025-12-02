// about_screen.dart
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('À propos de moi'),
        backgroundColor: Colors.blue.shade700,
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Colors.blue.shade50, Colors.white, Colors.cyan.shade50],
          ),
        ),
        child: SafeArea(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(24.0),
            child: Center(
              child: Container(
                constraints: const BoxConstraints(maxWidth: 800),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Section 1: Profil Scientifique
                    _buildSectionTitle(context, 'Profil Scientifique', FontAwesomeIcons.userGraduate),
                    _buildProfileSummary(),

                    const SizedBox(height: 40),

                    // Section 2: Expérience Professionnelle (Timeline)
                    _buildSectionTitle(context, 'Expérience & Stages', FontAwesomeIcons.suitcase),
                    _buildExperienceTimeline(),

                    const SizedBox(height: 40),

                    // Section 3: Formation Académique (Timeline)
                    _buildSectionTitle(context, 'Formation Académique', FontAwesomeIcons.graduationCap),
                    _buildEducationTimeline(),

                    const SizedBox(height: 40),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  // --- WIDGETS DE BASE ---

  Widget _buildSectionTitle(BuildContext context, String title, IconData icon) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 20.0, top: 10.0),
      child: Row(
        children: [
          FaIcon(icon, size: 24, color: Colors.blue.shade800),
          const SizedBox(width: 12),
          Text(
            title,
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              fontWeight: FontWeight.bold,
              color: Colors.blue.shade800,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildProfileSummary() {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Text(
          '**Géographe-géomaticien** avec plus de 3 ans d\'expérience en gestion de bases de données géospatiales, systèmes SIG et analyse de données multi-sources. Expertise confirmée en développement et maintenance de bases de données, production cartographique, traitement de données terrain et création de tableaux de bord analytiques. Compétences avérées en programmation scientifique (**Python, SQL**) et développement d\'applications.',
          style: const TextStyle(fontSize: 16, height: 1.5, color: Colors.black87),
          textAlign: TextAlign.justify,
        ),
      ),
    );
  }

  // --- WIDGETS DE TIMELINE (EXPÉRIENCE & ÉDUCATION) ---

  Widget _buildExperienceTimeline() {
    return Column(
      children: [
        _buildTimelineItem(
          title: 'Ingénieur Stagiaire en Télédétection et SIG',
          company: 'SODEMI (Société pour le Développement Minier de la Côte d\'Ivoire)',
          period: 'Mai - Août 2025',
          description: 'Développement d\'une application web pour la découverte prédictive de prospects en pegmatite.',
          details: [
            'Analyse géospatiale multi-sources.',
            'Intégration de données géologiques et géophysiques.',
            'Développement d\'algorithmes de prédiction.',
          ],
        ),
        _buildTimelineItem(
          title: 'Développeur d\'Application Flutter pour le Climat',
          company: 'Freelance',
          period: '2023 - 2024',
          description: 'Conception et développement d\'une application mobile et web pour la visualisation et l\'analyse de données climatiques.',
          details: [
            'Utilisation de Flutter Map/Leaflet, PostGIS et Firebase.',
            'Calcul et visualisation d\'indices climatiques.',
          ],
          isLast: true,
        ),
      ],
    );
  }

  Widget _buildEducationTimeline() {
    return Column(
      children: [
        _buildTimelineItem(
          title: 'Master en Télédétection et SIG',
          company: 'Université Félix Houphouët-Boigny, UFR STRM-CURAT',
          period: '2022-2024',
          description: 'Mémoire: Évaluation de la sécheresse dans le Zanzan (1984-2053) par Télédétection.',
          details: [
            'Spécialité: Analyse et Traitement d\'Images Numériques.',
            'Étude de la caractérisation climatique multi-temporelle et cartographie des risques.'
          ],
        ),
        _buildTimelineItem(
          title: 'Master en Géographie de l\'Environnement et la Santé',
          company: 'Université Félix Houphouët-Boigny, IGT',
          period: '2020-2023',
          description: 'Mémoire: Difficultés d\'approvisionnement en eau et problèmes de santé à Agnibilékrou.',
        ),
        _buildTimelineItem(
          title: 'Licence en Géographie Physique et Environnement',
          company: 'Université Félix Houphouët-Boigny, IGT',
          period: '2019-2020',
          isLast: true,
        ),
      ],
    );
  }

  Widget _buildTimelineItem({
    required String title,
    required String company,
    required String period,
    String? description,
    List<String>? details,
    bool isLast = false,
  }) {
    // Largeur de la ligne verticale
    const double lineWidth = 2.0;
    // Taille du cercle
    const double dotSize = 10.0;
    // Espacement des éléments
    const double contentPadding = 20.0;

    return IntrinsicHeight(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Colonne de la timeline (ligne et point)
          Column(
            children: [
              Container(
                width: dotSize,
                height: dotSize,
                decoration: BoxDecoration(
                  color: Colors.cyan.shade600,
                  shape: BoxShape.circle,
                  border: Border.all(color: Colors.white, width: 2),
                ),
              ),
              Expanded(
                child: Container(
                  width: lineWidth,
                  color: isLast ? Colors.transparent : Colors.cyan.shade300,
                ),
              ),
            ],
          ),

          const SizedBox(width: 15),

          // Contenu de la carte
          Expanded(
            child: Padding(
              padding: EdgeInsets.only(bottom: isLast ? 0 : contentPadding * 2),
              child: Card(
                elevation: 3,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Période (Date)
                      Text(
                        period,
                        style: TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.w600,
                          color: Colors.blue.shade700,
                        ),
                      ),
                      const SizedBox(height: 8),

                      // Titre
                      Text(
                        title,
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          color: Colors.black87,
                        ),
                      ),
                      const SizedBox(height: 4),

                      // Institution/Entreprise
                      Text(
                        company,
                        style: TextStyle(fontStyle: FontStyle.italic, color: Colors.grey.shade600),
                      ),

                      if (description != null) ...[
                        const SizedBox(height: 10),
                        Text(
                          description,
                          style: TextStyle(fontSize: 15, color: Colors.grey.shade800, height: 1.4),
                          textAlign: TextAlign.justify,
                        ),
                      ],

                      if (details != null && details.isNotEmpty)
                        ...details.map((detail) => Padding(
                          padding: const EdgeInsets.only(top: 8.0),
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Icon(Icons.arrow_right, color: Colors.cyan.shade600, size: 20),
                              Expanded(
                                child: Text(detail, style: const TextStyle(fontSize: 14, color: Colors.black54)),
                              ),
                            ],
                          ),
                        )).toList(),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}