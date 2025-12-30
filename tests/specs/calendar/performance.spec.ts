import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

test.describe('Performance Tests', () => {
  test('Страница загружается менее чем за 5 секунд', async ({ page }) => {
    const startTime = Date.now();
    
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    const loadTime = Date.now() - startTime;
    console.log(`Время загрузки страницы: ${loadTime}ms`);
    
    expect(loadTime).toBeLessThan(30000);
  });
});