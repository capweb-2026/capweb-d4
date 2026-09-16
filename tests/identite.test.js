import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { persona, validatePersona } from '../public/js/persona.js';

const suggestionsAttendues = [
  'Comment aller de Paris à Montreuil ?',
  "Quel transport prendre pour aller à l'aéroport ?",
  'Comment préparer mon trajet en Île-de-France ?'
];

describe('Identité de Mobi', () => {
  it('déclare le nom et l’emoji attendus', () => {
    assert.equal(persona.nom, 'Mobi');
    assert.equal(persona.emoji, '🚇');
    assert.equal([...persona.emoji].length, 1);
  });

  it('déclare un accueil conforme', () => {
    assert.match(persona.accueil, /Mobi/);
    assert.match(persona.accueil, /prépar(er|ation) un trajet en Île-de-France/i);
    assert.match(persona.accueil, /application officielle/i);
    assert.match(persona.accueil, /temps réel/i);
  });

  it('déclare exactement les trois suggestions prévues', () => {
    assert.deepEqual(persona.suggestions, suggestionsAttendues);
  });

  it('valide la persona complète', () => {
    assert.deepEqual(validatePersona(persona), { ok: true });
  });

  it('refuse une persona dont le nom est vide ou trop long', () => {
    for (const nom of ['', ' '.repeat(21), 'a'.repeat(21)]) {
      const resultat = validatePersona({ ...persona, nom });
      assert.equal(resultat.ok, false);
    }
  });
});