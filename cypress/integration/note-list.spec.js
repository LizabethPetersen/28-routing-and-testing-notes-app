

describe('Testing To-Do Note App running full CRUD operations', () => {
  it('should run through end-to-end operations on the app', () => {
    cy.visit('/');
    cy.get('a').contains('Dashboard').click();
    cy.url().should('include', '/dashboard');

    cy.get('input[data-cy=title]')
    .clear()
    .type('Chores');

    cy.get('input[data-cy=content]')
    .clear()
    .type('laundry, vacuum, windows');

    cy.get('form[data-cy=note-form').submit();

  });
});