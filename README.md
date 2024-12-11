
# Cypress Automation Testing for Editor Interaction

This project demonstrates the use of Cypress for testing an editor page. The test interacts with the iframe content and performs actions like changing the heading type, font family, text color, and exporting HTML code.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Code Explanation](#code-explanation)
- [Additional Resources](#additional-resources)

---

## Prerequisites

Before running the tests, ensure that the following tools are installed:

- [Node.js](https://nodejs.org/en/download/) (Recommended version: LTS)
- [Cypress](https://www.cypress.io/)

### Install Node.js
You can download and install Node.js from the official website: [Node.js Download](https://nodejs.org/en/download/).

After installation, verify the version by running the following command:

```bash
node -v
```

### Install Cypress

You can install Cypress using npm (Node's package manager). Run the following command in your terminal/command prompt:

```bash
npm install cypress --save-dev
```

This will install Cypress as a dev dependency in your project.

---

## Installation

1. **Clone the repository**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Install dependencies**

   Navigate to the project directory and install the dependencies:

   ```bash
   cd your-repository
   npm install
   ```

3. **Open Cypress**

   Once the dependencies are installed, you can open the Cypress Test Runner with the following command:

   ```bash
   npx cypress open
   ```

   This will open the Cypress UI where you can run your tests.

---

## Running the Tests

After running the Cypress Test Runner (`npx cypress open`), you can select and run the tests available in the **Integration** folder.

To run the tests in headless mode (without UI), use the following command:

```bash
npx cypress run
```

This will run all the tests in the **Integration** folder and output the results in the terminal.

---

## Code Explanation

The code for interacting with the editor is written inside the `editorPage` object. Below is a detailed breakdown of the test script and its methods:

### `describe('Editor Interaction', () => {...})`
This is the Cypress test suite where the individual tests are grouped. In this case, the suite is testing "Editor Interaction".

```js
it('interaction with iframe Content based Property Changes', () => {
  // Visit the base URL
  cy.visit('/');
  
  // Interact with the page using editorPage methods
  editorPage.clickHeading();
  editorPage.changeHeadingType();
  editorPage.changeFontFamily();
  editorPage.changeTextColor();
  editorPage.exportHtmlCode();
});
```

- **cy.visit('/')**: This command navigates to the base URL of the app where the editor is located.
- The test then uses various methods from the `editorPage` object to interact with elements on the page (e.g., clicking on the heading, changing font family, etc.).

### `EditorPage` Class

This class encapsulates methods to interact with the elements inside the editor iframe. The following selectors and methods are defined:

#### Selectors

- **iframeSelector**: Selector for the iframe that contains the editor content.
- **headingSelector**: Selector for the heading element inside the iframe.
- **headingTypeSelector**: Selector for the element to change the heading type (H1 to H3).
- **fontSizeSelector**: Selector for the font size change element (not used directly in the test but can be extended).
- **colorPickerSelector**: Selector for the color picker.
- **fontFamilySelector**: Selector for the font family dropdown.
- **dropDownSelector**: Selector for the dropdown menu inside the font family picker.
- **exportHtmlSelector**: Selector for the "Export HTML" button.

#### `getIframeBody()`

```js
getIframeBody() {
  return cy
    .get(this.iframeSelector)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
}
```

This method helps to access and interact with the iframe's body. It ensures that the iframe content is not empty and then wraps it for further interaction.

#### Interaction Methods

1. **clickHeading()**
   This method clicks on the heading block inside the iframe.

   ```js
   clickHeading() {
     this.getIframeBody().within(() => {
       cy.get(this.headingSelector).click({force:true});
     });
   }
   ```

2. **changeHeadingType()**
   This method changes the heading type from H1 to H3.

   ```js
   changeHeadingType() {
     this.getIframeBody().within(() => {
       cy.get(this.headingTypeSelector).click();
     });
   }
   ```

3. **changeFontFamily()**
   This method clicks on the font family dropdown and changes the font family.

   ```js
   changeFontFamily() {
     this.getIframeBody().within(() => {
       cy.get(this.fontFamilySelector).click();
       cy.get(this.dropDownSelector).click();
     });
   }
   ```

4. **changeTextColor()**
   This method opens the color picker and selects a specific color using the `colorSaturationSelector`.

   ```js
   changeTextColor() {
     this.getIframeBody().within(() => {
       cy.get(this.colorPickerSelector).click();
       cy.get(this.colorSaturationSelector, {timeout:10000}).invoke('attr', 'style', 'transform:translate(145px, -2px);').click();
     });
   }
   ```

5. **exportHtmlCode()**
   This method simulates clicking the export HTML button.

   ```js
   exportHtmlCode() {
     cy.get(this.exportHtmlSelector).click();
   }
   ```

### Exporting the `editorPage` Object

Finally, the `EditorPage` class is exported as an object so it can be used across multiple tests.

```js
export const editorPage = new EditorPage();
```

---

## Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [JavaScript and Cypress Best Practices](https://www.cypress.io/blog/)

---

 You should be able to run the tests and modify them as needed for your project.
