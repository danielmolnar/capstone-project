describe('<Imagecontainer /> Component E2E tested', () => {
  const MOVIE = '[data-testid="movie-container"]';

  beforeEach(() => {
    cy.visit('/');
  });

  it('does render a movie', () => {
    cy.get(MOVIE).should('be.visible');
  });
});

describe('<Row /> Component E2E tested', () => {
  const ROW = '[data-testid="row"]';
  const HEADLINE = '[data-testid="headline"]';

  beforeEach(() => {
    cy.visit('/');
  });

  it('does render a genre headline', () => {
    cy.get(HEADLINE).should('be.visible');
  });

  it('does render a movie row', () => {
    cy.get(ROW).should('be.visible');
  });
});
