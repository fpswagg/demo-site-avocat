# Cabinet Juridique Excellence - Site Web

Site web professionnel pour un cabinet d'avocats basé à Yaoundé, Cameroun.

## 🎯 Fonctionnalités

- **Design élégant et professionnel** : Palette sobre avec marron comme couleur principale sur fond clair
- **Responsive** : Optimisé pour mobile, tablette et desktop
- **Sections complètes** :
  - Accueil avec hero section et présentation
  - Services / Domaines de compétence détaillés
  - Équipe avec fiches membres complètes (photo, spécialités, parcours, contact)
  - Études de cas / Réussites
  - Actualités juridiques
  - Contact avec formulaire et prise de rendez-vous
- **Animations subtiles** : Transitions fluides et effets au scroll
- **Configuration via variables d'environnement** : Toutes les informations du cabinet (adresse, téléphone, horaires, etc.) sont configurables via .env
- **Données JSON** : Structure prête pour migration vers base de données

## 🛠️ Technologies

- **Next.js 15** avec App Router
- **TypeScript** pour la sécurité du typage
- **Tailwind CSS v4** pour le styling
- **shadcn/ui** pour les composants UI
- **Geist** et **Playfair Display** pour la typographie

## 📁 Structure du projet

\`\`\`
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── services/page.tsx     # Page des services
│   ├── equipe/page.tsx       # Page de l'équipe
│   ├── reussites/page.tsx    # Page des réussites
│   ├── actualites/page.tsx   # Page des actualités
│   ├── contact/page.tsx      # Page de contact
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Styles globaux et thème
├── components/
│   ├── navigation.tsx        # Navigation principale
│   ├── footer.tsx            # Footer
│   └── ui/                   # Composants shadcn/ui
├── data/
│   ├── team.json            # Données des membres de l'équipe
│   ├── case-studies.json    # Études de cas
│   └── news.json            # Actualités
├── lib/
│   ├── utils.ts             # Utilitaires
│   └── config.ts            # Configuration du site (variables d'environnement)
└── .env.example             # Exemple de variables d'environnement
\`\`\`

## 🚀 Installation

1. **Télécharger le projet** via le bouton "Download ZIP" ou GitHub

2. **Installer les dépendances** :
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. **Configurer les variables d'environnement** :
\`\`\`bash
# Copier le fichier d'exemple
cp .env.example .env.local

# Éditer .env.local avec vos informations
\`\`\`

4. **Lancer le serveur de développement** :
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

5. **Ouvrir** [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Variables d'environnement

Toutes les informations du cabinet sont configurables via des variables d'environnement dans le fichier `.env.local` :

#### Informations générales
- `NEXT_PUBLIC_SITE_NAME` : Nom du cabinet

#### Adresse
- `NEXT_PUBLIC_ADDRESS_STREET` : Rue
- `NEXT_PUBLIC_ADDRESS_DISTRICT` : Quartier
- `NEXT_PUBLIC_ADDRESS_CITY` : Ville
- `NEXT_PUBLIC_ADDRESS_COUNTRY` : Pays

#### Contact
- `NEXT_PUBLIC_PHONE` : Téléphone principal
- `NEXT_PUBLIC_PHONE_SECONDARY` : Téléphone secondaire
- `NEXT_PUBLIC_EMAIL` : Email principal
- `NEXT_PUBLIC_EMAIL_SECONDARY` : Email secondaire
- `NEXT_PUBLIC_EMERGENCY_PHONE` : Ligne d'urgence

#### Horaires
- `NEXT_PUBLIC_HOURS_WEEKDAYS` : Horaires en semaine
- `NEXT_PUBLIC_HOURS_SATURDAY` : Horaires samedi
- `NEXT_PUBLIC_HOURS_SUNDAY` : Horaires dimanche

#### Réseaux sociaux
- `NEXT_PUBLIC_SOCIAL_FACEBOOK` : Lien Facebook
- `NEXT_PUBLIC_SOCIAL_LINKEDIN` : Lien LinkedIn
- `NEXT_PUBLIC_SOCIAL_TWITTER` : Lien Twitter

#### Carte
- `NEXT_PUBLIC_MAP_EMBED_URL` : URL d'intégration Google Maps

Voir `.env.example` pour un exemple complet.

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `app/globals.css` :
- **Background** : Fond clair (blanc cassé)
- **Primary** : Marron riche pour les éléments principaux
- **Accent** : Marron chaud pour les accents et boutons
- **Secondary** : Beige clair pour les sections alternées

### Typographie

- **Headings** : Playfair Display (serif élégant)
- **Body** : Geist Sans (sans-serif moderne)

### Données

Les données sont stockées dans des fichiers JSON dans le dossier `data/` :

1. **team.json** : Membres de l'équipe
   - Nom, rôle, spécialités
   - Biographie, formation
   - Langues, contact
   - Photo

2. **case-studies.json** : Études de cas
   - Titre, catégorie, année
   - Client, défi, solution, résultat
   - Image

3. **news.json** : Actualités
   - Titre, catégorie, date
   - Extrait, contenu
   - Auteur, image

## 📝 Personnalisation du contenu

### Modifier les informations du cabinet

1. **Variables d'environnement** : Éditer `.env.local` pour changer les coordonnées, horaires, etc.
2. **Membres de l'équipe** : Éditer `data/team.json`
3. **Études de cas** : Éditer `data/case-studies.json`
4. **Actualités** : Éditer `data/news.json`

### Ajouter des images

Remplacer les placeholders par vos vraies images :
- Photos des avocats
- Images des bureaux
- Photos d'illustration

## 🔄 Migration vers une base de données

Pour migrer vers une base de données (Supabase, PostgreSQL, etc.) :

1. **Créer les tables** correspondant aux structures JSON
2. **Installer le client de base de données** approprié
3. **Remplacer les imports JSON** par des requêtes à la base de données dans les pages

Structure recommandée :
- Table `team_members` pour l'équipe
- Table `case_studies` pour les réussites
- Table `news_articles` pour les actualités

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## ⚡ Performance

- Images optimisées avec Next.js Image
- Lazy loading des composants
- CSS optimisé avec Tailwind
- Animations performantes

## 🚀 Déploiement

### Déploiement sur Vercel (recommandé)

1. Cliquer sur le bouton "Publish" dans v0
2. Ou connecter votre repository GitHub à Vercel
3. Configurer les variables d'environnement dans les paramètres Vercel
4. Déployer

### Autres plateformes

Le site peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 Licence

Ce projet est fourni à titre d'exemple. Personnalisez-le selon vos besoins.

## 🤝 Support

Pour toute question ou assistance, contactez l'équipe de développement.
