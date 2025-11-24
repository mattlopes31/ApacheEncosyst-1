# 🎯 EXEMPLE RAPIDE - Ajouter un projet

## Avant (fichier original)
```json
[
  {
    "year": 2025,
    "name": "Centrale Pocosol",
    "country": "Costa Rica",
    "power": "2x15000KVA",
    "type": "Modernisation",
    "src": "images/"
  },
  {
    "year": 2025,
    "name": "Centrale Agua Gata",
    ...
```

## ⬇️ Après avoir ajouté un nouveau projet

```json
[
  {
    "year": 2025,
    "name": "MA NOUVELLE CENTRALE",
    "country": "France (05)",
    "power": "1x4500KVA",
    "type": "Nouveau projet",
    "src": "images/"
  },
  {
    "year": 2025,
    "name": "Centrale Pocosol",
    "country": "Costa Rica",
    "power": "2x15000KVA",
    "type": "Modernisation",
    "src": "images/"
  },
  {
    "year": 2025,
    "name": "Centrale Agua Gata",
    ...
```

## ✨ C'est tout !

Le nouveau projet apparaîtra automatiquement :
- ✅ Dans la liste des projets
- ✅ Dans les filtres (année, pays, type)
- ✅ Sur la carte (si les coordonnées sont ajoutées sur Google Maps)

## 💡 Conseil

**Pour mettre un projet en haut de la liste** : Ajoutez-le juste après le premier crochet `[`

**Pour l'ajouter à la fin** : Ajoutez-le avant le dernier crochet `]` (et enlevez la virgule du dernier projet)

---

**C'est simple, non ? 😊**
