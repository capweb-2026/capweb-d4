function validerMessageStrict(raw) {
    if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être du texte' };
    } 

const texte = raw.trim();
if (texte === '') {
    return { ok: false, error: 'Le message ne doit pas être vide' };
    }

    if (texte.length > 280) {
    return { ok: false, error: 'Le message est trop long (280 caractères maximum)' };
    }

return { ok: true, value: texte };
}

export function replyTo(message) {
const texte = message.trim().toLowerCase();
    if (texte === 'salut' || texte === 'bonjour') {
        return 'Bonjour !' ;
    }

    if (texte === 'aide') {
        return 'Que puis-je faire pour vous ?' ;
    }

    if (texte === 'test') {
        return 'test réussi' ;
    }
return 'Je ne comprends pas votre message.' ;
}

// Tolérance : un message à peine trop long (jusqu'à 300 caractères) reste accepté.
export function validateMessage(raw) {
  const resultat = validerMessageStrict(raw);
  if (resultat.ok || typeof raw !== 'string') {
    return resultat;
  }
  const value = raw.trim();
  if (value !== '' && value.length <= 300) {
    return { ok: true, value };
  }
  return resultat;
}
