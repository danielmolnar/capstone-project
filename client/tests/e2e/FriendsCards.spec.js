describe('<FriendsCards /> Component E2E tested', () => {
  const NAME = '[data-testid="name"]';
  const TAG = '[data-testid="tag"]';
  const FRIENDS = '[data-testid="friends"]';
  const FAVORITES = '[data-testid="favorites"]';
  const WATCHLIST = '[data-testid="watchlist"]';
  beforeEach(() => {
    cy.visit('/friendsinfo');
  });

  it('does render a friend name', () => {
    cy.get(NAME).should('be.visible');
  });

  it('does render a friends icon with the corresponding amount of friends', () => {
    cy.get(FRIENDS).should('be.visible');
  });

  it('does render a favorite icon with the corresponding amount of favorite movies', () => {
    cy.get(FAVORITES).should('be.visible');
  });

  it('does render a watchlist icon with the corresponding amount of movies on the watchlist', () => {
    cy.get(WATCHLIST).should('be.visible');
  });

  it('does render a tag', () => {
    cy.get(TAG).should('be.visible');
  });
});
