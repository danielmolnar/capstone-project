describe('<Searchbar /> Component E2E tested', () => {
  const SEARCH_INPUT_FIELD = '[data-testid="search-input"]';

  beforeEach(() => {
    cy.visit('/search');
  });

  it('does render the input field', () => {
    cy.get(SEARCH_INPUT_FIELD).should('be.visible');
  });

  it('should test the query value when typing', () => {
    cy.get(SEARCH_INPUT_FIELD)
      .type('Harry')
      .type('{enter}');
    cy.get(SEARCH_INPUT_FIELD).should('have.value', 'Harry');
  });

  it('should empty the input field when pressing backspace', () => {
    cy.get(SEARCH_INPUT_FIELD)
      .type('Harry')
      .type('{backspace}{backspace}{backspace}{backspace}{backspace}');
    cy.get(SEARCH_INPUT_FIELD).should('have.value', '');
  });
});
