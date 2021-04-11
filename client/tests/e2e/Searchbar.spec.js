describe('<Searchbar /> Component E2E tested', () => {
  const SEARCH_INPUT_FIELD = '[data-testid="search-input"]';
  // const TAG_SELECTOR = '[data-testid="tag"]';

  // const addThreeTags = () => {
  //   cy.get(TAG_INPUT_FIELD)
  //     .type('One')
  //     .type('{enter}')
  //     .type('Two')
  //     .type('{enter}')
  //     .type('Three')
  //     .type('{enter}');
  // };

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
});
