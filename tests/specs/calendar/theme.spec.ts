import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

test.describe('Theme Selection Tests', () => {
  test('Выбор светлой темы', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.selectLightTheme();
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toContain('theme=');
  });

  test('Выбор темной темы', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.selectDarkTheme();
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toContain('theme=');
  });
});