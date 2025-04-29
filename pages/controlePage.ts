import {Page} from '@playwright/test';
import { BasePage } from './basePage';

export class ControlePage extends BasePage {
    protected page: Page;
    protected basePage: BasePage;
  
    readonly IBAN_INPUT: string = 'input[name="iban"]';
   
    
     constructor(page: Page) {
      super(page);
      this.page = page;
      this.basePage = new BasePage(page);
    }
    public async fillInIban(iban: string): Promise<void> {
      await this.page.fill(this.IBAN_INPUT, iban);
    }
   
    
}