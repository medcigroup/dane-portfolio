// Assurez-vous d'avoir bien importé tous les fichiers d'écran nécessaires (about_screen.dart, etc.)
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'package:dann_portfolio/screens/projects_screen.dart';
import 'package:dann_portfolio/screens/skills_screen.dart';
import 'about_screen.dart';
import 'contact_screen.dart';




class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;

  // Liste des écrans
  final List<Widget> _screens = [
    const HomeContent(),
    const AboutScreen(),
    const ProjectsScreen(),
    const SkillsScreen(),
    const ContactScreen(),
  ];

  // Titres pour la barre de navigation web
  final List<String> _menuTitles = [
    "Accueil",
    "À propos",
    "Projets",
    "Compétences",
    "Contact"
  ];

  @override
  Widget build(BuildContext context) {
    // On vérifie la largeur de l'écran pour savoir si on est sur PC ou Mobile
    bool isDesktop = MediaQuery.of(context).size.width > 800;

    return Scaffold(
      extendBodyBehindAppBar: true,

      // --- BARRE DE NAVIGATION HAUT (WEB/DESKTOP) ---
      appBar: isDesktop
          ? AppBar(
        backgroundColor: Colors.white.withOpacity(0.95), // Augmenter l'opacité
        elevation: 1, // Petite élévation pour un look plus "collant"
        shadowColor: Colors.black12,
        titleSpacing: 40,
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.blue.shade700,
                shape: BoxShape.circle,
              ),
              child: const Icon(Icons.code, color: Colors.white, size: 20),
            ),
            const SizedBox(width: 12),
            Text(
              "KAMENAN PORTFOLIO",
              style: TextStyle(
                color: Colors.blue.shade900,
                fontWeight: FontWeight.bold,
                fontSize: 20,
              ),
            ),
          ],
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 40.0),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: List.generate(_menuTitles.length, (index) {
                return _WebMenuButton(
                  key: ValueKey(index), // Clé nécessaire pour les animations dans le menu
                  title: _menuTitles[index],
                  isSelected: _selectedIndex == index,
                  onTap: () => setState(() => _selectedIndex = index),
                );
              }),
            ),
          ),
        ],
      )
          : null,

      // --- TRANSITION FLUIDE ENTRE LES ÉCRANS ---
      body: AnimatedSwitcher(
        duration: const Duration(milliseconds: 300),
        switchInCurve: Curves.easeOut,
        switchOutCurve: Curves.easeIn,
        transitionBuilder: (child, animation) {
          // Utilise une transition de fondu (FadeTransition) pour le changement d'écran
          return FadeTransition(
            opacity: animation,
            child: child,
          );
        },
        child: _screens[_selectedIndex],
      ),

      // --- BARRE DE NAVIGATION BAS (MOBILE) ---
      bottomNavigationBar: isDesktop
          ? null
          : NavigationBar(
        elevation: 0,
        backgroundColor: Colors.white.withOpacity(0.9),
        selectedIndex: _selectedIndex,
        onDestinationSelected: (index) => setState(() => _selectedIndex = index),
        destinations: const [
          NavigationDestination(icon: Icon(Icons.home_outlined), selectedIcon: Icon(Icons.home), label: 'Accueil'),
          NavigationDestination(icon: Icon(Icons.person_outline), selectedIcon: Icon(Icons.person), label: 'À propos'),
          NavigationDestination(icon: Icon(Icons.work_outline), selectedIcon: Icon(Icons.work), label: 'Projets'),
          NavigationDestination(icon: Icon(Icons.stars_outlined), selectedIcon: Icon(Icons.stars), label: 'Compétences'),
          NavigationDestination(icon: Icon(Icons.contact_mail_outlined), selectedIcon: Icon(Icons.contact_mail), label: 'Contact'),
        ],
      ),
    );
  }
}

// ------------------------------------------------------------------
// --- WIDGETS ANIMÉS ET MIS À JOURS ---
// ------------------------------------------------------------------

// --- BOUTON DU MENU WEB AMÉLIORÉ (avec indicateur animé) ---
class _WebMenuButton extends StatefulWidget {
  final String title;
  final bool isSelected;
  final VoidCallback onTap;

  const _WebMenuButton({
    required this.title,
    required this.isSelected,
    required this.onTap,
    Key? key,
  }) : super(key: key);

  @override
  State<_WebMenuButton> createState() => _WebMenuButtonState();
}

