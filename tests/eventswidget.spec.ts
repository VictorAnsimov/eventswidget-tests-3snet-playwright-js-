import { test, expect } from '@playwright/test';
import { CalendarPage } from './pages/CalendarPage';

test('язык', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.switchLanguageToEnglish();
  await calendarPage.switchLanguageToRussian();
});

test('E2E_макс', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllTopics();
  await calendarPage.selectAllCountries();
  await calendarPage.clickFirstRadio();
  await calendarPage.clickSecondRadio();
  await calendarPage.selectLightTheme();
  await calendarPage.copyCode();
});

test('e2e 240/230', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllTopics();
  await calendarPage.selectAllCountries();
  await calendarPage.closeActiveDropdown();
  await calendarPage.clickThirdRadio();
  await calendarPage.copyCode();
});

test('e2e 380/380', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllTopics();
  await calendarPage.selectAllCountries();
  await calendarPage.setWidth(380);
  await calendarPage.setHeight(380);
  await calendarPage.copyCode();
});

test('e2e макс. ручн', async ({ page }) => {
  test.setTimeout(180000);
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllTopics();
  await calendarPage.selectAllCountries();
  await calendarPage.setWidth(1020);
  await calendarPage.toggleFullHeight();
  await calendarPage.setHeight(720);
  await calendarPage.toggleFullHeight();
  await calendarPage.selectDarkTheme();
  await calendarPage.copyCode();
});

test('e2e+генерация превью', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllTopics();
  await calendarPage.selectAllCountries();
  await calendarPage.closeActiveDropdown();
  await calendarPage.toggleFullWidth();
  await calendarPage.clickSecondRadio();
  await calendarPage.selectLightTheme();
  await calendarPage.generatePreview();
});

test('очистка выбора', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllTopics();
  await calendarPage.selectAllCountries();
  await calendarPage.clearSelection(0);
  await calendarPage.clearSelection(1);
});

test('только тема', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Affiliate');
  await calendarPage.copyCode();
});

test('только страна', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllCountries();
  await calendarPage.copyCode();
});

test('скопировать код', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.copyCode();
});

test('сгенерировать превью', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.generatePreview();
});

test('тематика affiliate', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Affiliate');
  await calendarPage.copyCode();
});

test('реклама+пагинация', async ({ page }) => {
  test.setTimeout(180000);
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  const popup = await calendarPage.clickAdvertisement();
  await calendarPage.clickNextPromo();
  await calendarPage.clickNextPromo();
  await calendarPage.clickNextPromo();
});

test('тематика blockchain', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Blockchain');
  await calendarPage.copyCode();
});

test('тематика development', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Development');
  await calendarPage.copyCode();
});

test('тематика igaming', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Igaming');
  await calendarPage.copyCode();
});

test('тематика internet marketing', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Internet Marketing');
  await calendarPage.copyCode();
});

test('тематика seo', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('SEO');
  await calendarPage.copyCode();
});

test('тематика финтех', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Финтех');
  await calendarPage.copyCode();
});

test('Скорость загрузки страницы', async ({ page }) => {
  const startTime = Date.now();
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.waitForPageLoad();
  const loadTime = Date.now() - startTime;
  expect(loadTime).toBeLessThan(5000);
});
