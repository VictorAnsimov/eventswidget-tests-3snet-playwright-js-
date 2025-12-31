import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

test.describe('Countries Selection Tests', () => {
  test('Выбрать все страны', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.selectAllCountries();
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toContain('event_country=');
  });

  test('Очистка выбора стран', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.selectAllCountries();
    await calendarPage.clearCountries();
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toBeTruthy();
  });
});