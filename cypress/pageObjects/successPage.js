export class SuccessPage {
    getUrl() {
        return cy.visit("https://www.saucedemo.com/")
    }
    getTitle() {
        return cy.get('.title')
    }
    orderCompleteHeader() {
        return cy.get('.complete-header')
    }
    menu() {
        return cy.get('#react-burger-menu-btn')
    }
    logout() {
        return cy.get('#logout_sidebar_link')
    }
}