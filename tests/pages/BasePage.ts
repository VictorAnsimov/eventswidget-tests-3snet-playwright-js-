import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}

  protected async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    // Убираем networkidle - он может не наступать на этой странице
    await this.page.waitForLoadState('domcontentloaded');
  }

  protected async waitForTimeout(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }

  protected async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({ 
      path: `test-results/screenshots/${name.replace(/[^a-z0-9]/gi, '_')}.png`,
      fullPage: true 
    });
  }
}