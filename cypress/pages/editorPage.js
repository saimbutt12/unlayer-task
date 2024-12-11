class EditorPage {
    iframeSelector = '#editor-1 > iframe'; // Selector for the iframe
    headingSelector = '#u_content_heading_1 > div > div'; // Selector for heading element 
    headingTypeSelector = '[id=":r23:"]'; // Selector for dynamic ID
    fontSizeSelector = '[id=":r71:"]'; // Selector for fontsize
    colorPickerSelector = "#color-picker-trigger > div";
    colorSaturationSelector = 'div.sketch-picker > div:nth-child(1) > div > div > div:nth-child(2)'; 
    fontFamilySelector = '#\\:r1u\\: > div > div:nth-child(2) > div > div > button'; 
    dropDownSelector = ' #\\:r2j\\: > span > span';
    exportHtmlSelector = "#root > div > div.sc-gswNZR.hXelMY > button:nth-child(4)";
    // Method to get the iframe's body
    getIframeBody() {
      return cy
        .get(this.iframeSelector)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap);
    }
  
    // Methods to interact with elements inside the iframe
    clickHeading() {
      this.getIframeBody().within(() => {
        cy.log('Click on the Heading Block for interaction');
        cy.get(this.headingSelector).click({force:true});
      });
    }
  
    changeHeadingType() {
      this.getIframeBody().within(() => {
        cy.log('Change heading type from H1 to H3');
        cy.get(this.headingTypeSelector).click();
      });
    }

    changeFontFamily() {
      this.getIframeBody().within(() => {
        cy.log('Change of Font Family through DropDown');
        cy.get(this.fontFamilySelector).click();
        cy.get(this.dropDownSelector).click();
      });
    }


    changeTextColor() {
      this.getIframeBody().within(() => {
        cy.log('Change in text color through Sketch Board');
        cy.get(this.colorPickerSelector).click();
        cy.get(this.colorSaturationSelector, {timeout:10000}).invoke('attr', 'style', 'transform:translate(145px, -2px);').click();
      });
    }

    exportHtmlCode() {
      cy.log('Exporting of the HTML code through Export Button Click');
        cy.get(this.exportHtmlSelector).click();
      
    }
  }
  
    
  export const editorPage = new EditorPage();