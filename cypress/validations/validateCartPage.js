import { CartPage } from "../pageObjects/cartPage.js"

const CART_PAGE = new CartPage();

export const validateTitle = () => {
    CART_PAGE.pageTitle().should('have.text', 'Your Cart');
};

export const validateOnesie = () => {
    CART_PAGE.onesieItem().should('have.text', 'Remove');
};

export const validateOnesiePrice = () => {
    CART_PAGE.onesieItemPrice().should('have.text', '$7.99');
};

export const validateBackpack = () => {
    CART_PAGE.backpackItem().should('have.text', 'Remove');
};

export const validateBackpackPrice = () => {
    CART_PAGE.backpackItemPrice().should('have.text', '$29.99');
};