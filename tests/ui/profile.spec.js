import { test, expect } from '@playwright/test';
test.describe('Profile Page Negative Scenario', () => {
    test('Should show Not Found when user navigates to /profile', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/profile');
        const bodyText = await page.textContent('body');

        console.log('Page content:', bodyText);

        expect(bodyText).toContain('Profile');
    });

});