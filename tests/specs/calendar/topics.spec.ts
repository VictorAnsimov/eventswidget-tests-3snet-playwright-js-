import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

const TEST_TOPICS = ['Blockchain', 'Development']; // Тестируем только 2 темы для скорости

test.describe('Topics Selection Tests', () => {
  test('Выбрать каждую тему отдельно', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    for (const topic of TEST_TOPICS) {
      // Выбираем тему (не очищаем каждый раз)
      await calendarPage.selectTopic(topic);
      
      // Копируем код
      await calendarPage.copyCode();
      
      // Проверяем что код сгенерирован
      const code = await calendarPage.getGeneratedCode();
      expect(code).toContain('iframe');
      
      await page.waitForTimeout(1000);
    }
  });
});