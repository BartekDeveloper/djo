import { expect, test } from '@playwright/test'

test('audyt: opacity i kolory krytycznych tekstów', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(1000)
  const rows = await page.evaluate(() => {
    const out: { sel: string; opacity: string; color: string; bg: string }[] = []
    document.querySelectorAll('article p, li span, section p').forEach((el) => {
      const cs = getComputedStyle(el)
      const t = (el.textContent ?? '').trim().slice(0, 28)
      if (t) out.push({ sel: t, opacity: cs.opacity, color: cs.color, bg: cs.backgroundColor })
    })
    return out
  })
  const bad = rows.filter((r) => r.opacity !== '1')
  console.log(JSON.stringify({ total: rows.length, bad }, null, 1))
  expect(bad.length).toBe(0)
})

test('klip karty kultury bez fullPage', async ({ page }) => {
  await page.goto('/hiszpania.html')
  const card = page.getByRole('article').first()
  await card.scrollIntoViewIfNeeded()
  await page.waitForTimeout(800)
  const style = await card.evaluate((el) => {
    const p = el.querySelector('p')
    const cs = p ? getComputedStyle(p) : null
    return { opacity: cs?.opacity, color: cs?.color, font: cs?.fontFamily, cls: p?.className }
  })
  console.log('CARD-P ' + JSON.stringify(style))
  const chain = await card.evaluate((el) => {
    const out: { tag: string; cls: string; color: string }[] = []
    let n: HTMLElement | null = el.querySelector('p')
    while (n && out.length < 10) {
      const cs = getComputedStyle(n)
      out.push({ tag: n.tagName, cls: (n.className as string)?.toString?.().slice(0, 80) ?? '', color: cs.color })
      n = n.parentElement
    }
    return out
  })
  console.log('CHAIN ' + JSON.stringify(chain, null, 1))
  await card.screenshot({ path: 'e2e/shots/klip-karta.png' })
})
