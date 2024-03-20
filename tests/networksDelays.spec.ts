import { test, expect } from '@playwright/test';

test('Simulating network delays and canceling requests', async ({ page }) => {
 
  await page.route('**/*', async (route, request) => {
    
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    route.continue();
  });

  await page.goto('https://test.ctypehub.galaniprojects.de/');
});