
    // Create a file named products.js.

    // Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

    // Export this array using the Common JS syntax.

    // Create another file named shop.js.

    // In shop.js, require the product objects from the products.js module.

    // Create a function that takes a product name as a parameter and searches for the corresponding product object.

    // Call this function with different product names and print the details of the products.

    // Run shop.js and verify that the correct product details are displayed.

    const products = [
        {name: "apple", price: 12, category: "fruit"},
        {name: "orange", price: 15, category: "fruit"},
        {name: "banana", price: 5, category: "fruit"},
        {name: "coke", price: 20, category: "beverages"},
    ]

    module.exports = products;