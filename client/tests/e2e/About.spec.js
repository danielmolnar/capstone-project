describe('<About /> Component E2E tested', () => {
  const HEADLINE = '[data-testid="headline"]';
  const STORY = '[data-testid="story"]';
  const TAG = '[data-testid="tag"]';
  n;
  beforeEach(() => {
    cy.visit('/about');
  });

  it('does render a headline', () => {
    cy.get(HEADLINE).should('be.visible');
  });

  it('does render a story', () => {
    cy.get(STORY).should('be.visible');
  });

  it('does render a tag', () => {
    cy.get(TAG).should('be.visible');
  });

  it('does have anchor tags', () => {
    cy.contains('a', '#').should('not.have.attr', 'href', '#undefined');
  });
});
