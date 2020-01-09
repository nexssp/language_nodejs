// OPERATORS - ARITHMETIC
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Reminder (%)
// a % b
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
console.log("Reminder (%)");
console.log("369 % 369 ->", 369 % 369); // 0
console.log("379 % 369 ->", 379 % 369); // 10

// Increment (++)
// a++, ++a
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment
console.log("");
console.log("Increment (++)");
console.log("var x = 1");
var x = 1;
console.log("++x ->", ++x, "Increment value and then return 1+1 = 2.");
console.log(
  "x++ ->",
  x++,
  "Return x and then increment the value (2) and then 2+1=3 so x become 3. See below x.."
); // 0
console.log("x ->", x); // 3

// Decrement (--)
// a--, --a
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement
console.log("");
console.log("Decrement (--)");
console.log("--x ->", --x, "Deccrement value and then return 3-1 = 2.");
console.log(
  "x-- ->",
  x--,
  "Return x and then decrement the value (2) and then 2-1=1 so x become 1. See below x.."
); // 0
console.log("x ->", x); // 1

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation
console.log("");
console.log("Exponentiation (**)");
console.log("2 ** 3 ->", 2 ** 3); // 8
console.log("3 ** 2 ->", 3 ** 2); // 9
console.log("3 ** 2.5 ->", 3 ** 2.5); // 15.588457268119896
console.log("10 ** -1 ->", 10 ** -1); // 0.1
console.log("2 ** 3 ** 2 ->", 2 ** (3 ** 2)); // 512
console.log("2 ** (3 ** 2) ->", 2 ** (3 ** 2)); // 512
console.log("(2 ** 3) ** 2 ->", (2 ** 3) ** 2); // 64
