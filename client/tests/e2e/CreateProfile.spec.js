describe('<CreateProfile /> Component E2E tested', () => {
  const FORM = '[data-testid="form"]';
  const HEADLINE = '[data-testid="headline"]';
  const NAME_INPUT_FIELD = '[data-testid="name"]';
  const AGE_INPUT_FIELD = '[data-testid="age"]';
  const MAIL_INPUT_FIELD = '[data-testid="email"]';
  const BUTTON = '[data-testid="button"]';

  beforeEach(() => {
    cy.visit('/createprofile');
  });

  it('should render the form', () => {
    cy.get(FORM).should('be.visible');
  });

  it('should render a headline', () => {
    cy.get(HEADLINE).should('be.visible');
  });

  it('does render the name input field', () => {
    cy.get(NAME_INPUT_FIELD).should('be.visible');
  });

  it('should test the name input value when typing', () => {
    cy.get(NAME_INPUT_FIELD)
      .type('Harry')
      .type('{enter}');
    cy.get(NAME_INPUT_FIELD).should('have.value', 'Harry');
  });

  it('does render the age input field', () => {
    cy.get(NAME_INPUT_FIELD).should('be.visible');
  });

  it('should test the age input value when typing', () => {
    cy.get(AGE_INPUT_FIELD)
      .type('22')
      .type('{enter}');
    cy.get(AGE_INPUT_FIELD).should('have.value', '22');
  });

  it('does render the mail input field', () => {
    cy.get(MAIL_INPUT_FIELD).should('be.visible');
  });

  it('should test the mail input value when typing', () => {
    cy.get(MAIL_INPUT_FIELD)
      .type('test@test.de')
      .type('{enter}');
    cy.get(MAIL_INPUT_FIELD).should('have.value', 'test@test.de');
  });

  it('does render a button', () => {
    cy.get(BUTTON).should('be.visible');
  });
});
