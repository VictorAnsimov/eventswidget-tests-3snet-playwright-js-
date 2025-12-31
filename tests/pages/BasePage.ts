import { Page } from '@playwright/test';

const SMALL_TIMEOUT = 300;
const LARGE_TIMEOUT = 10000;

export abstract class BasePage {
  constructor(protected page: Page) {}

  protected async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded', {
      timeout: SMALL_TIMEOUT,
    });
  }

  protected async smallTimeout(ms: number = SMALL_TIMEOUT): Promise<void> {
    await this.page.waitForTimeout(ms);
  }

  protected async waitForElement(selector: string, timeout = LARGE_TIMEOUT): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'visible', timeout });
  }

  protected async takeScreenshot(name: string): Promise<void> {
    const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    await this.page.screenshot({
      path: `test-results/screenshots/${safeName}_${Date.now()}.png`,
      fullPage: true,
    });
  }
}
