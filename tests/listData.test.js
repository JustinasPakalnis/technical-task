import { test, expect } from "@playwright/test";

test("Text test", async ({ page }) => {
  await page.goto("http://localhost:5173/main");

  await page.click("text=Click me");
  await page.waitForTimeout(100);

  const firstName = await page.textContent(
    "#root > main > div > div:nth-child(1) > p:nth-child(2)"
  );
  console.log(firstName);

  expect(firstName).toEqual("Agnes");
});
