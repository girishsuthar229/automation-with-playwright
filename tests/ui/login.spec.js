import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';

test('User login should work', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(homePage.getFlashMessage()).toContainText('You logged into a secure area!');
});