import { test, expect } from "@playwright/test";
import login from "./login.js";
test.describe("Main page", () => {
  test("More button test and data", async ({ page }) => {
    await login(page);
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
  test("Page title test", async ({ page }) => {
    await login(page);
    await expect(page).toHaveTitle(/Justinas Pakalnis/);
  });
  test("Header title test", async ({ page }) => {
    await login(page);
    const headerTitle = await page.textContent(
      "#root > header > h1:nth-child(2)"
    );

    expect(headerTitle).toEqual("Technical Interview Assignment");
  });
  test("Dark mode on test", async ({ page }) => {
    await login(page);

    await page.click("#root > header > div._displayMode_1cwj8_47 > button");
    const darkMode = await page.evaluate(() => {
      const headerElement = document.querySelector("header[data-darkmode]");
      return headerElement ? headerElement.getAttribute("data-darkmode") : null;
    });

    expect(darkMode).toEqual("true");
  });
  test("Pagination test", async ({ page }) => {
    await login(page);

    await page.click(
      "#root > main > section > div._paginationContainer_holpr_319 > div > button:nth-child(3)"
    );
    const pageValue = await page.evaluate(() => {
      const selectedButton3 = document.querySelector(
        "#root > main > section > div._paginationContainer_holpr_319 > div > button:nth-child(3)"
      );
      return selectedButton3
        ? selectedButton3.getAttribute("data-selectedpage")
        : null;
    });

    expect(pageValue).toEqual("true");
  });
});
