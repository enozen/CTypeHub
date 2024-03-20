import { test, expect} from '@playwright/test';

test('Logo button navigates to home page', async ({ page }) =>{
    await page.goto('https://test.ctypehub.galaniprojects.de/');

    // Scroll to the bottom of the page
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await expect(page.getByRole('link', { name: 'Older' })).toBeVisible();

      // Click on Older button
      await page.getByRole('link', { name: 'Older' }).click();
      await expect(page).toHaveURL('https://test.ctypehub.galaniprojects.de/?page=442');

      // clicking on Logo
      await page.getByRole('link', { name: 'CTypeHub logo' }).click();
      await expect(page).toHaveURL('https://test.ctypehub.galaniprojects.de/');


})