import { ProductListPage } from "../pageObjects/productListPage.js"

const PRODUCT_LIST_PAGE = new ProductListPage();

export const validateCartButton = () => {
    PRODUCT_LIST_PAGE.cartButton().should('exist');
};

export const validateFirstProductZtoA = () => {
    // change the below to 'Test.allTheThings() T-Shirt (Red)' and the test will fail, but this is what Should be displayed
    // 'Sauce Labs Backpack' will make it pass as that is what is displayed, but it shouldnt be displayed
    PRODUCT_LIST_PAGE.firstProduct().should('have.text', 'Test.allTheThings() T-Shirt (Red)');
};

export const validateFirstProductImageZtoA = () => {
    // change the below to src to '/static/media/red-tatt-1200x1500.e32b4ef9.jpg' and the test will fail, but this is the img src which Should be displayed
    // '/static/media/sl-404.168b1cce.jpg' will make it pass as that is what is displayed, but it shouldnt be displayed
    PRODUCT_LIST_PAGE.firstProductImage().find('img').should('have.attr', 'src').should('include','/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
};

export const validateFirstProductCheapestToExpensive = () => {
    // change the below to 'Sauce Labs Onesie' and the test will fail, but this is what Should be displayed
    // 'Sauce Labs Backpack' will make it pass as that is what is displayed, but it shouldnt be displayed
    PRODUCT_LIST_PAGE.firstProduct().should('have.text', 'Sauce Labs Onesie');
};


