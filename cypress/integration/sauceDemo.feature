Feature: Standard user adds items to cart and verifies total price

I want to check that a standard user can add multiple items to a cart and that the total price is correct

Scenario: Verify Cost of Item in Cart and Total Cost of Multiple Items at Checkout
Given User opens Swag Labs home page
When User logs in as standard_user
And User adds the Sauce Lab Onesie
Then the Sauce Lab Onesie is listed with the correct price in the Cart
When I add the Sauce Labs Backpack to the Cart
And User checks the products in their cart and goes to check out
And User inputs FirstName, LastName and Postcode and completes their purchase
Then the total price is correct for the two items
When I Logout and Attempt to Login as locked_out_user
Then an error message is displayed

Scenario: Find 3 Issues With Problem_User
Given User opens Swag Labs home page
When User logs in as problem_user
And the user sorts the products from Z - A
Then the first product displayed is the Red T-shirt
And the image for the Red T-shirt should be displayed
When I sort the products from Cheapest to Most Expensive
Then the first product displayed is the Sauce Lab Onesie

