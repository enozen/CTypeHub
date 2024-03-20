import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://test.ctypehub.galaniprojects.de/');
    await page.getByPlaceholder('Search query').click();
    await page.getByPlaceholder('Search query').fill('qa1');
    await page.getByRole('button', { name: 'Search' }).click();
  });


test.describe('Tag-base search', () => {

test('searching for Tag', async ({ page}) =>{
    await expect(page.getByRole('link', { name: '#qa1' })).toBeVisible();
    await expect(page.getByText('No CType results for “qa1”')).toBeVisible();
  });

  test('clicking on tag', async ({ page }) => {
    await page.getByRole('link', { name: '#qa1' }).click();
    await expect(page.getByRole('heading', { name: 'credential für tags überprü' })).toBeVisible();
  });
});
