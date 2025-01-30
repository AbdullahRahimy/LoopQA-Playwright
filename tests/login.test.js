// tests/login.test.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../page-objects/LoginPage')

test('Login to Demo App', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('admin', 'password123');
  await expect(page).toHaveURL('https://animated-gingersnap-8cf7f2.netlify.app/');
});
