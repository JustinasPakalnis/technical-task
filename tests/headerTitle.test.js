import { test, expect } from "@playwright/test";

test("Header title test", async ({ page }) => {
  await page.goto("http://localhost:5173/main");

  const headerTitle = await page.textContent(
    "#root > header > h1:nth-child(2)"
  );
  console.log("loggin header title", headerTitle);

  expect(headerTitle).toEqual("Technical Interview Assignment");
});
