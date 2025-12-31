import { Locator } from '@playwright/test';

export class CalendarLocators {
  constructor(private page: Locator) {}

  // Header and language
  get languageToggleRU() {
    return this.page.locator('span').filter({ hasText: 'RU' }).nth(3);
  }
  get languageToggleEN() {
    return this.page.locator('span').filter({ hasText: 'EN' }).nth(4);
  }
  get englishOption() {
    return this.page.locator('[data-locale="en"]');
  }
  get russianOption() {
    return this.page.locator('[data-locale="ru"]');
  }

  // Steps (оригинальные тексты)
  get step1() {
    return this.page.locator('text=Шаг 1');
  }
  get copyCodeButton() {
    return this.page.locator('button:has-text("Скопировать код")');
  }
  get generatePreviewButton() {
    return this.page.locator('button:has-text("Сгенерировать превью")');
  }

  // Topics - оригинальные рабочие локаторы
  get topicsDropdown() {
    return this.page.locator('.checkselect-over').first();
  }
  get topicsSelectAll() {
    return this.page.locator('text=Выбрать все').first();
  }
  get topicsClear() {
    return this.page.locator('text=Очистить').first();
  }

  // Countries - оригинальные рабочие локаторы
  get countriesDropdown() {
    return this.page.locator(
      'div:nth-child(2) > .input-item > .checkselect > .checkselect-control > .checkselect-over',
    );
  }
  get countriesSelectAll() {
    return this.page.locator('text=Выбрать все').nth(1);
  }
  get countriesClear() {
    return this.page.locator('text=Очистить').nth(1);
  }

  // Radio buttons - оригинальные локаторы
  get firstRadio() {
    return this.page.locator('.radio__square').first();
  }
  get secondRadio() {
    return this.page.locator('div:nth-child(2) > .radio > .radio__square').first();
  }
  get thirdRadio() {
    return this.page.locator('label:nth-child(3) > .radio__square').first();
  }

  // Theme - оригинальные локаторы
  get lightTheme() {
    return this.page.locator('.theme-input > label > .radio__square').first();
  }
  get darkTheme() {
    return this.page.locator('div:nth-child(2) > label:nth-child(3) > .radio__square');
  }

  // Size controls - оригинальные локаторы
  get widthInput() {
    return this.page.locator('#width-range');
  }
  get heightInput() {
    return this.page.locator('#height-range');
  }
  get fullWidthToggle() {
    return this.page.locator('label:has-text("на всю ширину контейнера")');
  }

  // Advertisement - оригинальные локаторы
  get advertisementLink() {
    return this.page.locator('a:has-text("Промокод от OnClickA")').first();
  }
  get nextPromoButton() {
    return this.page.locator('button:has-text("Следующий промокод")');
  }

  // Code output
  get codeTextarea() {
    return this.page.locator('textarea');
  }

  // Preview
  get previewIframe() {
    return this.page.locator('iframe');
  }

  // Utility
  get closeDropdown() {
    return this.page.locator('.checkselect-control.active > .checkselect-over');
  }
}
