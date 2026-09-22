// Write a dynamic program that calculates the total cost of items in a shopping cart.
// shoppingCart = ['apple', 'banana', 'orange']
// itemPrices = { apple: 2, banana: 1, orange: 3, grapes:5 }
// discounts = { apple: 10, banana: 5 }  // Discount in percentage
// salesTax = 8  // Sales tax in percentage

// Expected Output:
// Total cost after tax: 6.21

const shoppingCart = ["apple", "banana", "orange"];
const itemPrices = { apple: 2, banana: 1, orange: 3, grapes: 5 };
const discounts = { apple: 10, banana: 5 }; // Discount in percentage
const salesTax = 8; // Sales tax in percentage

function calculateTotalCost(cart, prices, discounts, tax) {
  let totalCost = 0;
  for (let item of cart) {
    let price = prices[item];

    let discount = discounts[item] || 0;

    let discountedPrice = price - (price * discount) / 100;
    let finalPrice = discountedPrice + (tax * discountedPrice) / 100;

    totalCost = totalCost + finalPrice;
  }
  return totalCost;
}

let totalCost = calculateTotalCost(
  shoppingCart,
  itemPrices,
  discounts,
  salesTax,
);
console.log(totalCost); // 6.21
