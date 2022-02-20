import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

import { LoginPage } from "../../pageObjects/loginPage.js"
import { ProductListPage } from "../../pageObjects/productListPage.js"
import { CheckoutPage } from "../../pageObjects/checkoutPage.js"
import { CartPage } from "../../pageObjects/cartPage.js"
import { SuccessPage } from "../../pageObjects/successPage.js";

import * as loginValidations from "../../validations/validateLoginPage.js"
import * as productListValidations from "../../validations/validateProductListPage.js"
import * as cartPageValidations from "../../validations/validateCartPage.js"
import * as checkoutPageValidations from "../../validations/validateCheckoutPage.js"
import * as successPageValidations from "../../validations/validateSuccessPage.js"

import userTest from "../../fixtures/testUser.json"
import lockedUser from "../../fixtures/lockedUser.json"
import problemUser from "../../fixtures/problemUser.json"

const login = new LoginPage();
const productList = new ProductListPage();
const checkout = new CheckoutPage();
const cart = new CartPage();
const success = new SuccessPage();


Given('User opens Swag Labs home page', () => {
    login.getUrl();
    login.getTitle();
    loginValidations.validateLogo();
});

When('User logs in as standard_user', () => {
    cy.fixture('testUser').as('userTest')
    login.usernameField().type(userTest.username);
    login.passwordField().type(userTest.password);
    login.logInButton().click();
});

And('User adds the Sauce Lab Onesie', () => {
    productList.sauceLabOnesie().click();
});

Then('the Sauce Lab Onesie is listed with the correct price in the Cart', () => {
    productList.cartButton().click(); 
    cartPageValidations.validateTitle();
    cartPageValidations.validateOnesie();
    cartPageValidations.validateOnesiePrice();
});

When('I add the Sauce Labs Backpack to the Cart', () => {
    cart.continueShoppingButton().click();
    productList.sauceLabBackpack().click();
});

And('User checks the products in their cart and goes to check out', () => {
    productList.cartButton().click(); 
    cartPageValidations.validateTitle();
    cartPageValidations.validateOnesie();
    cartPageValidations.validateOnesiePrice();
    cartPageValidations.validateBackpack();
    cartPageValidations.validateBackpackPrice();
    cart.checkoutButton().click();
    checkoutPageValidations.validateContinueButton();
});

And('User inputs FirstName, LastName and Postcode and completes their purchase', (firstName, lastName, postcode) => {
    checkout.firstNameInput().type(userTest.firstName);
    checkout.lastNameInput().type(userTest.lastName);
    checkout.postcodeInput().type(userTest.postcode);
    checkout.continueButton().click();
});


Then('the total price is correct for the two items', () => {
    checkoutPageValidations.validateItemTotal();
    checkoutPageValidations.validateTax();
    checkoutPageValidations.validateTotalInclTax();
    checkoutPageValidations.validateFinishButton();
    checkout.finishButton().click(); 
    successPageValidations.validateHeaderText();
    successPageValidations.validateTitle();
});

When('I Logout and Attempt to Login as locked_out_user', () => {
    success.menu().click();
    success.logout().click();
    cy.fixture('lockedUser').as('lockedUser')
    login.usernameField().type(lockedUser.username);
    login.passwordField().type(lockedUser.password);
    login.logInButton().click();
});

Then('an error message is displayed', () => {
    loginValidations.validateError();
});




//The Following Steps are Used for the 'Problem_User Test'
When('User logs in as problem_user', () => {
    cy.fixture('problemUser').as('problemUser')
    login.usernameField().type(problemUser.username);
    login.passwordField().type(problemUser.password);
    login.logInButton().click();
});

And('the user sorts the products from Z - A', () => {
    productList.sortZtoA();
});

//Issue 1 - Red-Tshirt is not displayed after sorting from Z - A
Then('the first product displayed is the Red T-shirt', () => {
    productListValidations.validateFirstProductZtoA();
});

//Issue 2 - All products have the same Image, the Image of the Red-Tshirt is not displayed
And('the image for the Red T-shirt should be displayed', () => {
    productListValidations.validateFirstProductImageZtoA();
});

When('I sort the products from Cheapest to Most Expensive', () => {
    productList.sortLoHi();
});

//Issue 3 - After sorting from Cheapest to Most Expensive, The first product displayed should be the Onesie, but instead its the backpack
Then('the first product displayed is the Sauce Lab Onesie', () => {
    productListValidations.validateFirstProductCheapestToExpensive();
});