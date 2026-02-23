const Products = [
  { name: "Wireless Mouse", price: 450, category: "electronics", inStock: true },
  { name: "Desk Lamp", price: 320, category: "furniture", inStock: false },
  { name: "Keyboard", price: 890, category: "electronics", inStock: true },
  { name: "Office Chair", price: 2500, category: "furniture", inStock: true },
  { name: "USB Cable", price: 120, category: "electronics", inStock: true },
  { name: "Monitor Stand", price: 670, category: "furniture", inStock: false }
];

/*Write a function filterByCategory that takes a category string and returns only products in that category.

Write a function getInStockProducts that returns only products where inStock is true.

Write a function calculateTotal that takes an array of products and returns the sum of all their prices.

Use your functions to output the following to the console:

All electronics that are in stock
The total value of all in-stock furniture
A message that says "Found X in-stock electronics" (where X is the actual count)
Make sure your code runs without errors when you refresh the page. Check the console for output.*/

function filterByCategory(category) {
    let output = [];
    Products.forEach((elem) => {
        if (elem.category===category) {
            output.push(elem);
        }
    })
    return output;
}

function getInStockProducts() {
    let output = [];
    Products.forEach((elem) => {
        if (elem.inStock) {
            output.push(elem);
        }
    })
    return output;
}

function calculateTotal(inArr) {
    output = 0;
    inArr.forEach((elem) => {
        //console.log(`the price of ${elem.name} is ${elem.price}`);
        output += elem.price;
    })
    return output;
}

function inStockByCategory(category) {
    return getInStockProducts().filter((elem) => {
        if (elem.category === category) {
            return elem;
        }
    })
}

console.log(inStockByCategory("electronics"));
console.log(calculateTotal(inStockByCategory("furniture")));
console.log(`Found ${inStockByCategory("electronics").length} in-stock electronics`);