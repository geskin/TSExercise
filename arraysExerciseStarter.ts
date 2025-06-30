// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

// uncomment and declare //
const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

// uncomment and declare //
const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  // types here //
  name: string;
  price: number;
};
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

// HINTS //
// 1. Dont forget your types for the arguments and the return type //
// 2. Maybe a loop for the logic ?
function getTotal(products: Product[]): number {

  let sum: number = 0;

  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }

  return sum;

}