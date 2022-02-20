export class CheckoutPage {
    firstNameInput(firstName) {
        return cy.get('[data-test="firstName"]')
    }
    lastNameInput(lastName) {
        return cy.get('[data-test="lastName"]')
    }
    postcodeInput(postcode) {
        return cy.get('[data-test="postalCode"]')
    }
    continueButton() {
        return cy.get('[data-test="continue"]')
    }
    finishButton() {
        return cy.get('[data-test="finish"]')
    }
    itemTotal() {
        return cy.get('.summary_subtotal_label')
    }
    tax() {
        return cy.get('.summary_tax_label')
    }
    totalInclTax() {
        return cy.get('.summary_total_label')
    }
    onesieItemCartPrice() {
        return cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price')
    }
    backpackItemCartPrice() {
        return cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price')
    }
}