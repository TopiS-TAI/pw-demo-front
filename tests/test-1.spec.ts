import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('heading', { name: 'mr todos' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'diipa X' })).not.toBeVisible();
  await page.locator('#title').click();
  await page.locator('#title').fill('diipa');
  await page.locator('#description').click();
  await page.locator('#description').fill('daapa');
  await page.getByRole('button', { name: 'Lisää' }).click();
  await expect(page.getByRole('heading', { name: 'diipa X' })).toBeVisible();
  await page.getByRole('heading', { name: 'diipa X' }).getByRole('button').click();
  await expect(page.getByRole('heading', { name: 'diipa X' })).not.toBeVisible();
});