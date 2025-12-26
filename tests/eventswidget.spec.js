const { test, expect } = require('@playwright/test');
const { CalendarPage } = require('./pages/CalendarPage');
const { testData } = require('./fixtures/test-data');

test('язык', async ({ page }) => {
  // ТЕСТ 1: Язык
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.switchLanguageToEnglish();
  await calendarPage.switchLanguageToRussian();
});

test('E2E_макс', async ({ page }) => {
  // ТЕСТ 2: создание календаря макс шир. выс. светл.
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
  //ТЕСТ 3: 230/240 светл.
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllTopics();
  await calendarPage.selectAllCountries();
  await calendarPage.closeActiveDropdown();
  await calendarPage.clickThirdRadio();
  await calendarPage.copyCode();
});

test('e2e 380/380', async ({ page }) => {
  //ТЕСТ 4: e2e 380/380 темн.
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllTopics();
  await calendarPage.selectAllCountries();
  await calendarPage.setWidth(380);
  await calendarPage.setHeight(380);
  await calendarPage.copyCode();
});

test('e2e макс. ручн', async ({ page }) => {
  //ТЕСТ 5: e2e макс. ручн. темн.
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
  //ТЕСТ 6: генерация превью
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
  //ТЕСТ 7: кнопка очистить
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllTopics();
  await calendarPage.selectAllCountries();
  await calendarPage.clearSelection(0);
  await calendarPage.clearSelection(1);
});

test('только тема', async ({ page }) => {
  //ТЕСТ 8: Только тематика
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Affiliate'); // или другая тема
  await calendarPage.copyCode();
});

test('только страна', async ({ page }) => {
  //ТЕСТ 9: только страна
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectAllCountries();
  await calendarPage.copyCode();
});

test('скопировать код', async ({ page }) => {
  //ТЕСТ 10: только кнопка скопировать код
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.copyCode();
});

test('сгенерировать превью', async ({ page }) => {
  //ТЕСТ 11: только кнопка сгенерировать превью
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.generatePreview();
});

test('тематика affiliate', async ({ page }) => {
  //ТЕСТ 12: тематика affiliate
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Affiliate');
  await calendarPage.copyCode();
});

test('реклама+пагинация', async ({ page }) => {
  //ТЕСТ 13: реклама и пагинация
  test.setTimeout(180000);
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  const popup = await calendarPage.clickAdvertisement();
  await calendarPage.clickNextPromo();
  await calendarPage.clickNextPromo();
  await calendarPage.clickNextPromo();
});

test('тематика blockchain', async ({ page }) => {
  //ТЕСТ 14 тематика blockchain
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Blockchain');
  await calendarPage.copyCode();
});

test('тематика development', async ({ page }) => {
  //ТЕСТ 15 тематика development
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Development');
  await calendarPage.copyCode();
});

test('тематика igaming', async ({ page }) => {
  //ТЕСТ 16: тематика igaming
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Igaming');
  await calendarPage.copyCode();
});

test('тематика internet marketing', async ({ page }) => {
  //ТЕСТ 17: тематика internet marketing
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Internet Marketing');
  await calendarPage.copyCode();
});

test('тематика seo', async ({ page }) => {
  //ТЕСТ 18: тематика seo
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('SEO');
  await calendarPage.copyCode();
});

test('тематика финтех', async ({ page }) => {
  //ТЕСТ 19: темактика финтех
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.selectTopic('Финтех');
  await calendarPage.copyCode();
});

test('Скорость загрузки страницы', async ({ page }) => {
  //ТЕСТ 20: скорость загрузки страницы
  const startTime = Date.now();
  const calendarPage = new CalendarPage(page);
  await calendarPage.goto();
  await calendarPage.waitForPageLoad();
  const loadTime = Date.now() - startTime;
  expect(loadTime).toBeLessThan(5000);
});