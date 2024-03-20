import { test, expect} from '@playwright/test';

test('Checking the footer', async ({ page }) =>{
    await page.goto('https://test.ctypehub.galaniprojects.de/');

    // I click on the 'Imprint' link in the footer
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.getByRole('link', { name: 'Imprint' }).click();
      await expect(page).toHaveURL('https://test.ctypehub.galaniprojects.de/imprint');
      await expect(page.getByRole('heading', { name: 'Imprint' })).toBeVisible();

      // I click on the 'Terms' link in the footer
      await page.getByRole('link', { name: 'Terms' }).click();
    await expect(page).toHaveURL('https://test.ctypehub.galaniprojects.de/terms');
    await expect(page.getByRole('heading', { name: 'Terms and Conditions for the' })).toBeVisible();

      // I click on the 'Privacy' link in the footer.
      await page.getByRole('link', { name: 'Privacy' }).click();
      await expect(page).toHaveURL('https://test.ctypehub.galaniprojects.de/privacy');
      await expect(page.getByRole('heading', { name: 'Privacy Policy' })).toBeVisible();
})