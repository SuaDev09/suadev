describe('Theme Switcher', () => {
  it('should toggle theme', () => {
    cy.visit('/');
    cy.get('[data-cy="theme-toggle"]').click();

    cy.get('html').should('have.attr', 'data-theme', 'night');

    cy.get('html').should('have.class', 'dark');
    cy.get('[data-cy="theme-toggle"]').click();
  });
});
