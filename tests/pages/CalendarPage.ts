import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CalendarLocators } from '../locators/calendar.locators';

type LanguageCode = 'en' | 'ru';
type Theme = 'light' | 'dark';
type RadioOption = 1 | 2 | 3;

export class CalendarPage extends BasePage {
  readonly locators: CalendarLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CalendarLocators(page.locator('body'));
  }

  async goto(): Promise<void> {
    await this.navigateTo('https://dev.3snet.info/eventswidget/');
    await this.page.locator('text=Шаг 1').waitFor({ state: 'visible', timeout: 15_000 });
  }

  // ========== HELPER METHODS ==========

  private async clickAndWait(locator: Locator): Promise<void> {
    await locator.click();
    await this.smallTimeout();
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
    // лучше через локатор из CalendarLocators, а не голый text
    await this.clickAndWait(this.locators.topicsClear);
  }

  // ========== COUNTRIES METHODS ==========

  async selectAllCountries(): Promise<void> {
    await this.clickAndWait(this.locators.countriesDropdown);
    await this.clickAndWait(this.locators.countriesSelectAll);
    await this.clickAndWait(this.locators.countriesDropdown);
  }

  async clearCountries(): Promise<void> {
    await this.clickAndWait(this.locators.countriesClear);
  }

  // ========== RADIO BUTTONS ==========

  async clickRadio(option: RadioOption): Promise<void> {
    const buttons: Record<RadioOption, Locator> = {
      1: this.locators.firstRadio,
      2: this.locators.secondRadio,
      3: this.locators.thirdRadio,
    };

    await this.clickAndWait(buttons[option]);
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
      await this.smallTimeout(500);
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
    await this.clickAndWait(this.locators.fullWidthToggle);
  }

  // ========== ACTION METHODS ==========

  async copyCode(): Promise<void> {
    await this.clickAndWait(this.locators.copyCodeButton);
  }

  async generatePreview(): Promise<void> {
    await this.locators.generatePreviewButton.click();
    await this.page.waitForSelector('iframe', { timeout: 10_000 });
  }

  // ========== PROMO METHODS ==========

  async clickAdvertisement(): Promise<void> {
    const promoLink = this.page.locator('a[href*="promocode"]').first();
    await this.clickAndWait(promoLink);
  }

  async clickNextPromo(): Promise<void> {
    const nextBtn = this.page.locator('button:text-is("Следующий промокод")');
    await this.clickAndWait(nextBtn);
  }

  // ========== GETTERS ==========

  async getGeneratedCode(): Promise<string> {
    return this.locators.codeTextarea.inputValue();
  }

  async isPreviewVisible(): Promise<boolean> {
    return this.locators.previewIframe.isVisible();
  }
}
