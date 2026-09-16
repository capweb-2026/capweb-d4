# SPEC.md — *Mobi*

## Objectif

Mobi est un assistant qui aide l'utilisateur à préparer un trajet en Île-de-France. Il fournit des informations générales sur les transports et renvoie vers l'application officielle pour les horaires et les informations en temps réel.*

## Critères d'acceptation


1. **Nom** — Quand la page s'ouvre, le système affiche le nom `Mobi` dans le titre principal. Le nom, sans les espaces autour, fait de 2 à 20 caractères.
2. **Emoji** — Quand la page s'ouvre, le système affiche exactement 🚇 à côté du nom. Un emoji affiché comme un seul symbole visuel compte pour un seul emoji.
3. **Accueil** — Quand la conversation est vide, le système affiche un message d'accueil contenant le nom Mobi et indiquant que Mobi aide à préparer un trajet en Île-de-France. Le message précise que les informations en temps réel doivent être vérifiées dans l'application officielle de transport.
4. **Suggestions** — Quand la page s'ouvre, le système propose exactement trois questions suggérées : Comment aller de Paris à Montreuil ?, Quel transport prendre pour aller à l'aéroport ? et Comment préparer mon trajet en Île-de-France ?. Quand l'utilisateur clique sur une suggestion, le système place la question dans le champ de saisie sans l'envoyer.
5. **Signature** — Quand Mobi répond à un message, sa ligne commence par `Mobi` au lieu de `Cap Web`.
6. **Contrat** — Quand les tests du contrat CP1 sont exécutés, tous les tests restent verts.

## Hors périmètre

- Mobi ne fournit pas les horaires ou les perturbations en temps réel.
- Mobi ne remplace pas l'application officielle de transport.
- Mobi ne permet pas d'acheter ou de réserver un titre de transport.
- Mobi ne demande pas de données personnelles à l'utilisateur.
- L'utilisateur ne peut pas modifier l'identité de Mobi.
- Mobi n'utilise pas d'appel à une IA externe.
- Il n'y a pas d'image d'avatar.

## Données et fonctions attendues

- `public/js/persona.js` exporte `persona = { nom, emoji, accueil, suggestions }`
- `persona.nom` vaut Mobi
- `persona.emoji` vaut 🚇
- `persona.accueil` contient le nom Mobi et indique que Mobi aide à préparer un trajet en Île-de-France ainsi que le renvoi vers l'application officielle pour le temps réel
-`persona.suggestions` contient exactement trois chaînes de caractères correspondant aux trois questions définies
- `public/js/persona.js` exporte `validatePersona(persona)`
- `validatePersona(persona)` renvoie `{ ok: true }` lorsque l'identité est valide ou `{ ok: false, erreurs: [texte, …] }` lorsqu'elle ne respecte pas les règles
- `validatePersona` vérifie notamment la longueur du nom, la présence d'un seul emoji, la présence du nom dans l'accueil et la présence de exactement trois suggestions non vides
- Le nom est vérifié sans tenir compte des espaces placés avant ou après
- La page contient `#accueil` et `#suggestions`, en dehors de `#messages`
-`persona.js` est ajouté à la liste blanche du serveur local si celle-ci est utilisée

## Questions ouvertes

Aucunes

