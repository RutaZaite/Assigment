import {Page} from '@playwright/test';
import { BasePage } from './basePage.ts';


export class HomePage extends BasePage {
  protected page: Page;
  protected basePage: BasePage;
  public url: string;
  readonly INPUT_POSTAL_CODE: string = 'input[name="postalCode"]';
  readonly INPUT_HOUSE_NMR: string = 'input[name="houseNumber"]';
  readonly OUTPUT_ADDRESS: string = 'div[data-scope="AddressFinder"] span[class*="size-BodyS sparky-text"]';
  readonly BUTTON_BEREKEN_MAANDBEDRAG: string = 'button[data-label="Bereken je maandbedrag"]';


  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url = 'https://www.eneco.nl/'
    this.basePage = new BasePage(page);
  }

  public loadStartPageAndAcceptCookies = async (startPageUrl: string): Promise<void> => {
    await this.page.context().clearCookies();
    await this.page.context().clearPermissions();
    await this.page.goto(startPageUrl);
    await this.basePage.acceptCookies();
  };
  public completeAddressCalculationTool = async (postalCode: string, houseNmr: string): Promise<void> => {
    await this.fillElement(this.INPUT_POSTAL_CODE, postalCode);
    await this.fillElement(this.INPUT_HOUSE_NMR, houseNmr);
    await this.waitForElementWithText(this.OUTPUT_ADDRESS, `${houseNmr}, ${postalCode}`);
    await this.clickElement(this.BUTTON_BEREKEN_MAANDBEDRAG);
  };

  
}
