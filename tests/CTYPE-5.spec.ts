import {test, expect} from "@playwright/test";

test('searching for "class2"', async ({ page }) => {
    await page.goto('https://test.ctypehub.galaniprojects.de/');
    await page.getByPlaceholder('Search query').click();
    await page.getByPlaceholder('Search query').fill('class2');
    await page.getByRole('button', { name: 'Search' }).click();

    const noTypeResults = page.getByText('No CType results for “class2”');
     expect(noTypeResults).toBeVisible;
})