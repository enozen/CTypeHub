import { test, expect} from '@playwright/test';

test.beforeEach( async ({ page }) =>{
    await page.goto('https://test.ctypehub.galaniprojects.de/')
    await page.getByRole('link', { name: 'Create Claim Type' }).click();

});

test('Click on the hyperlink to “KILT DID”.', async ({ page }) =>{
    await expect(page.getByRole('heading', { name: 'Create a Claim Type' })).toBeVisible();

    await page.getByRole('link', { name: 'KILT DID' }).click();
    await expect(page).toHaveURL('https://kilt-protocol.org/get-did/index.html')
});

test('Click on the hyperlink to “Sporran wallet”.', async ({ page }) =>{
    await page.getByRole('link', { name: 'Sporran wallet' }).click();
    await expect(page).toHaveURL('https://www.sporran.org/')
});

test('Click on the hyperlink to “DID Sign API Specification v1”.', async ({ page }) =>{
    await page.getByRole('link', { name: 'DID Sign API Specification v1' }).click();
    await expect(page).toHaveURL('https://github.com/KILTprotocol/spec-ext-didsign-api')
});