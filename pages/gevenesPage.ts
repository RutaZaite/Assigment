import {Page} from '@playwright/test';
import { BasePage } from './basePage';

export class GegevensPage extends BasePage {
  protected page: Page;
  protected basePage: BasePage;
  
  readonly LIVING_RESIDENCE: string = '[data-label="Ja"]'
  readonly SALUTATION: string = '[name="salutation"]';
  readonly FIRST_NAME: string = '[name="firstName"]';
  readonly INITIALS_INPUT: string = 'input[name="initials"]';
  readonly SURNAME_PREPOSITION_INPUT: string = 'input[name="surnamePreposition"]';
  readonly SURNAME_INPUT: string = 'input[name="surname"]';
  readonly PHONE_NUMBER_INPUT: string = 'input[name="phoneNumber"]';
  readonly EMAIL_ADDRESS_INPUT: string = 'input[name="emailAddress"]';
  readonly DAY_INPUT = 'input[name="day"]';
  readonly MONTH_INPUT = 'input[name="month"]';
  readonly YEAR_INPUT = 'input[name="year"]';
  readonly CHECK_YOUR_ORDER_BUTTON = 'button[data-label="Controleer je bestelling"][type="submit"]';
  

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.basePage = new BasePage(page);
  }
  public async clickLivingResidence(): Promise<void> {
    await this.page.click(this.LIVING_RESIDENCE);
  } 
 
  public async chooseSalutation(option: string): Promise<void> {
    await this.page.click(`[data-label="${option}"]`);
  }

  public completeCustomerDate = async (
    initials: string,
    firstName: string,
    surnamePreposition: string,
    surname: string,
    day: string,
    month: string,
    year: string,
  ): Promise<void> => {
    await this.fillElement (this.FIRST_NAME,firstName)
    await this.fillElement(this.INITIALS_INPUT, initials);
    await this.fillElement(this.SURNAME_PREPOSITION_INPUT, surnamePreposition);
    await this.fillElement(this.SURNAME_INPUT, surname);
    await this.fillElement(this.DAY_INPUT, day);
    await this.fillElement(this.MONTH_INPUT, month);
    await this.fillElement(this.YEAR_INPUT,year);
  };
  public fillinYourReachData = async (
    phoneNumber: string,
    emailAddress: string,
    
  ): Promise<void> => {
    await this.fillElement (this.PHONE_NUMBER_INPUT,phoneNumber)
    await this.fillElement(this.EMAIL_ADDRESS_INPUT, emailAddress);
     };

     public async clickOnCheckYourOrder(): Promise<void> {
      await this.page.click(this.CHECK_YOUR_ORDER_BUTTON);
    } 
}
