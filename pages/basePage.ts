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

  async verifyUrl(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async clickElement(locatorSelector: string): Promise<void> {
    const element = this.page.locator(locatorSelector);
    await this.waitForElementToBeClickable(element);
    await element.click();
  }

  async clickLocator(locator: Locator): Promise<void> {
    await this.waitForElementToBeClickable(locator);
    await locator.click();
  }

  async clickAndVerifyNavigation(clickSelector: string, expectedUrl: string): Promise<void> {
    const element = this.page.locator(clickSelector);
    await this.waitForElementToBeClickable(element);
    await element.click();
    await this.verifyUrl(expectedUrl);
  }

  async waitForElementToBeClickable(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
    await expect(locator).toBeEnabled();
  }

  async waitForElementWithText(locatorSelector: string, text: string, timeout?: number): Promise<void> {
    await this.page.locator(locatorSelector, {hasText: text}).waitFor({state: 'visible', timeout: timeout});
  }

  async waitForText(text: string | RegExp, timeout?: number): Promise<void> {
    await this.retryUntilTimeout(
      async () => {
        await this.page.getByText(text).waitFor({state: 'visible'});
      },
      timeout,
      500,
    );
  }
  async elementIsVisible(locatorSelector: string): Promise<void> {
    await expect(this.page.locator(locatorSelector)).toBeVisible();
  }

  async elementIsVisibleWithText(locatorSelector: string, text: string, index: number = 0): Promise<void> {
    const locator = this.page.locator(locatorSelector).filter({hasText: text}).nth(index);
    await expect(locator).toBeVisible();
  }

  async elementIsVisibleWithLocator(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async elementIsNotVisibleWithLocator(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
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