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

**HomePage**: The HomePage class provides a foundation for all page objects in the project. It encapsulates common actions and utilities to promote code reuse and consistency.Loads the start page and accepts cookies.Completes the address calculation tool by filling in the postal code and house number, then clicking the calculation button.
Key Features:
Element interactions: Click, fill, and wait for elements.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting.<br>


**CalculatePage**: This class, BerekenenPage, is part of the automated testing suite for the Eneco website, written with Playwright. It extends the BasePage class and provides methods to interact with the calculation page of the Eneco website.The BerekenenPage class provides a foundation for all page objects in the project, promoting code reuse and consistency.
Key Features:
Element interactions: Click, fill, and wait for elements.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting.<br>


**OfferPage**:The AanbodPage class provides a foundation for all page objects in the project, promoting code reuse and consistency.
Key Features:
Element interactions: Click elements by CSS selectors.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting<br>

**DataPage**: The GegevensPage class provides a foundation for all page objects in the project, promoting code reuse and consistency.
Key Features:
Element interactions: Click, fill, and wait for elements.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting.<br>

**ControlPage**:The ControlePage class provides a foundation for all page objects in the project, promoting code reuse and consistency.
Key Features:
Element interactions: Click, fill, and wait for elements.
Cookie handling: Automatically accepts cookies.
Smart waiting: Ensures elements are ready before interacting.<br>



## Tests
### SalesFlow "Move in Gas"
The SalesFlow suite contains tests that simulate the entire sales flow.


## Testplan 
Assignments 1 and 2 can be found in Testplan Testplan/Testplan.xlsx