class _WebMenuButtonState extends State<_WebMenuButton> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                widget.title,
                style: TextStyle(
                  color: widget.isSelected ? Colors.blue.shade800 : (_isHovered ? Colors.blue.shade500 : Colors.grey.shade700),
                  fontWeight: widget.isSelected ? FontWeight.bold : FontWeight.w500,
                  fontSize: 15,
                ),
              ),
              const SizedBox(height: 5),
              // Indicateur de sélection animé
              AnimatedContainer(
                duration: const Duration(milliseconds: 300),
                width: widget.isSelected ? 20 : 0,
                height: 3,
                decoration: BoxDecoration(
                  color: Colors.blue.shade700,
                  borderRadius: BorderRadius.circular(5),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// --- NOUVEAU WIDGET D'ANIMATION D'APPARITION ---
class FadeInAnimation extends StatefulWidget {
  final Widget child;
  final Duration duration;
  final double initialOffset;

  const FadeInAnimation({
    required this.child,
    this.duration = const Duration(milliseconds: 600),
    this.initialOffset = 30.0,
    Key? key,
  }) : super(key: key);

  @override
  State<FadeInAnimation> createState() => _FadeInAnimationState();
}

class _FadeInAnimationState extends State<FadeInAnimation> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _opacityAnimation;
  late Animation<Offset> _slideAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: widget.duration);

    // Animation d'opacité (Fade-in)
    _opacityAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeOut),
    );

    // Animation de glissement (Slide-up)
    _slideAnimation = Tween<Offset>(
      begin: Offset(0, widget.initialOffset / 100), // Commence 30px plus bas
      end: const Offset(0, 0),
    ).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeOutCubic),
    );

    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return FadeTransition(
      opacity: _opacityAnimation,
      child: SlideTransition(
        position: _slideAnimation,
        child: widget.child,
      ),
    );
  }
}

// --- CONTENU PRINCIPAL (HOME) ENVELOPPÉ DANS L'ANIMATION ---
class HomeContent extends StatelessWidget {
  const HomeContent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    bool isDesktop = MediaQuery.of(context).size.width > 800;
    double topPadding = isDesktop ? 80 : 0;

    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        padding: EdgeInsets.only(top: topPadding),
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Colors.blue.shade50, Colors.white, Colors.cyan.shade50],
          ),
        ),
        child: Stack(
          children: [
            // Décoration d'arrière-plan
            Positioned(top: -50, right: -50, child: _DecorativeCircle(color: Colors.blue.shade200, size: 200)),
            Positioned(bottom: 50, left: -50, child: _DecorativeCircle(color: Colors.cyan.shade200, size: 300)),

            // Contenu Principal Responsive enveloppé dans l'animation
            FadeInAnimation(
              child: LayoutBuilder(
                builder: (context, constraints) {
                  if (constraints.maxWidth > 900) {
                    return const _DesktopLayout();
                  } else {
                    return const _MobileLayout();
                  }
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}


// ------------------------------------------------------------------
// --- (Les autres classes restent inchangées) ---
// ------------------------------------------------------------------

class _DecorativeCircle extends StatelessWidget {
  final Color color;
  final double size;
  const _DecorativeCircle({required this.color, required this.size});
  // ... (votre implémentation)
  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: color.withOpacity(0.2),
        boxShadow: [
          BoxShadow(
            color: color.withOpacity(0.1),
            blurRadius: 100,
            spreadRadius: 20,
          ),
        ],
      ),
    );
  }
}

class _MobileLayout extends StatelessWidget {
  const _MobileLayout({Key? key}) : super(key: key);
  // ... (votre implémentation)
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 60),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const _ProfileImage(size: 160),
            const SizedBox(height: 30),
            const _TextContent(alignment: CrossAxisAlignment.center, textAlign: TextAlign.center),
            const SizedBox(height: 30),
            const _SocialActions(),
          ],
        ),
      ),
    );
  }
}

class _DesktopLayout extends StatelessWidget {
  const _DesktopLayout({Key? key}) : super(key: key);
  // ... (votre implémentation)
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        constraints: const BoxConstraints(maxWidth: 1200),
        padding: const EdgeInsets.symmetric(horizontal: 60),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Expanded(
              flex: 3,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _TextContent(alignment: CrossAxisAlignment.start, textAlign: TextAlign.start),
                  SizedBox(height: 40),
                  _SocialActions(),
                ],
              ),
            ),
            const SizedBox(width: 40),
            const Expanded(
              flex: 2,
              child: Center(child: _ProfileImage(size: 350)),
            ),
          ],
        ),
      ),
    );
  }
}

