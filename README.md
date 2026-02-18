# Safari Lounge Bar - Menus & Cartes

Une page web élégante et moderne pour présenter les menus du Lounge Bar Safari.

## Caractéristiques

- **Design moderne** avec ambiance lounge chic et exotique
- **Palette de couleurs** néon : anthracite, rose vif, cyan électrique
- **Navigation par onglets** : Boissons, Chicha, Plats
- **Multi-langues** : Français, Anglais, Russe
- **Conversion de devises** : Р, €, $
- **Responsive design** pour mobile et desktop
- **Animations néon** et effets visuels attractifs

## Technologies

- React 18
- Tailwind CSS
- Polices Google Fonts (Bebas Neue, Rajdhani, Montserrat)

## Démarrage

1. Installer les dépendances :
```bash
npm install
```

2. Démarrer le serveur de développement :
```bash
npm start
```

3. Ouvrir http://localhost:3000

## Structure du projet

```
src/
├── App.jsx          # Composant principal
├── data.js          # Données des menus et traductions
├── index.css        # Styles personnalisés et Tailwind
└── index.js         # Point d'entrée React
```

## Personnalisation

Les données des menus sont configurables dans `src/data.js` :
- Boissons avec catégories et prix
- Chicha avec différents types
- Plats (à compléter)
- Traductions pour 3 langues
- Taux de conversion des devises

## Déploiement

```bash
npm run build
```

Le dossier `build` contient la version optimisée pour la production.
