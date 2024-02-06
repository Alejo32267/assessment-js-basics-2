///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)

const summedPrice = cart.reduce((total, food) => total + food.price, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  const totalWithTax = cartTotal * (1 + tax);
  const finalPrice = totalWithTax - couponValue;
  return finalPrice;
};


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The customer object for the cart page may include the following properties:

1. Name: This property would store the customer's name, represented as a string data type, to identify the customer placing the order.

2. Email: Storing the customer's email address as a string data type would allow the restaurant to communicate order confirmations, updates, and promotions to the customer.

3. Address: This property would hold the customer's delivery address, represented as a string data type, to ensure that the food is delivered to the correct location.

4. Phone Number: Storing the customer's phone number as a string data type would allow the restaurant to contact the customer if there are any issues or questions regarding the order.

These properties are essential for a restaurant to have in order to fulfill and deliver orders accurately and to communicate with customers regarding their orders.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
  name: "John Doe",
  email: "johndoe@example.com",
  address: "123 Main Street, City, Country",
  phoneNumber: "555-123-4567"
};

