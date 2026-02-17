/// <reference types="cypress" />

/**
 * Clicks the first table row with more than the given number of Outliers, paginating if necessary.
 */
Cypress.Commands.add(
  'clickFirstRowWithOutliersPaginated',
  (minOutliers = 3) => {
    const findAndClickRow = () => {
      cy.get('.p-datatable-tbody tr')
        .each(($row, i, $rows) => {
          const outliersText = $row.find('td').eq(6).text();
          const outliers = parseInt(outliersText, 10);
          if (outliers > minOutliers) {
            cy.log(`Row ${i + 1} has ${outliers} Outliers, clicking.`);
            cy.wrap($row).click({ force: true });
            return false;
          }
        })
        .then(($rows) => {
          // If no row was clicked, paginate
          const found = $rows.toArray().some((row) => {
            const outliersText = Cypress.$(row).find('td').eq(6).text();
            return parseInt(outliersText, 10) > minOutliers;
          });
          if (!found) {
            cy.get('.p-paginator-bottom > .p-paginator-next').then(($btn) => {
              if (!$btn.hasClass('p-disabled')) {
                cy.log('No matching row found, moving to next page...');
                cy.wrap($btn).click({ force: true }).then(findAndClickRow);
              } else {
                cy.log(`No row found with more than ${minOutliers} Outliers.`);
              }
            });
          }
        });
    };
    findAndClickRow();
  },
);

/**
 * Inspects the first image and tags it with the given label.
 */
Cypress.Commands.add(
  'inspectFirstImageAndTag',
  (tag: 'Good' | 'Defect' | 'Review' = 'Good') => {
    cy.get('.images-generator').should('be.visible');
    cy.get('.images-card img').then(($images) => {
      if ($images.length === 0) {
        cy.log('No images found in the container.');
        return;
      }
      cy.log('Images found, clicking the checkbox in the first card.');
      cy.get('.images-card')
        .first()
        .find('.p-checkbox-box')
        .click({ force: true });
      cy.log(`Checkbox clicked for ${tag} tag.`);
      cy.get(`[label="${tag}"] > .p-ripple`).click({ force: true });
      switch (tag) {
        case 'Good':
          cy.tagImageAsGood();
          break;
        case 'Defect':
          cy.tagImageAsDefect();
          break;
        case 'Review':
          cy.tagImageAsReview();
          break;
      }
    });
  },
);

/**
 * Tags the image as Good.
 */
Cypress.Commands.add('tagImageAsGood', () => {
  cy.get('[label="Accept"] > .p-ripple').click({ force: true });
  cy.get('#swal2-title').should('contain.text', 'Success');
});

/**
 * Tags the image as Defect with a given error type.
 */
Cypress.Commands.add('tagImageAsDefect', (errorType = 13) => {
  cy.get('#pn_id_45 > .p-dropdown-trigger').click({ force: true });
  cy.get('#pn_id_45_list').children().should('have.length.above', 2);
  cy.get(`#pn_id_45_${errorType - 1}`).click({ force: true });
  cy.get('[label="Accept"] > .p-ripple').click({ force: true });
  cy.get('#swal2-title').should('contain.text', 'Success');
});

/**
 * Tags the image as Review with an explanation.
 */
Cypress.Commands.add('tagImageAsReview', (explanation = 'Testing Review') => {
  cy.get('.dialog-content > .p-inputtext').type(explanation);
  cy.get('[label="Accept"] > .p-ripple').click({ force: true });
  cy.get('#swal2-title').should('contain.text', 'Success');
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Clicks the first table row with more than the given number of Outliers, paginating if necessary.
       */
      clickFirstRowWithOutliersPaginated(minOutliers?: number): Chainable<void>;
      /**
       * Inspects the first image and tags it with the given label.
       */
      inspectFirstImageAndTag(
        tag?: 'Good' | 'Defect' | 'Review',
      ): Chainable<void>;
      /**
       * Tags the image as Good.
       */
      tagImageAsGood(): Chainable<void>;
      /**
       * Tags the image as Defect with a given error type.
       */
      tagImageAsDefect(errorType?: number): Chainable<void>;
      /**
       * Tags the image as Review with an explanation.
       */
      tagImageAsReview(explanation?: string): Chainable<void>;
    }
  }
}
export {};
