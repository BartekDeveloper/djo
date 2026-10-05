import { expect, type Page, test } from '@playwright/test'

async function goTo(page: Page, name: string) {
  const desktop = page.getByRole('navigation', { name: 'Nawigacja główna' }).getByRole('link', { name })
  if (await desktop.isVisible()) {
    await desktop.click()
    return
  }
  await page.getByRole('button', { name: 'Otwórz menu' }).click()
  await page.getByRole('navigation', { name: 'Nawigacja mobilna' }).getByRole('link', { name }).click()
}

test('nawigacja MPA: index -> pawilony i gry', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'HISZPANIA × MEKSYK' })).toBeVisible()

  await goTo(page, 'Hiszpania')
  await expect(page).toHaveURL(/hiszpania\.html/)
  await expect(page.getByRole('heading', { name: 'España: ogień południa' })).toBeVisible()

  await goTo(page, 'Meksyk')
  await expect(page).toHaveURL(/meksyk\.html/)
  await expect(page.getByRole('heading', { name: 'México: serce Mezoameryki' })).toBeVisible()

  await goTo(page, 'Gry')
  await expect(page).toHaveURL(/gry\.html/)
  await expect(page.getByRole('heading', { name: 'Zagraj i sprawdź się' })).toBeVisible()
})

test('breakpoint 900px: poniżej hamburger, powyżej pełna nawigacja', async ({ page }) => {
  await page.setViewportSize({ width: 800, height: 800 })
  await page.goto('/')
  await expect(
    page.getByRole('navigation', { name: 'Nawigacja główna' }).getByRole('link', { name: 'Hiszpania' }),
  ).toBeHidden()
  await expect(page.getByRole('button', { name: 'Otwórz menu' })).toBeVisible()

  await page.setViewportSize({ width: 1000, height: 800 })
  await expect(
    page.getByRole('navigation', { name: 'Nawigacja główna' }).getByRole('link', { name: 'Hiszpania' }),
  ).toBeVisible()
  await expect(page.getByRole('button', { name: 'Otwórz menu' })).toBeHidden()
})
