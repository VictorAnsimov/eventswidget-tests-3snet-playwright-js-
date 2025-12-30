import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

test.describe('Smoke Tests (простая проверка)', () => {
  test('Страница загружается', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    // Простые проверки
    await expect(page.locator('text=Шаг 1')).toBeVisible();
    await expect(page.locator('button:has-text("Скопировать код")')).toBeVisible();
  });

  test('Копирование кода работает', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.copyCode();
    // Если не упало - значит ок
  });

  test('Выбор темы работает', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.selectTopic('Blockchain');
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toContain('iframe');
  });
});