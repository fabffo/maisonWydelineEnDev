# 📘 Gestion Git : Workflow Dev / Prod

Ce projet utilise un workflow Git simple avec deux branches principales :

- `main` : branche de développement (dev)
- `prod` : branche de production stable (utilisée par le serveur)

---

## 🔧 Travailler sur `main`

1. Se placer sur la branche `main` :
   ```bash
   git checkout main
   ```
2. Ajouter et valider les modifications :
   ```bash
   git add .
   git commit -m "Message clair"
   ```
3. Pousser sur le dépôt distant :
   ```bash
   git push origin main
   ```

---

## 🚀 Mettre à jour la production (`prod`)

1. Se placer sur la branche `prod` :
   ```bash
   git checkout prod
   ```
2. Mettre à jour depuis le dépôt distant :
   ```bash
   git pull origin prod
   ```
3. Fusionner les changements depuis `main` :
   ```bash
   git merge main
   ```
4. Pousser la nouvelle version en production :
   ```bash
   git push origin prod
   ```

---

## 🔍 Vérifier les différences avant fusion

Afficher les différences entre `prod` et `main` :

```bash
git diff prod..main
```

---

## 🏷️ Taguer une version stable (optionnel)

Créer un tag pour une version de production :

```bash
git tag v1.0.0 -m "Version stable 1.0.0"
git push origin v1.0.0
```

---

## ✅ Bonnes pratiques

- Toujours travailler sur `main`, jamais directement sur `prod`
- Toujours faire un `git pull` avant un `merge`
- Utiliser des messages de commit explicites
- Taguer les versions mises en production
- Pour le travail collaboratif : utiliser des branches secondaires puis les fusionner dans `main` via PR ou merge

---

## 📁 Exemple complet

```bash
# Dev
git checkout main
git add .
git commit -m "Nouvelle fonctionnalité"
git push origin main

# Passer en prod
git checkout prod
git pull origin prod
git merge main
git push origin prod
```

---

*Ce fichier peut être adapté ou automatisé avec un script (ex : deploy.sh).*

