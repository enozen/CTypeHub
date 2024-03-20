import { test, expect } from '@playwright/test';

test.describe('testing with search term "class"', () =>{

test.beforeEach(async ({ page }) => {
    await page.goto('https://test.ctypehub.galaniprojects.de/');
    await page.getByPlaceholder('Search query').click();
  await page.getByPlaceholder('Search query').fill('class');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'credential_test0412-0705-' }).click();
  });

test('Verify creator information starts with did or w3n', async ({ page}) =>{
  // The detailed view opens
  await expect(page.getByRole('heading', { name: 'credential_test0412-0705-' })).toBeVisible();

  // Verify creator information starts with did or w3n
  const creatorInfoElement = page.locator('text=did:kilt:');
  const creatorInfo = await creatorInfoElement.textContent();
  const pattern = /^(did:|w3n)/;
  expect(creatorInfo).toMatch(pattern);

   // Verifying the entire expected text
   await expect(creatorInfoElement).toHaveText('did:kilt:4q78jeS26kKDan6BMQfV5HcRSxGkANcoxjP83sPfcNjn6E5Y');
});

test('testing "Creator Name" with w3n', async ({ page })=>{
  await page.getByRole('link', { name: 'CTypeHub logo' }).click();
  await page.getByRole('link', { name: 'CTypeHub logo' }).click();
  await page.getByPlaceholder('Search query').click();
  await page.getByPlaceholder('Search query').fill('test 02');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'test' }).click();

  const creatorInfoElement = page.getByRole('link', { name: 'w3n:nastia' });
  const creatorInfo = await creatorInfoElement.textContent();
  const pattern = /^(did:|w3n)/;
  expect(creatorInfo).toMatch(pattern);
  await expect(creatorInfoElement).toHaveText('w3n:nastia');

})

test('verifying the entire expected text', async ({ page }) => {
// Check that the value is an integer and not negative
 const numberOfAttestationsText = await page.getByText('0', { exact: true }).textContent();
 if (typeof numberOfAttestationsText === 'string') {
    const numberOfAttestations = Number(numberOfAttestationsText);

    expect(numberOfAttestations).not.toBeNaN();
    expect(numberOfAttestations).toBeGreaterThanOrEqual(0);
  } else {
  
    throw new Error('Number of Attestations is null or not a string');
  }
})

test('Creation date field has the correct format', async ({ page }) => {

    const creationDateElement = page.getByText('/5/2022, 2:14:24 PM'); 
    const creationDateText = await creationDateElement.textContent();
    const dateFormatRegex = /^\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2}:\d{2} [AP]M$/;
  
    expect(creationDateText).toMatch(dateFormatRegex);
  });
});

test.describe('testing with search term "qa"', () => {

    test.beforeEach(async ({ page }) => {
    await page.goto('https://test.ctypehub.galaniprojects.de/');
    await page.getByPlaceholder('Search query').click();
    await page.getByPlaceholder('Search query').fill('qa');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('heading', { name: 'QA', exact: true }).click();
    await page.getByRole('link', { name: 'QA', exact: true }).click();
      });

     test('Property 1 has correct Name and Type', async ({ page }) => {
        const nameElement = page.locator('dt._term_1pd73_12:has-text("Name:") + dd._definition_1pd73_20');
        const typeElement = page.locator('dt._term_1pd73_12:has-text("Type:") + dd._definition_1pd73_20');

        await expect(nameElement).toHaveText('test1');
        await expect(typeElement).toHaveText('string');
      });
 
  test('verifying that a transaction hash has the correct hexadecimal format', async ({ page }) => {
    const transaction = page.locator('text=0x03124de99048e1cea91b18319245b893d6abd59fd13925b5fd39a3ac12cd50a4');
    const transactionHashText = await transaction.textContent();
    const hexFormatRegex = /^0x[a-fA-F\d]+$/;

    expect(transactionHashText).toMatch(hexFormatRegex);
  });

  test('I check that the tags are presented in an acceptable format.', async ({ page }) => {
    const tag = page.locator('fieldset ul li a:has-text("#qa")');
    await expect(tag).toHaveText(/.+/);
    await expect(tag).toBeVisible();

    try {
        await tag.click();
        
      } catch (error) {
        throw new Error('The element is not clickable');
      }
  })

})
