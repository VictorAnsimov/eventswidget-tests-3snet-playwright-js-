import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CalendarLocators } from '../locators/calendar.locators';

//Можешь это вынести, если будет переиспользовано, если нет то пох.
type LanguageCode = 'en' | 'ru';
type Theme = 'light' | 'dark';
type RadioOtion = 1 | 2 | 3;

export class CalendarPage extends BasePage {
  readonly locators: CalendarLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CalendarLocators(page.locator('body'));
  }

  async goto(): Promise<void> {
    await this.navigateTo('https://dev.3snet.info/eventswidget/');
    await this.page.locator('text=Шаг 1').waitFor({ state: 'visible', timeout: 15000 });
  }

  // ========== HELPER METHODS ==========
  private async clickAndWait(locator: any, delay = 300): Promise<void> {
    await locator.click();
    await this.waitForTimeout(delay);
  }

  private async safeClick(locator: any, delay = 300): Promise<void> {
    if (await locator.isVisible()) {
      await locator.click();
      await this.waitForTimeout(delay);
    }
  }

  // ========== LANGUAGE METHODS ==========
  async switchLanguage(language: LanguageCode): Promise<void> {
    const toggle =
      language === 'en' ? this.locators.languageToggleRU : this.locators.languageToggleEN;
    const option = language === 'en' ? this.locators.englishOption : this.locators.russianOption;

    await this.clickAndWait(toggle);
    await this.clickAndWait(option.first());
  }

  // Для обратной совместимости с тестами
  async switchLanguageToEnglish(): Promise<void> {
    await this.switchLanguage('en');
  }
  async switchLanguageToRussian(): Promise<void> {
    await this.switchLanguage('ru');
  }

  // ========== TOPICS METHODS ==========
  async selectAllTopics(): Promise<void> {
    await this.clickAndWait(this.locators.topicsDropdown);
    await this.clickAndWait(this.locators.topicsSelectAll);
    await this.clickAndWait(this.locators.topicsDropdown);
  }

  async selectTopic(topicName: string): Promise<void> {
    await this.clickAndWait(this.locators.topicsDropdown);

    const selector = ['Affiliate', 'Igaming', 'SEO', 'Финтех'].includes(topicName)
      ? this.page.locator('label').filter({ hasText: topicName })
      : this.page.getByText(topicName);

    await this.clickAndWait(selector.first());
    await this.clickAndWait(this.locators.topicsDropdown);
  }

  async clearTopics(): Promise<void> {
    await this.safeClick(this.page.locator('text=Очистить').first(), 500);
  }

  // ========== COUNTRIES METHODS ==========
  async selectAllCountries(): Promise<void> {
    await this.clickAndWait(this.locators.countriesDropdown);
    await this.clickAndWait(this.locators.countriesSelectAll);
    await this.clickAndWait(this.locators.countriesDropdown);
  }

  async clearCountries(): Promise<void> {
    await this.safeClick(this.page.locator('text=Очистить').nth(1), 500);
  }

  // ========== RADIO BUTTONS ==========
  async clickRadio(option: RadioOtion): Promise<void> {
    const buttons = [this.locators.firstRadio, this.locators.secondRadio, this.locators.thirdRadio];
    await this.clickAndWait(buttons[option - 1]);
  }

  // Для обратной совместимости
  async clickFirstRadio(): Promise<void> {
    await this.clickRadio(1);
  }
  async clickSecondRadio(): Promise<void> {
    await this.clickRadio(2);
  }
  async clickThirdRadio(): Promise<void> {
    await this.clickRadio(3);
  }

  // ========== THEME METHODS ==========
  async selectTheme(theme: Theme): Promise<void> {
    const selector = theme === 'light' ? this.locators.lightTheme : this.locators.darkTheme;
    await this.clickAndWait(selector);
  }

  // Для обратной совместимости
  async selectLightTheme(): Promise<void> {
    await this.selectTheme('light');
  }
  async selectDarkTheme(): Promise<void> {
    await this.selectTheme('dark');
  }

  // ========== SIZE METHODS ==========
  async setSize(width?: number, height?: number): Promise<void> {
    if (width !== undefined) {
      await this.locators.widthInput.fill(width.toString());
    }
    if (height !== undefined) {
      await this.locators.heightInput.fill(height.toString());
    }
    if (width !== undefined || height !== undefined) {
      await this.waitForTimeout(500);
    }
  }

  // Для обратной совместимости
  async setWidth(width: number): Promise<void> {
    await this.setSize(width);
  }
  async setHeight(height: number): Promise<void> {
    await this.setSize(undefined, height);
  }

  async toggleFullWidth(): Promise<void> {
    await this.clickAndWait(this.locators.fullWidthToggle, 500);
  }

  // ========== ACTION METHODS ==========
  async copyCode(): Promise<void> {
    await this.clickAndWait(this.locators.copyCodeButton, 500);
  }

  async generatePreview(): Promise<void> {
    await this.locators.generatePreviewButton.click();
    await this.page.waitForSelector('iframe', { timeout: 10000 });
  }

  // ========== PROMO METHODS ==========
  async clickAdvertisement(): Promise<void> {
    const promoLink = this.page.locator('a[href*="promocode"]').first();
    await this.safeClick(promoLink, 2000);
  }

  async clickNextPromo(): Promise<void> {
    const nextBtn = this.page.locator('button:text-is("Следующий промокод")');
    await this.safeClick(nextBtn, 1000);
  }

  // ========== GETTERS ==========
  async getGeneratedCode(): Promise<string> {
    return await this.locators.codeTextarea.inputValue();
  }

  async isPreviewVisible(): Promise<boolean> {
    return await this.locators.previewIframe.isVisible();
  }
}
