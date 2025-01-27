import { test, expect } from "@playwright/test";

test("Search weather by city", async ({ page }) => {
    await page.goto("http://localhost:5173");

    page.setDefaultTimeout(60000);

    await page.locator('text="Loading"').waitFor({ state: "hidden" });
    console.log(await page.content());
    // Заполняем поле ввода
    await page.fill('input[id="location"]', "Москва");

    await page.click('button:has-text("Поиск")');
    await expect(page.locator("h1")).toContainText("Москва");
});
