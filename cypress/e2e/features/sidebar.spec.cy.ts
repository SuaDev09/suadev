describe('template spec', () => {
  it('Checking sidebar functionality', () => {
    cy.visit('/');
    cy.get('[data-cy="sidebar-opened"]').should('be.visible');
    cy.get('[data-cy="sidebar-toggle"]').click();
    cy.get('[data-cy="sidebar-closed"]').should('be.visible');
  });
});
