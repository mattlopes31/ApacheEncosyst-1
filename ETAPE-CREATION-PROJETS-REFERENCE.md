# 📋 GUIDE - Comment modifier les projets ENCOSYST

## 📁 Emplacement du fichier
Le fichier contenant tous les projets se trouve ici :
```
app/references/projects-data.json
```

## ✏️ Comment ajouter un nouveau projet

1. **Ouvrez le fichier** `projects-data.json`

2. **Ajoutez votre projet** en copiant ce modèle au début du fichier (après le premier `[`) :

```json
{
  "year": 2025,
  "name": "Nom de votre centrale",
  "country": "Pays",
  "power": "1x5000KVA",
  "type": "Modernisation",
  "src": "images/"
},
```

### 📝 Explication des champs :

- **year** : Année du projet (nombre, sans guillemets)
- **name** : Nom de la centrale ou du projet
- **country** : Pays (vous pouvez ajouter le département pour la France entre parenthèses)
- **power** : Puissance (format : 1x5000KVA, 2x15000KVA, etc.)
- **type** : Type de projet (choisir parmi les options ci-dessous)
- **src** : Chemin vers l'image (laisser "images/" pour l'instant)

### 🏷️ Types de projets disponibles :
- `Nouveau projet`
- `Modernisation`
- `Modernisation complète`
- `Modernisation SCADA`
- `Réhabilitation complète`
- `Automatisation`
- `Télégestion`
- `Ingénierie complète`
- `SCADA cascade`
- `Modernisation poste HTA`

## 📌 Exemple complet

Si vous voulez ajouter un nouveau projet en 2025 :

```json
[
  {
    "year": 2025,
    "name": "Centrale de Bonneval",
    "country": "France (73)",
    "power": "2x3500KVA",
    "type": "Nouveau projet",
    "src": "images/"
  },
  {
    "year": 2025,
    "name": "Centrale Pocosol",
    ...
```

## ⚠️ Points importants :

1. **Virgule** : N'oubliez pas la virgule `,` à la fin de chaque projet (sauf le dernier)
2. **Guillemets** : Tous les textes doivent être entre guillemets `"texte"`
3. **Year** : L'année est un nombre, donc SANS guillemets
4. **Format JSON** : Respectez bien l'indentation et les accolades `{ }`

## ✅ Comment vérifier que c'est correct

Après avoir modifié le fichier, utilisez un validateur JSON en ligne :
- https://jsonlint.com/
- Copiez-collez tout le contenu du fichier
- Cliquez sur "Validate JSON"
- Si c'est vert ✅ : c'est bon !
- Si c'est rouge ❌ : il y a une erreur (virgule oubliée, guillemet manquant, etc.)

## 🔄 Les modifications sont automatiques

Dès que vous sauvegardez le fichier `projects-data.json`, les changements apparaîtront automatiquement sur le site web !

## 📞 Besoin d'aide ?

Si vous avez des questions ou des problèmes, contactez votre développeur ou créez une copie de sauvegarde avant de modifier.

---

**Date de création** : Novembre 2025
**Dernière mise à jour** : Novembre 2025
