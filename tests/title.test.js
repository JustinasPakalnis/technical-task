import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/main");
  await expect(page).toHaveTitle(/Justinas Pakalnis/);
});
