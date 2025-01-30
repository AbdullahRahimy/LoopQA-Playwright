const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const LoginPage = require('../page-objects/LoginPage');

const testDataPath = path.resolve(__dirname, 'testData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

test('Login to Demo App', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(testData.login.email, testData.login.password);
  await expect(page).toHaveURL(`${testData.login.url}`);
});
