
import {test} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BerekenenPage } from '../pages/berekenenPage';
import { AanbodPage } from '../pages/aanbodPage';
import { GegevensPage } from '../pages/gevenesPage';
import { ControlePage } from '../pages/controlePage';




test.describe('SalesFlow', () => {
  let homePage: HomePage;
  let berekenenPage: BerekenenPage;
  let aanbodPage: AanbodPage;
  let gegevensPage: GegevensPage;
 let controlePage: ControlePage;

test(
  'Move in Gas',
  {
    tag: '@regression',
  },
  async ({page}) => {
    homePage = new HomePage(page);
    berekenenPage = new BerekenenPage(page); 
    aanbodPage = new AanbodPage(page);
    gegevensPage = new GegevensPage(page);
    controlePage = new ControlePage(page);

    await homePage.loadStartPageAndAcceptCookies(homePage.url);
    await homePage.completeAddressCalculationTool('9713RD','63');
    await berekenenPage.clickOnlyGas();
    await berekenenPage. clickNextButton();
    await berekenenPage.clickUsageEnter();
    await berekenenPage.clickNextButton();
    await berekenenPage.fillInUsageGas('2000');
    await berekenenPage.clickNextButton();
    await berekenenPage.clickOnMoveIn();
    await berekenenPage.clickNextButton();
    await berekenenPage.clickNextButton();
    await aanbodPage.clickToOffer();
    await aanbodPage.clickToYourData();
    await berekenenPage.clickNextButton();
    await gegevensPage.clickLivingResidence();
    await berekenenPage.clickNextButton();
    await gegevensPage.chooseSalutation('Mevr.');
    await gegevensPage.completeCustomerDate('R','Ruta', 'de', 'Tester','20','05','1980');
    await berekenenPage.clickNextButton();
    await gegevensPage.fillinYourReachData('0698703698','test@eneco.com');
    await gegevensPage.clickOnCheckYourOrder();
    await controlePage.fillInIban('NL13 TEST 0123 4567 89');
     
    


   
  },
   
)}

);

