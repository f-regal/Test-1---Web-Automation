export class ProductListPage {
    sortProducts() {
        return cy.get('[data-test="product_sort_container"]')
    }
    cartButton() {
        return cy.get('.shopping_cart_link')
    }
    sortLoHi() {
        return cy.get('select').select('Price (low to high)')
    }
    sortZtoA() {
        return cy.get('select').select('Name (Z to A)')
    }
    firstProduct() {
        return cy.get('.inventory_item_name').eq(0)
    }
    firstProductImage() {
        return cy.get('#item_4_img_link');
    }
    cheapestProduct() {
        return cy.get('.btn_inventory').first()
    }
    sauceLabOnesie() {
        return cy.get('[data-test=add-to-cart-sauce-labs-onesie]')
    }
    sauceLabBackpack() {
        return cy.get('[data-test=add-to-cart-sauce-labs-backpack]')
    }
}