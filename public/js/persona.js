export const persona = {
  nom: 'Mobi',
  emoji: '🚇',
  accueil: 'Bonjour, je suis Mobi. Je vous aide à préparer un trajet en Île-de-France. Pour les informations en temps réel, vérifiez l’application officielle de transport.',
  suggestions: [
    'Comment aller de Paris à Montreuil ?',
    "Quel transport prendre pour aller à l'aéroport ?",
    'Comment préparer mon trajet en Île-de-France ?'
  ]
};

export function validatePersona(candidate) {
  const erreurs = [];
  const nom = typeof candidate?.nom === 'string' ? candidate.nom.trim() : '';
  const emoji = typeof candidate?.emoji === 'string' ? candidate.emoji : '';
  const accueil = typeof candidate?.accueil === 'string' ? candidate.accueil : '';
  const suggestions = Array.isArray(candidate?.suggestions) ? candidate.suggestions : [];

  if (nom.length < 2 || nom.length > 20) {
    erreurs.push('Le nom doit contenir entre 2 et 20 caractères.');
  }
  if ([...emoji].length !== 1) {
    erreurs.push('La persona doit contenir exactement un emoji.');
  }
  if (!accueil.includes(nom)) {
    erreurs.push('L’accueil doit contenir le nom de la persona.');
  }
  if (suggestions.length !== 3 || suggestions.some((suggestion) => typeof suggestion !== 'string' || suggestion.trim() === '')) {
    erreurs.push('La persona doit contenir exactement trois suggestions non vides.');
  }

  return erreurs.length === 0 ? { ok: true } : { ok: false, erreurs };
}
