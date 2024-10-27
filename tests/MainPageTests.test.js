import { test, expect } from "@playwright/test";

test.describe("Main page", () => {
  test("Must show correct more info data about customer", async ({ page }) => {
    await page.goto("/");
    await page.fill('input[name="username"]', "Admin");
    await page.fill('input[name="password"]', "Admin");
    await page.click('button[type="submit"]');
    await page.goto("http://localhost:5173/main");
    await page.click("text='More'");

    const firstName = await page.textContent(
      "#root > main > div > div:nth-child(1) > p:nth-child(2)"
    );

    const lastName = await page.textContent(
      "#root > main > div > div:nth-child(1) > p:nth-child(3)"
    );
    const gender = await page.textContent(
      "#root > main > div > div:nth-child(1) > p:nth-child(5)"
    );
    const birthDate = await page.textContent(
      "#root > main > div > div:nth-child(1) > p:nth-child(6)"
    );
    const customerIdentificationCode = await page.textContent(
      "#root > main > div > div:nth-child(1) > p:nth-child(4)"
    );
    await page.click("#root > header > div._rightBlock_1cwj8_81 > button");
    expect(firstName).toEqual("First Name: Agnes");
    expect(lastName).toEqual("Last Name: Olson");
    expect(gender).toEqual("Gender: Male");
    expect(birthDate).toEqual("Birth Date: 1973-03-28");
    expect(customerIdentificationCode).toEqual("Customer ID: 3840828B");
  });
  test("has title", async ({ page }) => {
    await page.goto("/");
    await page.fill('input[name="username"]', "Admin");
    await page.fill('input[name="password"]', "Admin");
    await page.click('button[type="submit"]');

    await page.goto("http://localhost:5173/main");
    await expect(page).toHaveTitle(/Justinas Pakalnis/);
  });
  test("Header title test", async ({ page }) => {
    await page.goto("http://localhost:5173/main");

    const headerTitle = await page.textContent(
      "#root > header > h1:nth-child(2)"
    );
    console.log("loggin header title", headerTitle);

    expect(headerTitle).toEqual("Technical Interview Assignment");
  });
});
