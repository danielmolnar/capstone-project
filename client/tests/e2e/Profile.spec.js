describe('<Profile /> Component E2E tested', () => {
  const BUTTON = '[data-testid="button"]';
  const HEADLINE = '[data-testid="headline"]';

  beforeEach(() => {
    cy.visit('/profile');
  });

  it('does render a headline', () => {
    cy.get(HEADLINE).should('be.visible');
  });

  it('does render a button', () => {
    cy.get(BUTTON).should('be.visible');
  });
});
