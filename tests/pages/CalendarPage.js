class CalendarPage {
  constructor(page) {
    this.page = page;
  }

  // НЕ ИСПОЛЬЗУЙТЕ this.selectors! Просто повторяйте селекторы из тестов
  async goto() {
    await this.page.goto('https://dev.3snet.info/eventswidget/');
  }

  async switchLanguageToEnglish() {
    await this.page.locator('span').filter({ hasText: 'RU' }).nth(3).click();
    await this.page.getByRole('link', { name: 'English EN' }).click();
  }

  async switchLanguageToRussian() {
    await this.page.locator('span').filter({ hasText: 'EN' }).nth(4).click();
    await this.page.getByRole('link', { name: 'Русский RU' }).click();
  }

  async selectAllTopics() {
    await this.page.locator('.checkselect-over').first().click();
    await this.page.getByText('Выбрать все').first().click();
    await this.page.locator('.checkselect-over').first().click();
  }

  async selectAllCountries() {
    await this.page.locator('div:nth-child(2) > .input-item > .checkselect > .checkselect-control > .checkselect-over').click();
    await this.page.getByText('Выбрать все').nth(1).click();
  }

  async selectTopic(topicName) {
    await this.page.locator('.checkselect-over').first().click();
    
    // Используем разные селекторы для разных тем
    if (topicName === 'Affiliate' || topicName === 'Igaming' || topicName === 'SEO' || topicName === 'Финтех') {
      await this.page.locator('label').filter({ hasText: topicName }).click();
    } else {
      await this.page.getByText(topicName).click();
    }
    
    await this.page.locator('.checkselect-over').first().click();
  }

  async clickFirstRadio() {
    await this.page.locator('.radio__square').first().click();
  }

  async clickSecondRadio() {
    await this.page.locator('div:nth-child(2) > .radio > .radio__square').first().click();
  }

  async clickThirdRadio() {
    await this.page.locator('label:nth-child(3) > .radio__square').first().click();
  }

  async selectLightTheme() {
    await this.page.locator('.theme-input > label > .radio__square').first().click();
  }

  async selectDarkTheme() {
    await this.page.locator('div:nth-child(2) > label:nth-child(3) > .radio__square').click();
  }

  async setWidth(width) {
    await this.page.locator('#width-range').fill(width.toString());
  }

  async setHeight(height) {
    await this.page.locator('#height-range').fill(height.toString());
  }

  async toggleFullWidth() {
    await this.page.locator('label').filter({ hasText: 'на всю ширину контейнера' }).click();
  }

  async toggleFullHeight() {
    await this.page.getByText('Ширина, px: на всю ширину контейнера Высота, px: на всю высоту блока').click();
  }

  async copyCode() {
    await this.page.getByRole('button', { name: 'Скопировать код' }).click();
  }

  async generatePreview() {
    await this.page.getByRole('button', { name: 'Сгенерировать превью' }).click();
  }

  async clearSelection(index) {
    await this.page.getByText('Очистить').nth(index).click();
  }

  async closeActiveDropdown() {
    await this.page.locator('.checkselect-control.active > .checkselect-over').click();
  }

  async clickAdvertisement() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'Промокод от OnClickA' }).first().click();
    return await page1Promise;
  }

  async clickNextPromo() {
    await this.page.getByRole('button', { name: 'Следующий промокод' }).click();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
    await this.page.getByText('Шаг 1').waitFor({ state: 'visible' });
  }
}

module.exports = { CalendarPage };