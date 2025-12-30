import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

test.describe('Preview Generation Tests', () => {
  test('Сгенерировать превью с настройками по умолчанию', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.generatePreview();
    
    const isPreviewVisible = await calendarPage.isPreviewVisible();
    expect(isPreviewVisible).toBe(true);
  });

  test('Сгенерировать превью с выбранными параметрами', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.selectAllTopics();
    await calendarPage.selectAllCountries();
    await calendarPage.clickSecondRadio();
    await calendarPage.selectLightTheme();
    await calendarPage.generatePreview();
    
    const isPreviewVisible = await calendarPage.isPreviewVisible();
    expect(isPreviewVisible).toBe(true);
  });
});