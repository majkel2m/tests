let { test } = require("@playwright/test");

test("check on Teonite website is Defguard exist", async function ({ page }) {
  await page.goto("https://teonite.com");
  await page.locator("#navbarCollapse > ul > li:nth-child(3) > a")
      .click();
  await page.locator('text=DefGuard TEONITE Ventures')
      .isVisible();
});
