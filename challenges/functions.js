// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
function consume(a, b, cb) {
  return cb(a, b);
}
/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function greeting(a, b) {
  return `Hello ${a} ${b}, nice to meet you!`;
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log("--------------Output: Callback Function-----------------");
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
console.log("--------------Output: Callback Function-----------------");
// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:
/*Ans: Here first of all what happens when we run is - it's gonna call the myFunction() 
{ it's console logging the global variable-external} and print the "I'm outside the function"
 then the program will look for the return aby sequencially going through each steps 
until it reach its scope{}- while going through each lines sequencially it prints the
nestedFunction() as well,
If we comment out myFunction the inner function ie nestedFunction is never gonna run
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction(); /* myFunction() returns the outside function if we comment this out the nestedFunction will not return anything
               myFunction when we run the program first call myFunction which is consoling out the external global variable 
               called external
             */
