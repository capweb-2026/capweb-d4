/* global localStorage */
import { test, expect } from '@playwright/test';

const suggestionsAttendues = [
  'Comment aller de Paris à Montreuil ?',
  "Quel transport prendre pour aller à l'aéroport ?",
  'Comment préparer mon trajet en Île-de-France ?'
];

async function pageNeuve(page) {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
}

test.describe('Identité de Mobi', () => {
  test('affiche le nom Mobi et exactement son emoji dans le titre principal', async ({ page }) => {
    await pageNeuve(page);
    await expect(page.locator('h1')).toHaveText('Mobi 🚇');
  });

  test('affiche un accueil conforme quand la conversation est vide', async ({ page }) => {
    await pageNeuve(page);
    const accueil = page.locator('#accueil');
    await expect(accueil).toContainText('Mobi');
    await expect(accueil).toContainText(/préparer un trajet en Île-de-France/i);
    await expect(accueil).toContainText(/application officielle/i);
    await expect(accueil).toContainText(/temps réel/i);
  });

  test('affiche les trois suggestions exactes', async ({ page }) => {
    await pageNeuve(page);
    await expect(page.locator('#suggestions button')).toHaveText(suggestionsAttendues);
  });

  test('place une suggestion dans le champ sans envoyer la question', async ({ page }) => {
    await pageNeuve(page);
    await page.locator('#suggestions button').nth(0).click();
    await expect(page.locator('#message')).toHaveValue(suggestionsAttendues[0]);
    await expect(page.locator('#messages li')).toHaveCount(0);
  });

  test('signe les réponses avec Mobi', async ({ page }) => {
    await pageNeuve(page);
    await page.locator('#message').fill('salut');
    await page.getByRole('button', { name: /envoyer/i }).click();
    await expect(page.locator('#messages li')).toHaveCount(2);
    await expect(page.locator('#messages li').nth(1)).toHaveText(/^Mobi\b/);
    await expect(page.locator('#messages li').nth(1)).not.toHaveText(/^Cap Web\b/);
  });
});