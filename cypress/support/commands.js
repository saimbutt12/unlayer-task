Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    return cy
      .get('#editor-1 > iframe') // Get the iframe element
      .its('0.contentDocument.body') // Access the iframe's contentDocument body
      .should('not.be.empty') // Ensure the iframe body is loaded
      .then(cy.wrap); // Wrap the body for further Cypress commands
  });
