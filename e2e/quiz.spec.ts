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
