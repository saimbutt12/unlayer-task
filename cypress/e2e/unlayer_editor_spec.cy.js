import { editorPage } from '../pages/editorPage';

describe('Template Spec', () => {
  it('interacts with an iframe content and change major properties of text', () => {
    // Visit the base url page
    cy.visit('/');

    editorPage.clickHeading();
    editorPage.changeHeadingType();
    editorPage.changeFontFamily();
    editorPage.changeTextColor();
    editorPage.exportHtmlCode();

  });

});