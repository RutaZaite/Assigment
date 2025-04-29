import {expect, Locator, Page} from '@playwright/test';

export class BasePage {
  protected page: Page;
  protected baseUrl?: string;
  readonly BUTTON_ACCEPT_COOKIE: string = 'button[data-label="Accepteren"]';

  constructor(page: Page, baseUrl?: string) {
    this.page = page;
    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
  }

  async clickElement(locatorSelector: string): Promise<void> {
    const element = this.page.locator(locatorSelector);
    await this.waitForElementToBeClickable(element);
    await element.click();
  }

  async waitForElementWithText(locatorSelector: string, text: string, timeout?: number): Promise<void> {
    await this.page.locator(locatorSelector, {hasText: text}).waitFor({state: 'visible', timeout: timeout});
  }

  async waitForElementToBeClickable(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
    await expect(locator).toBeEnabled();
  }


  async fillElement(locatorSelector: string, text: string): Promise<void> {
    await this.page.fill(locatorSelector, text);
  }

  async acceptCookies(): Promise<void> {
    await this.clickElement(this.BUTTON_ACCEPT_COOKIE);
  }

  async retryUntilTimeout(
    action: () => Promise<void>,
    timeoutMs: number = 10000,
    intervalMs: number = 500,
  ): Promise<void> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeoutMs) {
      try {
        await action();
        return;
      } catch (error) {
        if (Date.now() - startTime >= timeoutMs) {
          throw new Error(`Action did not succeed within ${timeoutMs}ms: ${error as string}`);
        }
        await new Promise(resolve => setTimeout(resolve, intervalMs));
      }
    }
  }
}