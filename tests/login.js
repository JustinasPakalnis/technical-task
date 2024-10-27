export default async function login(page) {
  await page.goto("/");
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "Admin");
  await page.click('button[type="submit"]');
  await page.goto("http://localhost:5173/main");
}
