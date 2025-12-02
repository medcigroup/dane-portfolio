// skills_screen.dart
import 'package:flutter/material.dart';

class SkillsScreen extends StatelessWidget {
  const SkillsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Compétences Techniques & Méthodologiques'),
        backgroundColor: Colors.blue.shade700,
        foregroundColor: Colors.white,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24.0),
          child: Center(
            child: Container(
              constraints: const BoxConstraints(maxWidth: 800),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildSectionTitle(context, 'Compétences Techniques 💻'),
                  _buildSkillsGrid(context),

                  const Divider(height: 40, thickness: 1),

                  _buildSectionTitle(context, 'Compétences Méthodologiques et Thématiques 🗺️'),
                  _buildMethodologicalSkills(),

                  const Divider(height: 40, thickness: 1),

                  _buildSectionTitle(context, 'Centres d\'Intérêt Scientifique 🧠'),
                  _buildInterestsList(),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildSectionTitle(BuildContext context, String title) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16.0, top: 16.0),
      child: Text(
        title,
        style: Theme.of(context).textTheme.headlineSmall?.copyWith(
          fontWeight: FontWeight.bold,
          color: Colors.blue.shade800,
        ),
      ),
    );
  }

  Widget _buildSkillsGrid(BuildContext context) {
    final Map<String, List<String>> skills = {
      'Programmation': ['Python (intermédiaire)', 'JavaScript', 'Dart/Flutter', 'SQL', 'Java (débutant)'],
      'SIG & Cartographie': ['QGIS (intermédiaire)', 'ArcGIS Online (débutant)', 'PostgreSQL/PostGIS'],
      'Télédétection': ['Google Earth Engine', 'ENVI', 'SNAP', 'Traitement Landsat', 'Indices spectraux (NDVI, SAVI, EVI)'],
      'Bases de données': ['SQL', 'NoSQL (Firebase)', 'MS Access'],
      'Python Scientifique': ['GeoPandas', 'Rasterio', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly'],
      'Collecte Terrain': ['KOBO COLLECT', 'QField'],
    };

    return Column(
      children: skills.entries.map((entry) {
        return _buildSkillsCategory(context, entry.key, entry.value);
      }).toList(),
    );
  }

  Widget _buildSkillsCategory(BuildContext context, String title, List<String> items) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 8.0),
          child: Text(
            title,
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
              fontWeight: FontWeight.bold,
              color: Colors.blue.shade700,
            ),
          ),
        ),
        Wrap(
          spacing: 10,
          runSpacing: 10,
          children: items.map((item) => _buildSkillChip(context, item)).toList(),
        ),
        const SizedBox(height: 20),
      ],
    );
  }

  Widget _buildSkillChip(BuildContext context, String skill) {
    return Chip(
      label: Text(skill, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w500)),
      backgroundColor: Colors.cyan.shade600,
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
    );
  }

  Widget _buildMethodologicalSkills() {
    final List<String> methods = [
      'Analyse climatique (indices ETCCDI, indices de sécheresse, séries temporelles)',
      'Traitement et analyse d\'images satellites multi-temporelles et multi-capteurs',
      'Cartographie thématique et production de livrables cartographiques de qualité',
      'Modélisation spatiale et analyse de vulnérabilité territoriale',
      'Gestion et maintenance de dispositifs de mesures environnementales',
      'Analyses statistiques descriptives et inférentielles',
      'Méthodologies d\'enquêtes de terrain et échantillonnage',
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: methods.map((method) => _buildMethodItem(method)).toList(),
    );
  }

  Widget _buildMethodItem(String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(Icons.check_circle, size: 18, color: Colors.green.shade600),
          const SizedBox(width: 10),
          Expanded(
            child: Text(text, style: const TextStyle(fontSize: 16, height: 1.4)),
          ),
        ],
      ),
    );
  }

  Widget _buildInterestsList() {
    final List<String> interests = [
      'Développement urbain durable et résilience climatique en Afrique',
      'Intelligence artificielle appliquée aux sciences environnementales',
      'Changements climatiques et adaptation des territoires',
      'Innovation technologique (IoT, Deep Learning) pour le suivi environnemental',
      'Interface science-société et recherche-action',
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: interests.map((interest) => _buildInterestItem(interest)).toList(),
    );
  }

  Widget _buildInterestItem(String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(Icons.lightbulb_outline, size: 18, color: Colors.amber.shade700),
          const SizedBox(width: 10),
          Expanded(
            child: Text(text, style: const TextStyle(fontSize: 16, height: 1.4)),
          ),
        ],
      ),
    );
  }
}