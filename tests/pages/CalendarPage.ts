import { Page } from '@playwright/test';

export class CalendarPage {
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('https://dev.3snet.info/eventswidget/');
  }

  async switchLanguageToEnglish(): Promise<void> {
    await this.page.locator('span').filter({ hasText: 'RU' }).nth(3).click();
    await this.page.getByRole('link', { name: 'English EN' }).click();
  }

  async switchLanguageToRussian(): Promise<void> {
    await this.page.locator('span').filter({ hasText: 'EN' }).nth(4).click();
    await this.page.getByRole('link', { name: 'Русский RU' }).click();
  }

  async selectAllTopics(): Promise<void> {
    await this.page.locator('.checkselect-over').first().click();
    await this.page.getByText('Выбрать все').first().click();
    await this.page.locator('.checkselect-over').first().click();
  }

  async selectAllCountries(): Promise<void> {
    await this.page
      .locator(
        'div:nth-child(2) > .input-item > .checkselect > .checkselect-control > .checkselect-over',
      )
      .click();
    await this.page.getByText('Выбрать все').nth(1).click();
  }

  async selectTopic(topicName: string): Promise<void> {
    await this.page.locator('.checkselect-over').first().click();

    if (
      topicName === 'Affiliate' ||
      topicName === 'Igaming' ||
      topicName === 'SEO' ||
      topicName === 'Финтех'
    ) {
      await this.page.locator('label').filter({ hasText: topicName }).click();
    } else {
      await this.page.getByText(topicName).click();
    }

    await this.page.locator('.checkselect-over').first().click();
  }

  async clickFirstRadio(): Promise<void> {
    await this.page.locator('.radio__square').first().click();
  }

  async clickSecondRadio(): Promise<void> {
    await this.page.locator('div:nth-child(2) > .radio > .radio__square').first().click();
  }

  async clickThirdRadio(): Promise<void> {
    await this.page.locator('label:nth-child(3) > .radio__square').first().click();
  }

  async selectLightTheme(): Promise<void> {
    await this.page.locator('.theme-input > label > .radio__square').first().click();
  }

  async selectDarkTheme(): Promise<void> {
    await this.page.locator('div:nth-child(2) > label:nth-child(3) > .radio__square').click();
  }

  async setWidth(width: number): Promise<void> {
    await this.page.locator('#width-range').fill(width.toString());
  }

  async setHeight(height: number): Promise<void> {
    await this.page.locator('#height-range').fill(height.toString());
  }

  async toggleFullWidth(): Promise<void> {
    await this.page.locator('label').filter({ hasText: 'на всю ширину контейнера' }).click();
  }

  async toggleFullHeight(): Promise<void> {
    await this.page
      .getByText('Ширина, px: на всю ширину контейнера Высота, px: на всю высоту блока')
      .click();
  }

  async copyCode(): Promise<void> {
    await this.page.getByRole('button', { name: 'Скопировать код' }).click();
  }

  async generatePreview(): Promise<void> {
    await this.page.getByRole('button', { name: 'Сгенерировать превью' }).click();
  }

  async clearSelection(index: number): Promise<void> {
    await this.page.getByText('Очистить').nth(index).click();
  }

  async closeActiveDropdown(): Promise<void> {
    await this.page.locator('.checkselect-control.active > .checkselect-over').click();
  }

  async clickAdvertisement(): Promise<Page> {
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'Промокод от OnClickA' }).first().click();
    return await page1Promise;
  }

  async clickNextPromo(): Promise<void> {
    await this.page.getByRole('button', { name: 'Следующий промокод' }).click();
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await this.page.getByText('Шаг 1').waitFor({ state: 'visible' });
  }
}
