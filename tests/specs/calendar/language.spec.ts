import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

test.describe('Language Tests', () => {
  test('Языковой переключатель присутствует', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
  });
});