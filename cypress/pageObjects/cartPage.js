export class CartPage {
    checkoutButton() {
        return cy.get('[data-test="checkout"]')
    }
    continueShoppingButton() {
        return cy.get('[data-test="continue-shopping"]')
    }
    pageTitle() {
        return cy.get('.title')
    }
    onesieItem() {
        return cy.get("[data-test='remove-sauce-labs-onesie']")
    }
    backpackItem() {
        return cy.get("[data-test='remove-sauce-labs-backpack']")
    }
    onesieItemPrice() {
        return cy.get('.inventory_item_price').eq(0)
        
    }
    backpackItemPrice() {
        return cy.get('.inventory_item_price').eq(1)
    }
    
    
}



