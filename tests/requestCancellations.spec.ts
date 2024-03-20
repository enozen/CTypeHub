import { test, expect } from '@playwright/test';

test('Simulating network delays and canceling requests', async ({ page }) => {
  
  await page.route('**/*', route => {
    const url = route.request().url();
    if (url.includes('reklama')) {
      route.abort();
    } else {
      route.continue();
    }
  });
  
  await page.goto('https://test.ctypehub.galaniprojects.de/');
  
});