import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CalendarLocators } from '../locators/calendar.locators';

export class CalendarPage extends BasePage {
  readonly locators: CalendarLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CalendarLocators(page.locator('body'));
  }

  async goto(): Promise<void> {
    await this.navigateTo('https://dev.3snet.info/eventswidget/');
    // Ждем появления ключевого элемента
    await this.page.locator('text=Шаг 1').waitFor({ state: 'visible', timeout: 15000 });
  }

  // ========== LANGUAGE METHODS ==========
  async switchLanguageToEnglish(): Promise<void> {
    await this.locators.languageToggleRU.click();
    await this.locators.englishOption.first().click(); // Используем .first()
    await this.waitForTimeout(500);
  }

  async switchLanguageToRussian(): Promise<void> {
    await this.locators.languageToggleEN.click();
    await this.locators.russianOption.first().click(); // Используем .first()
    await this.waitForTimeout(500);
  }

  // ========== TOPICS METHODS ==========
  async selectAllTopics(): Promise<void> {
    await this.locators.topicsDropdown.click();
    await this.locators.topicsSelectAll.click();
    await this.locators.topicsDropdown.click();
    await this.waitForTimeout(500);
  }

  async selectTopic(topicName: string): Promise<void> {
    await this.locators.topicsDropdown.click();
    await this.waitForTimeout(300);
    
    // Оригинальная логика
    if (
      topicName === 'Affiliate' ||
      topicName === 'Igaming' ||
      topicName === 'SEO' ||
      topicName === 'Финтех'
    ) {
      await this.page.locator('label').filter({ hasText: topicName }).first().click();
    } else {
      await this.page.getByText(topicName).first().click();
    }
    
    await this.locators.topicsDropdown.click();
    await this.waitForTimeout(500);
  }

  async clearTopics(): Promise<void> {
    const clearBtn = this.page.locator('text=Очистить').first();
    if (await clearBtn.isVisible()) {
      await clearBtn.click();
    }
    await this.waitForTimeout(500);
  }

  // ========== COUNTRIES METHODS ==========
  async selectAllCountries(): Promise<void> {
    await this.locators.countriesDropdown.click();
    await this.locators.countriesSelectAll.click();
    await this.locators.countriesDropdown.click();
    await this.waitForTimeout(500);
  }

  async clearCountries(): Promise<void> {
    const clearBtn = this.page.locator('text=Очистить').nth(1);
    if (await clearBtn.isVisible()) {
      await clearBtn.click();
    }
    await this.waitForTimeout(500);
  }

  // ========== RADIO BUTTONS ==========
  async clickFirstRadio(): Promise<void> {
    await this.locators.firstRadio.click();
    await this.waitForTimeout(300);
  }

  async clickSecondRadio(): Promise<void> {
    await this.locators.secondRadio.click();
    await this.waitForTimeout(300);
  }

  async clickThirdRadio(): Promise<void> {
    await this.locators.thirdRadio.click();
    await this.waitForTimeout(300);
  }

  // ========== THEME METHODS ==========
  async selectLightTheme(): Promise<void> {
    await this.locators.lightTheme.click();
    await this.waitForTimeout(300);
  }

  async selectDarkTheme(): Promise<void> {
    await this.locators.darkTheme.click();
    await this.waitForTimeout(300);
  }

  // ========== SIZE METHODS ==========
  async setWidth(width: number): Promise<void> {
    await this.locators.widthInput.fill(width.toString());
    await this.waitForTimeout(500);
  }

  async setHeight(height: number): Promise<void> {
    await this.locators.heightInput.fill(height.toString());
    await this.waitForTimeout(500);
  }

  async toggleFullWidth(): Promise<void> {
    await this.locators.fullWidthToggle.click();
    await this.waitForTimeout(500);
  }

  // ========== ACTION METHODS ==========
  async copyCode(): Promise<void> {
    await this.locators.copyCodeButton.click();
    await this.waitForTimeout(500);
  }

  async generatePreview(): Promise<void> {
    await this.locators.generatePreviewButton.click();
    await this.page.waitForSelector('iframe', { timeout: 10000 });
  }

  // ========== PROMO METHODS ==========
  async clickAdvertisement(): Promise<void> {
    // Ищем любую промо-ссылку
    const promoLink = this.page.locator('a[href*="promocode"]').first();
    if (await promoLink.isVisible()) {
      await promoLink.click();
    }
    await this.waitForTimeout(2000);
  }

  async clickNextPromo(): Promise<void> {
    const nextBtn = this.page.locator('button:text-is("Следующий промокод")');
    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      await this.waitForTimeout(1000);
    }
  }

  // ========== GETTERS ==========
  async getGeneratedCode(): Promise<string> {
    return await this.locators.codeTextarea.inputValue();
  }

  async isPreviewVisible(): Promise<boolean> {
    return await this.locators.previewIframe.isVisible();
  }
}