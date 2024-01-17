describe('the-internet.herokuapp tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
    
    
  });
    
  it('TC_2AddRemoveElements_001', () => {
    
    cy.get('ul > :nth-child(2) > a').click();
    
    // Click the "Add Element" button.
    cy.get('button').contains('Add Element').click();

    // An element is added on the page.
    cy.get('button.added-manually').contains('Delete').should('be.visible');

    // Click the "Delete" button.
    cy.get('button.added-manually').contains('Delete').click();

    // The element is Deleted of the page.
    cy.get('button.added-manually').should('not.exist');

  });
  

});