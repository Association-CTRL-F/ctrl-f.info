# ctrl-f.info

Site vitrine de l'association ctrl-F : association développant des outils et services informatiques utiles, animant une communauté d'entraide passionnée par l'informatique.

## 🚀 Technologies utilisées

- **React 19**
- **TypeScript** (vive TS)
- **UnoCSS**
- **Vite**
- **pnpm**

## 📦 Installation

### Prérequis

- Node.js 24.11.0 (ou version supérieure)
- pnpm (activé via corepack)

### Installation des dépendances

```bash
pnpm install
```

## 🛠️ Développement

### Lancer le serveur de développement

```bash
pnpm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production

```bash
pnpm run build
```

Les fichiers compilés seront générés dans le dossier `dist/`

### Preview du build de production

```bash
pnpm run preview
```

### Linting

```bash
pnpm run lint
```

### Formatage du code

```bash
pnpm run format
```

## 🐳 Déploiement avec Docker

### Build de l'image Docker

```bash
docker build -t ctrl-f-info .
```

### Lancement du container

```bash
docker run -p 8080:80 ctrl-f-info
```

Le site sera accessible sur `http://localhost:8080`

### Build optimisé multi-stage

Le Dockerfile utilise un build multi-stage pour optimiser la taille de l'image finale :

- **Stage 1 (base)** : Configuration de l'environnement Node.js
- **Stage 2 (deps)** : Installation des dépendances
- **Stage 3 (builder)** : Compilation de l'application
- **Stage 4 (production)** : Image finale Nginx Alpine avec les fichiers statiques

## 📁 Structure du projet

```
ctrl-f.info/
├── src/
│   ├── components/          # Composants React
│   │   ├── hero.tsx         # Section principale
│   │   ├── navbar.tsx       # Barre de navigation
│   │   ├── footer.tsx       # Pied de page
│   │   └── projects/        # Composants projets
│   ├── data/                # Données des projets
│   ├── types/               # Types TypeScript
│   ├── hooks/               # Hooks React personnalisés
│   └── app.tsx              # Composant racine
├── public/                  # Fichiers statiques
├── Dockerfile               # Configuration Docker
├── nginx.conf               # Configuration Nginx
└── uno.config.ts            # Configuration UnoCSS
```

## 🎨 Projets présentés

- **UserDiag** - Outil de diagnostic PC
- **InstallerWindows.fr** - Guides pour installer Windows 11
- **UserBot** - Bot Discord de modération
- **Form Unban** - Formulaire de demande de déban

## 🌐 Serveur Discord

Le site présente également le serveur Discord d'entraide informatique avec :

- Conseils d'achat de matériel informatique
- Configurations sur mesure selon le budget
- Support technique pour problèmes hardware et software

[Rejoindre le serveur Discord](https://discord.gg/informatique)

## 📝 Scripts disponibles

- `pnpm run dev` - Lance le serveur de développement
- `pnpm run build` - Build de production
- `pnpm run preview` - Preview du build
- `pnpm run lint` - Linting du code
- `pnpm run format` - Formatage du code

## 🔧 Configuration

### UnoCSS

La configuration UnoCSS se trouve dans `uno.config.ts` et inclut :

- Preset Wind4 pour les utilitaires Tailwind-like
- Preset Icons pour les icônes (via CDN esm.sh)
- Preset Web Fonts pour les polices (Inter et Lora)

### TypeScript

Les configurations TypeScript sont dans :

- `tsconfig.json` - Configuration principale
- `tsconfig.app.json` - Configuration pour l'application
- `tsconfig.node.json` - Configuration pour les outils Node.js

## 📄 Licence

Projet privé - Tous droits réservés
