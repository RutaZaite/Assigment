 # SalesFlow Tests

 This project contains automated tests for the SalesFlow application, written with Playwright.

 ## Installation

 1. Clone the repository:
     ```bash
     git clone https://github.com/RutaZaite/Eneco-QA-Assigment-Ruta.git
     ```
 2. Install the required dependencies:
     ```bash
     npm install
     ```

 ## Usage

 To run the tests, use:
 ```bash
 npx playwright test --ui
 ```

## Structure
### The tests are organized into different page objects:

**BasePage**: The BasePage class provides a foundation for all page objects in the project. It encapsulates common actions and utilities to promote code reuse and consistency.
Key Features:
Element interactions: Click, fill, and wait for elements by CSS selectors.
Cookie handling: Automatically accepts cookie banners.
Robust actions: Includes a retryUntilTimeout method to retry actions until they succeed or timeout.
Smart waiting: Ensures elements are visible and enabled before interacting.

**HomePage**: The HomePage class provides a foundation for all page objects in the project. It encapsulates common actions and utilities to promote code reuse and consistency. It loads the start page and accepts cookies, and completes the address calculation tool by filling in the postal code and house number, then clicking the calculation button.
- Key Features:
Element interactions: Click, fill, and wait for elements.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting.
- Functions:
loadStartPageAndAcceptCookies(startPageUrl: string): Promise<void>: Loads the start page and accepts cookies.
completeAddressCalculationTool(postalCode: string, houseNmr: string): Promise<void>: Completes the address calculation tool by filling in the postal code and house number, then clicking the calculation button.<br>


**CalculatePage**: The BerekenenPage class is part of the automated testing suite for the Eneco website, written with Playwright. It extends the BasePage class and provides methods to interact with the calculation page of the Eneco website.
- Key Features:
Element interactions: Click, fill, and wait for elements.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting.
- Functions:
clickOnlyGas(): Promise<void>: Clicks the "Alleen gas" product selection.
clickUsageEnter(): Promise<void>: Clicks the "Ja, ik vul mijn verbruik zelf in" option.
clickOnMoveIn(): Promise<void>: Clicks the "Ja, ik ga verhuizen" option.
clickNextButton(): Promise<void>: Clicks the next button and waits for the URL to change.
fillInUsageGas(usageGas: string): Promise<void>: Fills in the gas usage input.<br>


**OfferPage**:The AanbodPage class provides a foundation for all page objects in the project, promoting code reuse and consistency.
- Key Features:
Element interactions: Click elements by CSS selectors.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting
- Functions:
clickToOffer(): Promise<void>: Clicks the "Naar je aanbod" button.
clickToYourData(): Promise<void>: Clicks the "Naar je gegevens" button.<br>

**DataPage**: The GegevensPage class provides a foundation for all page objects in the project, promoting code reuse and consistency.
- Key Features:
Element interactions: Click, fill, and wait for elements.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting.
- Functions:
clickLivingResidence(): Promise<void>: Clicks the "Ja" button for living residence.
chooseSalutation(option: string): Promise<void>: Selects the salutation option.
completeCustomerDate(initials: string, firstName: string, surnamePreposition: string, surname: string, day: string, month: string, year: string): Promise<void>: Fills in customer details.
fillinYourReachData(phoneNumber: string, emailAddress: string): Promise<void>: Fills in contact details.
clickOnCheckYourOrder(): Promise<void>: Clicks the "Controleer je bestelling" button.<br>

**ControlPage**:The ControlePage class provides a foundation for all page objects in the project, promoting code reuse and consistency.
- Key Features:
Element interactions: Click, fill, and wait for elements.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting.
- Functions:
fillInIban(iban: string): Promise<void>: Fills in the IBAN input field.<br>


## Tests
### SalesFlow "Move in Gas"
The SalesFlow suite contains tests that simulate the entire sales flow.


## Testplan 
Assignments 1 and 2 can be found in 
[Testplan](./Testplan/Testplan.md)

## Configuration
Ensure you have the following configurations set up:

- Node.js installed (version 14 or higher).
- Playwright installed via npm.
- Proper permissions and access to the Eneco website for testing.

## Dependencies
- @playwright/test: Playwright testing framework.
- Other dependencies as listed in package.json.

## Prerequisites
- Internet access to reach the Eneco website.
- Valid credentials if authentication is required for certain tests.