import { test, expect } from '@playwright/test';


test('Review of the “Create a Claim Type” page', async ({ page }) =>{

    // The page is loaded
    await page.goto('https://test.ctypehub.galaniprojects.de/create');
    await expect(page.getByRole('heading', { name: 'Create a Claim Type' })).toBeVisible();

    // giving a title
    const title = page.getByLabel('Title:');
    await title.click();
    await title.fill('eno');
    await expect(title).toHaveValue('eno');


    // giving a description
    const description = page.getByLabel('Description (optional):');
    await description.click();
    await description.fill('this is a test');
    await expect(description).toHaveValue('this is a test')


    // clicking on "Add Property
    await page.getByRole('button', { name: 'Add Property' }).click();
    await expect(page.getByText('Name:')).toBeVisible();


    // checking the tags
    await page.getByLabel('Tags (Optional):').click();

    await page.getByLabel('Tags (Optional):').type('tag1,', { delay: 100 });
    await expect(page.getByText('tag1')).toBeVisible();

    await page.getByLabel('Tags (Optional):').type('tag2,', { delay: 100 });
    await expect(page.getByText('tag2')).toBeVisible();

    await expect(page.locator('li').filter({ hasText: 'tag2' }).getByLabel('remove tag')).toBeVisible();


    // Detecting Sporran wallet accounts
    await page.getByRole('button', { name: 'Detect accounts' }).click();

    const errorMessage = page.getByText('No wallets detected'); 
    await expect(errorMessage).toBeVisible();
    
    // I click on the “Search Claim Types” button in the top right
    await page.getByRole('link', { name: 'Search Claim Types' }).click();
    await expect(page.getByPlaceholder('Search query')).toBeVisible();
});