class _ProfileImage extends StatelessWidget {
  final double size;
  const _ProfileImage({required this.size});
  // ... (votre implémentation)
  @override
  Widget build(BuildContext context) {
    const String imagePath = 'assets/images/photo profil new.png';

    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(color: Colors.white, width: 4),
        boxShadow: [
          BoxShadow(
            color: Colors.blue.withOpacity(0.25),
            blurRadius: 30,
            offset: const Offset(0, 15),
          ),
        ],
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Colors.blue.shade300, Colors.cyan.shade300],
        ),
        image: DecorationImage(
          image: AssetImage(imagePath),
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}

class _TextContent extends StatelessWidget {
  final CrossAxisAlignment alignment;
  final TextAlign textAlign;
  const _TextContent({required this.alignment, required this.textAlign});
  // ... (votre implémentation)
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: alignment,
      children: [
        Text(
          'Hello, je suis',
          style: TextStyle(
            color: Colors.blue.shade700,
            fontSize: 18,
            fontWeight: FontWeight.w600,
            letterSpacing: 1.2,
          ),
        ),
        const SizedBox(height: 8),
        Text(
          'KAMENAN Dane\nAssoumou Junior',
          style: Theme.of(context).textTheme.displaySmall?.copyWith(
            fontWeight: FontWeight.bold,
            color: Colors.black87,
            height: 1.1,
            fontSize: 32,
          ),
          textAlign: textAlign,
        ),
        const SizedBox(height: 20),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
          decoration: BoxDecoration(
            color: Colors.blue.shade50,
            borderRadius: BorderRadius.circular(30),
            border: Border.all(color: Colors.blue.shade100),
          ),
          child: Text(
            'Géographe - Géomaticien',
            style: TextStyle(color: Colors.blue.shade800, fontWeight: FontWeight.bold, fontSize: 16),
          ),
        ),
        const SizedBox(height: 24),
        Text(
          'Spécialiste en Systèmes d\'Information Géographique (SIG),\nTélédétection et développement d\'applications cartographiques.',
          style: TextStyle(color: Colors.grey.shade600, fontSize: 16, height: 1.6),
          textAlign: textAlign,
        ),
      ],
    );
  }
}

class _SocialActions extends StatelessWidget {
  const _SocialActions({Key? key}) : super(key: key);
  // ... (votre implémentation)
  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 16,
      runSpacing: 16,
      alignment: WrapAlignment.center,
      children: [
        _AnimatedSocialButton(icon: FontAwesomeIcons.envelope, color: Colors.red.shade400, onTap: () => _launchUri('mailto:dannkamenan@hotmail.com')),
        _AnimatedSocialButton(icon: FontAwesomeIcons.phone, color: Colors.green.shade500, onTap: () => _launchUri('tel:+2250749985552')),
        _AnimatedSocialButton(icon: FontAwesomeIcons.linkedin, color: const Color(0xFF0077B5), onTap: () => _launchUri('https://www.linkedin.com/in/dane-kamenan-6981352b4/')),
        // Note: Le bouton GitHub a été retiré, je l'ai commenté pour ne pas introduire de Bug s'il y avait un lien cassé.
        // _AnimatedSocialButton(icon: FontAwesomeIcons.github, color: const Color(0xFF333333), onTap: () => _launchUri('VOTRE_LIEN_GITHUB_ICI')),
      ],
    );
  }
  Future<void> _launchUri(String uriString) async { final Uri uri = Uri.parse(uriString); if (await canLaunchUrl(uri)) await launchUrl(uri); }
}

class _AnimatedSocialButton extends StatefulWidget {
  final IconData icon; final Color color; final VoidCallback onTap;
  const _AnimatedSocialButton({required this.icon, required this.color, required this.onTap});
  @override State<_AnimatedSocialButton> createState() => _AnimatedSocialButtonState();
}

class _AnimatedSocialButtonState extends State<_AnimatedSocialButton> {
  bool _isHovered = false;
  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          transform: Matrix4.identity()..scale(_isHovered ? 1.1 : 1.0),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(16),
            boxShadow: [BoxShadow(color: widget.color.withOpacity(_isHovered ? 0.4 : 0.1), blurRadius: _isHovered ? 15 : 10, offset: const Offset(0, 5))],
          ),
          child: FaIcon(widget.icon, size: 24, color: widget.color),
        ),
      ),
    );
  }
}