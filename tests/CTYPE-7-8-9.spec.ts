import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) =>{
    await page.goto('https://test.ctypehub.galaniprojects.de/');
    await page.getByPlaceholder('Search query').fill('qa');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'QA', exact: true }).click();
})

test('Creator link verification', async ({ page }) =>{
    await expect(page.getByText('QACreatorw3n:nastiaNumber of')).toBeVisible();

    await page.getByRole('link', { name: 'w3n:nastia' }).click();
    await expect(page).toHaveURL('https://test.w3n.id/nastia');
})

test('Transaction link verification', async ({ page }) =>{
    await page.getByRole('link', { name: '0x03124de99048e1cea91b18319245b893d6abd59fd13925b5fd39a3ac12cd50a4' }).click();
    await expect(page).toHaveURL('https://kilt-testnet.subscan.io/extrinsic/0x03124de99048e1cea91b18319245b893d6abd59fd13925b5fd39a3ac12cd50a4');
    await expect(page.locator('#subscan-app div').filter({ hasText: 'Timestamp2023-08-29 14:51:48' }).nth(3)).toBeVisible();
})

test('Tag interaction verification', async ({ page }) =>{
    await page.getByRole('link', { name: '#qa' }).click();
    await expect(page.getByRole('heading', { name: '#qa' })).toBeVisible();
})