import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://test.ctypehub.galaniprojects.de/');
});


test('Searchfield to be visible', async ({ page }) => {
    const searchfield = page.getByPlaceholder('Search query');

    await expect(searchfield).toBeVisible();
    await expect(searchfield).toHaveValue('');
});
 
test('I can type in the search field without getting error messages', async ({ page}) =>{
  await page.getByPlaceholder('Search query').click();
  await page.getByPlaceholder('Search query').fill('Credential');
  await page.getByRole('button', { name: 'Search' }).click();


  await expect(page.getByText('CType results for “Credential')).toBeVisible();
  await expect(page.getByText('No CType results for “')).not.toBeVisible();
  await expect(page.getByRole('link', { name: 'QA Credential' })).toBeVisible();

}) 




