import { test, expect } from "@playwright/test";

test("Search weather by city", async ({ page }) => {
    await page.goto("http://localhost:5173");
    await page.locator('text="Loading"').waitFor({ state: "hidden", timeout: 30000 });
    await page
        .locator('input[placeholder="Локация"]')
        .waitFor({ visible: true, timeout: 30000 });
    await page.fill('input[placeholder="Локация"]', "Cheboksary");

    await page.click('button:has-text("Поиск")');
    await expect(page.locator("h1")).toContainText("Чебоксары", {timeout: 30000});
});
