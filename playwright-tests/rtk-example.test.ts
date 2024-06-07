import { test, expect, Page } from '@playwright/test';

test('Check page contents', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByText("Replay Sourcemap Configuration Example").waitFor();

  const currentValue = await page.getByLabel("Count").textContent();
  expect(currentValue).toBe("0");

  await page.getByLabel("Increment value").click();
  const updatedValue = await page.getByLabel("Count").textContent();
  expect(updatedValue).toBe("1");
});