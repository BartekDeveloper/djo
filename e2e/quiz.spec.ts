import { expect, test } from '@playwright/test'

test('quiz: kolejność pytań jest losowana', async ({ page }) => {
  const seen = new Set<string>()
  await page.goto('/gry.html#quiz')
  for (let r = 0; r < 4; r++) {
    await page.reload()
    await expect(page.getByText('Pytanie 1 / 8', { exact: false })).toBeVisible()
    const h = await page.locator('#quiz h3').first().textContent()
    seen.add(h ?? '')
  }
  expect(seen.size).toBeGreaterThan(1)
})

test('quiz: plansza końcowa z wynikiem i przyciskiem', async ({ page }) => {
  await page.goto('/gry.html#quiz')
  for (let i = 0; i < 8; i++) {
    await expect(page.getByText(`Pytanie ${i + 1} / 8`, { exact: false })).toBeVisible()
    await page.getByRole('button', { name: /^Odpowiedź [ABCD]:/ }).first().click()
    if (i < 7) {
      await page.getByRole('button', { name: 'Następne pytanie' }).click()
    }
  }
  await expect(page.locator('#quiz').getByLabel('Wynik końcowy')).toBeVisible()
  await page.locator('#quiz').getByRole('button', { name: 'Zagraj ponownie' }).click()
  await expect(page.getByText('Pytanie 1 / 8', { exact: false })).toBeVisible()
})
