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