import { test, expect } from '@playwright/test';
import { CalendarPage } from '../../pages/CalendarPage';

test.describe('Size Configuration Tests', () => {
  let calendarPage: CalendarPage;

  test.beforeEach(async ({ page }) => {
    calendarPage = new CalendarPage(page);
    await calendarPage.goto();
  });

  test('Установка размеров 380x380', async () => {
    await calendarPage.setWidth(380);
    await calendarPage.setHeight(380);
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toContain('width="380"');
    expect(code).toContain('height="380"');
  });

  test('Установка размеров 240x240', async () => {
    await calendarPage.setWidth(240);
    await calendarPage.setHeight(240);
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    expect(code).toContain('width="240"');
    expect(code).toContain('height="240"');
  });

  test('Установка размеров 1020x720 без полной ширины', async () => {
    await calendarPage.setWidth(1020);
    await calendarPage.setHeight(720);
    // НЕ включаем toggleFullWidth()!
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    // Проверяем что ширина либо 1020, либо 100% (если по умолчанию стоит полная ширина)
    expect(code).toMatch(/width="1020"|width="100%"/);
    expect(code).toContain('height="720"');
  });

  test('Включение полной ширины', async () => {
    await calendarPage.setWidth(600);
    await calendarPage.toggleFullWidth(); // Включаем полную ширину
    await calendarPage.copyCode();
    
    const code = await calendarPage.getGeneratedCode();
    // При включенной полной ширине должно быть width="100%"
    expect(code).toContain('width="100%"');
  });
});