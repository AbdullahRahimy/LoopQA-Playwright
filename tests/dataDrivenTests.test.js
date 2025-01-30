const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const testDataPath = path.resolve(__dirname, 'testData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

async function login(page) {
  await page.goto(testData.login.url);
  await page.fill('input[id="username"]', testData.login.email);
  await page.fill('input[id="password"]', testData.login.password);
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(`${testData.login.url}`);
}

testData.testCases.forEach(({ name, navigateTo, task, column, tags }) => {
  test(name, async ({ page }) => {
    await login(page);
    await page.waitForTimeout(3000);
    await page.click(`text="${navigateTo}"`);
    
    await expect(page.locator(`text="${task}"`)).toBeVisible();

    await expect(page.locator(`text="${column}"`)).toBeVisible();

    for (const tag of tags) {
      const matchingTagLocator = page.locator(`text="${tag}"`).first();
      await expect(matchingTagLocator).toBeVisible();
    }
  });
});
