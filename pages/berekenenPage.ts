import {Page} from '@playwright/test';
import { BasePage } from './basePage';


export class BerekenenPage extends BasePage {
  protected page: Page;
  protected basePage: BasePage;
  public url: string;

  readonly BEREKENEN_URL: string = 'duurzame-energie/bestellen2/energiekeuze/';
  readonly PRODUCT_SELECTION: string = '[data-label="Alleen gas"]'
  readonly NEXT_BUTTON: string = 'button[data-label="Volgende"]';
  readonly USAGE_GAS_INPUT: string = 'input[name="usageGas"]';
  readonly USAGE_ENTER: string = '[data-label="Ja, ik vul mijn verbruik zelf in"]';
  readonly MOVE_IN: string = '[data-label="Ja, ik ga verhuizen"]';
  readonly TO_OFFER: string = '[data-label="Naar je aanbod"]';
 ;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.url =this.url = 'https://www.eneco.nl/'
    this.basePage = new BasePage(page);
  }
  public async clickOnlyGas(): Promise<void> {
    await this.page.click(this.PRODUCT_SELECTION);
  }
  public async clickUsageEnter(): Promise<void> {
    await this.page.click(this.USAGE_ENTER);
  }
  public async clickOnMoveIn(): Promise<void> {
    await this.page.click(this.MOVE_IN);
  }
 
  public async clickNextButton(): Promise<void> {
    const initialUrl = this.page.url();
    await this.basePage.retryUntilTimeout(
      async () => {
      
        await this.page.waitForSelector(this.NEXT_BUTTON, {state: 'visible'});

    
        const nextButton = await this.page.$(this.NEXT_BUTTON);
        if (!nextButton) {
         
          throw new Error('Next button not found');
        }

        const isDisabled = await nextButton.evaluate((button: Element) => (button as HTMLButtonElement).disabled);
        if (isDisabled) {
         
          throw new Error('Next button is disabled');
        }

        
        await this.clickElement(this.NEXT_BUTTON);
        await this.page.waitForURL((url: URL) => url.href !== initialUrl, {
          timeout: 10000,
        });

        const newUrl = this.page.url();
        if (initialUrl === newUrl) {
          
          throw new Error('URL did not change after clicking the Next button');
        }
      },
      15000,
      500,
    );
  }

  
  public async fillInUsageGas(usageGas: string): Promise<void> {
    await this.fillElement(this.USAGE_GAS_INPUT, usageGas);
  }


}
