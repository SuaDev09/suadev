describe('Inspection Testing', () => {
  it('Should click the first row with more than 100 Outliers, paginating if necessary', () => {
    cy.visit('/');
    cy.clickFirstRowWithOutliersPaginated(100);
    // Assert that the image generator dialog is visible
    cy.get('.images-generator').should('be.visible');
  });

  it('Should inspect images and tag with Good result', () => {
    cy.visit('/');
    cy.clickFirstRowWithOutliersPaginated(50);
    cy.inspectFirstImageAndTag('Good');
    // Assert success message
    cy.get('#swal2-title').should('contain.text', 'Success');
  });

  it('Should inspect images and tag with Defect result', () => {
    cy.visit('/');
    cy.clickFirstRowWithOutliersPaginated(50);
    cy.inspectFirstImageAndTag('Defect');
    // Optionally, specify error type if needed:
    // cy.tagImageAsDefect(13);
    cy.get('#swal2-title').should('contain.text', 'Success');
  });

  it('Should inspect images and tag with Review result', () => {
    cy.visit('/');
    cy.clickFirstRowWithOutliersPaginated(50);
    cy.inspectFirstImageAndTag('Review');
    // Optionally, specify explanation if needed:
    // cy.tagImageAsReview('Needs further inspection');
    cy.get('#swal2-title').should('contain.text', 'Success');
  });
});
