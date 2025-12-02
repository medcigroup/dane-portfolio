// contact_screen.dart
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactScreen extends StatelessWidget {
  const ContactScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Contact & Références'),
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
                  _buildSectionTitle(context, 'Coordonnées 📧'),
                  _buildContactInfo(
                    icon: FontAwesomeIcons.envelope,
                    label: 'Email professionnel',
                    value: 'dannkamenan@hotmail.com',
                    uri: 'mailto:dannkamenan@hotmail.com',
                  ),
                  _buildContactInfo(
                    icon: FontAwesomeIcons.phone,
                    label: 'Téléphone',
                    value: '+225 07 49 98 55 52',
                    uri: 'tel:+2250749985552',
                  ),
                  _buildContactInfo(
                    icon: FontAwesomeIcons.locationDot,
                    label: 'Localisation',
                    value: 'Cocody Blockauss, Abidjan, Côte d\'Ivoire',
                  ),

                  const Divider(height: 50, thickness: 1),

                  _buildSectionTitle(context, 'Références Professionnelles et Académiques 🤝'),

                  // Référence 1: Professeur N'GUESSAN Bi Vami
                  _buildReferenceCard(
                    context,
                    name: 'Prof. N\'GUESSAN Bi Vami',
                    title: 'Directeur de Recherche, CURAT, Université Félix Houphouët-Boigny',
                    email: 'vami@outlook.com',
                    phone: '+225 07 49 21 63 35',
                  ),

                  const SizedBox(height: 20),

                  // Référence 2: Dr AKE Djaliah Florence Epse AWOMON
                  _buildReferenceCard(
                    context,
                    name: 'Dr AKE Djaliah Florence Epse AWOMON',
                    title: 'Directeur de Recherche, IGT, Université Félix Houphouët-Boigny',
                    email: 'akedjaliah@gmail.com',
                    phone: '+225 07 87 28 42 93',
                  ),

                  const SizedBox(height: 20),

                  // Référence 3: M. SHAW Kassi Olivier
                  _buildReferenceCard(
                    context,
                    name: 'M. SHAW Kassi Olivier',
                    title: 'Chef du service de Gestion des Données Géoscientifiques, SODEMI',
                    email: 'olivier.shaw@sodemi.ci',
                    phone: '+225 07 58 88 37 78',
                  ),
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

  Widget _buildContactInfo({required IconData icon, required String label, required String value, String? uri}) {
    return ListTile(
      leading: FaIcon(icon, color: Colors.blue.shade700, size: 20),
      title: Text(label, style: TextStyle(fontWeight: FontWeight.bold, color: Colors.grey.shade700)),
      subtitle: Text(value, style: const TextStyle(fontSize: 16, color: Colors.black)),
      onTap: uri != null ? () => _launchUri(uri) : null,
      trailing: uri != null ? const Icon(Icons.open_in_new, size: 18, color: Colors.grey) : null,
    );
  }

  Widget _buildReferenceCard(BuildContext context, {required String name, required String title, required String email, required String phone}) {
    return Card(
      elevation: 5,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              name,
              style: Theme.of(context).textTheme.titleLarge?.copyWith(
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              title,
              style: TextStyle(fontStyle: FontStyle.italic, color: Colors.grey.shade600),
            ),
            const Divider(height: 15, thickness: 0.5),
            _buildReferenceDetail(
              icon: FontAwesomeIcons.envelope,
              value: email,
              uri: 'mailto:$email',
            ),
            _buildReferenceDetail(
              icon: FontAwesomeIcons.phone,
              value: phone,
              uri: 'tel:$phone',
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildReferenceDetail({required IconData icon, required String value, required String uri}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Row(
        children: [
          FaIcon(icon, size: 16, color: Colors.blue.shade600),
          const SizedBox(width: 8),
          TextButton(
            onPressed: () => _launchUri(uri),
            style: TextButton.styleFrom(padding: EdgeInsets.zero),
            child: Text(
              value,
              style: TextStyle(
                fontSize: 15,
                color: Colors.blue.shade700,
                decoration: TextDecoration.underline,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Future<void> _launchUri(String uriString) async {
    final Uri uri = Uri.parse(uriString);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    }
  }
}