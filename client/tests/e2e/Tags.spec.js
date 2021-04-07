/// <reference types="Cypress" /> ///

describe('<Tags /> Component E2E tested', () => {
  const TAG_INPUT_FIELD = '[data-testid="tag-input"]';
  const TAG_SELECTOR = '[data-testid="tag"]';

  const addThreeTags = () => {
    cy.get(TAG_INPUT_FIELD)
      .type('One')
      .type('{enter}')
      .type('Two')
      .type('{enter}')
      .type('Three')
      .type('{enter}');
  };

  beforeEach(() => {
    cy.visit('/createprofile');
  });

  it('does render the input field', () => {
    cy.get(TAG_INPUT_FIELD).should('be.visible');
  });

  it('should generate a new tag when user enters a tag in the input field', () => {
    cy.get(TAG_INPUT_FIELD)
      .type('One')
      .type('{enter}');
    cy.get(TAG_SELECTOR).should('have.length', 1);
  });

  it('should generate two tags when user enters two tags in the input field', () => {
    cy.get(TAG_INPUT_FIELD)
      .type('One')
      .type('{enter}')
      .type('Two')
      .type('{enter}');
    cy.get(TAG_SELECTOR).should('have.length', 2);
  });

  it('should delete last tag when user presses backspace key', () => {
    addThreeTags();
    cy.get(TAG_INPUT_FIELD).type('{backspace}');
    cy.get(TAG_SELECTOR).should('have.length', 2);
    cy.get(TAG_INPUT_FIELD).type('{backspace}');
    cy.get(TAG_SELECTOR).should('have.length', 1);
    cy.get(TAG_INPUT_FIELD).type('{backspace}');
    cy.get(TAG_SELECTOR).should('have.length', 0);
  });

  it('should select the first tag when the user presses the right arrow key', () => {
    addThreeTags();
    cy.get(TAG_INPUT_FIELD).type('{rightArrow}');
    cy.get(TAG_SELECTOR)
      .first()
      .should('have.attr', 'data-selected');
  });
});
