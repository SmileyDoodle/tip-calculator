import TipCalculator from './TipCalculator.vue'

describe('On load', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TipCalculator)
  })

  it('bill amount value 0', () => {
    cy.mount(TipCalculator)
    cy.get('[data-cy="billamount"]').should('have.value', '');
  })

  it('number of people value 0', () => {
    cy.mount(TipCalculator)
    cy.get('[data-cy="numberofpeople"]').should('have.value', '');
  })

  it('percentage not chosen', () => {
    cy.mount(TipCalculator)
    cy.get('[type="radio"]').should('have.css', 'color', "rgb(51, 51, 51)")
  })

  it('tip calculator button should have text', () => {
    cy.mount(TipCalculator)
    cy.get('[data-cy="calculate-btn"]').should($el => expect($el.text().trim()).to.equal('Calculate'));
  })

  it('tip calculator button should be disabled', () => {
    cy.mount(TipCalculator)
    cy.get('[data-cy="calculate-btn"]').should('be.disabled');
  })
})

describe('Calculation fail example', () => {
  it('A required field input is missing', () => {
    cy.mount(TipCalculator)
    cy.get('[data-cy="billamount"]').type('100');
    cy.get('[data-cy="numberofpeople"]').type('2');
    cy.get('[data-cy="calculate-btn"]').should('be.disabled');
  })
})

 describe('Calculation successful example 1', () => {
  it('All required fields with round number input', () => {
    cy.mount(TipCalculator)
    cy.get('[data-cy="billamount"]').type('100');
    cy.get('[data-cy="numberofpeople"]').type('2');
    cy.get('[data-cy="ten-percent"]').check({ force: true });
    cy.get('[data-cy="calculate-btn"]').should('be.not.disabled');
    cy.get('[data-cy="calculate-btn"]').click();
  })
})

describe('Calculation successful example 2', () => {
  it('A required field should not take a negative value', () => {
    cy.mount(TipCalculator)
    cy.get('[data-cy="billamount"]').type('-100');
    cy.get('[data-cy="billamount"]').should('have.value', '100')
    cy.get('[data-cy="numberofpeople"]').type('-2');
    cy.get('[data-cy="numberofpeople"]').should('have.value', '2')
    cy.get('[data-cy="ten-percent"]').check({ force: true });
    cy.get('[data-cy="calculate-btn"]').should('be.not.disabled');
    cy.get('[data-cy="calculate-btn"]').click();
  })
})

describe('Calculation successful example 3', () => {
  it('A required field should take only numbers/dot/comma', () => {
    cy.mount(TipCalculator)
    cy.get('[data-cy="billamount"]').type('100.50');
    cy.get('[data-cy="billamount"]').should('have.value', '100.50')
    cy.get('[data-cy="numberofpeople"]').type('1.2');
    cy.get('[data-cy="numberofpeople"]').should('have.value', '12')
    cy.get('[data-cy="ten-percent"]').check({ force: true });
    cy.get('[data-cy="calculate-btn"]').should('be.not.disabled');
    cy.get('[data-cy="calculate-btn"]').click();
  })
})

describe('Calculation successful example 4', () => {
  it('A required fields with decimal input', () => {
    cy.mount(TipCalculator)
    cy.get('[data-cy="billamount"]').type('122.37');
    cy.get('[data-cy="numberofpeople"]').type('4');
    cy.get('[data-cy="fifteen-percent"]').check({ force: true });
    cy.get('[data-cy="calculate-btn"]').should('be.not.disabled');
    cy.get('[data-cy="calculate-btn"]').click();
  })
})