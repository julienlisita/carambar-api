# Carambar & Co - Joke API

Mini projet de sélection CDA – développement d'une API de blagues pour Carambar & Co, avec une landing page connectée.

## Technologies utilisées

- Node.js
- Express
- Sequelize
- SQLite
- Swagger
- Architecture MVC

## Structure du projet

├── index.js
├── app.js
├── controllers/
├── models/
├── routes/
├── config/
├── docs/           # Fichier Swagger (swagger.json)
└── .env

## Installation

```bash
git clone https://github.com/julienlisita/carambar-api.git
cd carambar-api
npm install
```
## Lancement en local

npm run dev

## Endpoints disponibles

Méthode     URL                     Description
GET         /api/v1/jokes           Récupère toutes les blagues
GET         /api/v1/jokes/:id       Récupère une blague par ID
GET         /api/v1/jokes/random    Récupère une blague aléatoire
POST        /api/v1/jokes           Ajoute une nouvelle blague

## Documentation Swagger

Lien local : http://localhost:3000/api-docs
Lien GitHub  : https://carambar-api.onrender.com/api-docs  

## Déploiements

API (Render) : https://carambar-api.onrender.com
Front (GitHub Pages) : https://julienlisita.github.io/carambar-client/

## Liens utiles

Repo GitHub API : https://github.com/julienlisita/caramba-api
Repo GitHub Front : https://github.com/julienlisita/carambar-client

## Auteur

Julien Lisita