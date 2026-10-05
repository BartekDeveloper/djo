import { expect, test } from '@playwright/test'

const pages = ['/', '/hiszpania.html', '/meksyk.html', '/gry.html']

for (const p of pages) {
  test(`screenshot ${p}`, async ({ page }) => {
    await page.goto(p)
    await page.evaluate(async () => {
      const h = document.body.scrollHeight
      for (let y = 0; y <= h; y += 600) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 60))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(800)
    const name = p === '/' ? 'index' : p.replace('/', '').replace('.html', '')
    await page.screenshot({ path: `e2e/shots/${name}.png`, fullPage: true })
    await expect(page.getByRole('main')).toBeVisible()
  })
}
