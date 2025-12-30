import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

test.describe('Radio Buttons Tests', () => {
  test('Выбор первого радио-баттона', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.clickFirstRadio();
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toBeTruthy();
  });

  test('Выбор второго радио-баттона', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.clickSecondRadio();
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toBeTruthy();
  });

  test('Выбор третьего радио-баттона', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.goto();
    
    await calendarPage.clickThirdRadio();
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toBeTruthy();
  });
});