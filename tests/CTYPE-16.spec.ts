import { test, expect} from '@playwright/test';

test.beforeEach('Creation of a claim type with an already existing name', async ({ page }) =>{
    await page.goto('https://test.ctypehub.galaniprojects.de/create');
    await page.getByLabel('Title:').click();
    await page.getByLabel('Title:').fill('test');
    await page.getByRole('button', { name: 'Detect accounts' }).click();
    await page.getByRole('button', { name: 'Create Claim Type via Sporran' }).click();
})

test('I click on "Ok"', async ({ page }) =>{
  page.on('dialog', async (dialog) => {
    if (dialog.message() === 'An identical Type already exists. Open its page?') {
        await dialog.accept(); 
    }
    });

    await expect(page.getByRole('heading', { name: 'test' })).toBeVisible();
});

test('I click on "Abbrechen"', async ({ page }) =>{
  page.on('dialog', async (dialog) => {
    if (dialog.message() === 'An identical Type already exists. Open its page?') {
        await dialog.dismiss(); 
    }
    });

    await expect(page.getByLabel('Title:')).toHaveValue('test');
});