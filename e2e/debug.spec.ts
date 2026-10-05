import { test } from '@playwright/test'

test('hero desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'e2e/shots/hero-desktop.png' })
})
