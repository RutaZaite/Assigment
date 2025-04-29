import {Page} from '@playwright/test';
import { BasePage } from './basePage';

export class AanbodPage extends BasePage {
    protected page: Page;
    protected basePage: BasePage;
  
   
    readonly TO_OFFER: string = '[data-label="Naar je aanbod"]';
    readonly TO_YOUR_DATA : string= '[data-label="Naar je gegevens"]'
   ;
  
    constructor(page: Page) {
      super(page);
      this.page = page;
      this.basePage = new BasePage(page);
    }
    public async clickToOffer(): Promise<void> {
        await this.page.click(this.TO_OFFER);
      } 
      public async clickToYourData(): Promise<void> {
        await this.page.click(this.TO_YOUR_DATA);
      } 
}