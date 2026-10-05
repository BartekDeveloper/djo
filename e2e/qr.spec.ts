import { expect, test } from '@playwright/test'

test('modal QR otwiera się i pokazuje URL strony', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Pokaż kod QR do tej strony' }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog.getByText('http://localhost:4173/', { exact: false })).toBeVisible()
  await page.getByRole('button', { name: 'Zamknij okno z kodem QR' }).click()
  await expect(dialog).toBeHidden()
})
