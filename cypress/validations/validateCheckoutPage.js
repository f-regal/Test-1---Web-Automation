import { CheckoutPage } from "../pageObjects/checkoutPage.js"

const CHECKOUT_PAGE = new CheckoutPage();

export const validateContinueButton = () => {
    CHECKOUT_PAGE.continueButton().should('exist');
};

export const validateFinishButton = () => {
    CHECKOUT_PAGE.finishButton().should('exist');
};

export const validateItemTotal = () => {
   
    // Get the Number for 'Item Total'
    cy.get('.summary_subtotal_label').invoke('text').then((text)=>{ 
        let prices = [];
        let fullText = text;
        let pattern = /[0-9]+/g;
        let number = fullText.match(pattern);
        number = parseFloat(number.join('.'));

        // Get the Onesie Item Price and Push it to our Prices Array
        CHECKOUT_PAGE.onesieItemCartPrice().then((text) => {
            let onesiePrice = text.text();
            let fullText = onesiePrice;
            let pattern = /[0-9]+/g;
            let number = fullText.match(pattern);
            number = parseFloat(number.join('.'));
            prices.push(number);
        })

        // Get the Backpack Item Price and Push it to our Prices Array
        CHECKOUT_PAGE.backpackItemCartPrice().then((text) => {
            let backpackPrice = text.text();
            let fullText = backpackPrice;
            let pattern = /[0-9]+/g;
            let number = fullText.match(pattern);
            number = parseFloat(number.join('.'));
            prices.push(number);

            //Get the sum of our two items
            let sum = 0;
            prices.forEach(element => {
                sum += element;
            })

            return parseFloat(sum.toFixed(2));
        }).should('eq', number)     
    });

};


export const validateTax = () => {
    // Get the Number for 'Tax'
    CHECKOUT_PAGE.tax().invoke('text').then((text)=>{ 
        let prices = [];
        let fullText = text;
        let pattern = /[0-9]+/g;
        let number = fullText.match(pattern);
        number = parseFloat(number.join('.'));

        // Get the Onesie Item Price and Push it to our Prices Array
        CHECKOUT_PAGE.onesieItemCartPrice().then((text) => {
            let onesiePrice = text.text();
            let fullText = onesiePrice;
            let pattern = /[0-9]+/g;
            let number = fullText.match(pattern);
            number = parseFloat(number.join('.'));
            prices.push(number);
        })

        // Get the Backpack Item Price and Push it to our Prices Array
        CHECKOUT_PAGE.backpackItemCartPrice().then((text) => {
            let backpackPrice = text.text();
            let fullText = backpackPrice;
            let pattern = /[0-9]+/g;
            let number = fullText.match(pattern);
            number = parseFloat(number.join('.'));
            prices.push(number);

            //Get the sum of our two items
            let sum = 0;
            prices.forEach(element => {
                sum += element;
            })

            return parseFloat((sum * 0.08).toFixed(2));
        }).should('eq', number)     
    });
};




export const validateTotalInclTax = () => {
    // Get the Number for 'Total Including Tax'
    CHECKOUT_PAGE.totalInclTax().invoke('text').then((text)=>{ 
        let prices = [];
        let fullText = text;
        let pattern = /[0-9]+/g;
        let number = fullText.match(pattern);
        number = parseFloat(number.join('.'));

        // Get the Onesie Item Price and Push it to our Prices Array
        CHECKOUT_PAGE.onesieItemCartPrice().then((text) => {
            let onesiePrice = text.text();
            let fullText = onesiePrice;
            let pattern = /[0-9]+/g;
            let number = fullText.match(pattern);
            number = parseFloat(number.join('.'));
            prices.push(number);
        })

        // Get the Backpack Item Price and Push it to our Prices Array
        CHECKOUT_PAGE.backpackItemCartPrice().then((text) => {
            let backpackPrice = text.text();
            let fullText = backpackPrice;
            let pattern = /[0-9]+/g;
            let number = fullText.match(pattern);
            number = parseFloat(number.join('.'));
            prices.push(number);

            //Get the sum of our two items
            let sum = 0;
            prices.forEach(element => {
                sum += element;
            })

            return parseFloat(((sum * 0.08) + sum).toFixed(2));
        }).should('eq', number)     
    });
};