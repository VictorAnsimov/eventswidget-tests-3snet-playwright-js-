import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

test('E2E: полная конфигурация календаря', async ({ page }) => {
  // 1. Переходим на страницу
  await page.goto('https://dev.3snet.info/eventswidget/');
  await page.waitForLoadState('domcontentloaded');
  
  // 2. Ждем загрузки страницы
  await page.locator('text=Шаг 1').waitFor({ state: 'visible', timeout: 15000 });
  
  // 3. Выбираем все темы
  await page.locator('.checkselect-over').first().click();
  await page.locator('text=Выбрать все').first().click();
  await page.locator('.checkselect-over').first().click();
  await page.waitForTimeout(500);
  
  // 4. Выбираем все страны
  await page.locator('div:nth-child(2) > .input-item > .checkselect > .checkselect-control > .checkselect-over').click();
  await page.locator('text=Выбрать все').nth(1).click();
  await page.locator('div:nth-child(2) > .input-item > .checkselect > .checkselect-control > .checkselect-over').click();
  await page.waitForTimeout(500);
  
  // 5. Включаем "на всю ширину контейнера"
  await page.locator('label').filter({ hasText: 'на всю ширину контейнера' }).click();
  await page.waitForTimeout(500);
  
  // 6. Включаем "на всю высоту блока" (ищем элемент)
  const fullHeightToggle = page.locator('text=на всю высоту блока');
  if (await fullHeightToggle.count() > 0) {
    await fullHeightToggle.click();
    await page.waitForTimeout(500);
  }
  
  // 7. Кликаем "Скопировать код"
  await page.locator('button:has-text("Скопировать код")').click();
  await page.waitForTimeout(1000);
  
  // 8. Проверяем что код сгенерирован
  const codeTextarea = page.locator('textarea');
  const generatedCode = await codeTextarea.inputValue();
  
  expect(generatedCode).toContain('iframe');
  expect(generatedCode).toContain('3snet-frame');
  expect(generatedCode.length).toBeGreaterThan(50);
  
  console.log('Код успешно сгенерирован, длина:', generatedCode.length, 'символов');
});