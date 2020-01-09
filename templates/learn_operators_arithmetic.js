// OPERATORS - ARITHMETIC
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Standard arithmetic operators + - * /
// a + b, b - a, c * d, e / b
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
console.log("Standard arithmetic operators + - * /");
console.log("Addition (+)");
console.log("1 + 5 ->", 1 + 5, "// Number + Number -> addition"); // 6
console.log("true + 1 ->", true + 1, "// Boolean + Number -> addition"); // 2
console.log("true + true ->", true + true, "// Boolean + Boolean -> addition"); // 2
console.log("5 + 'foo' ->", 5 + "foo", "// Number + String -> concatenation"); // "5foo"
console.log(
  "'foo' + false ->",
  "foo" + false,
  "// String + Boolean -> concatenation"
); // foofalse

console.log(
  "'foo' + 'bar' ->",
  "foo" + "bar",
  "// String + String -> concatenation"
); // 6

console.log("");
console.log("Subtraction (-)");
console.log("1 - 5 ->", 1 - 5); // -4
console.log("100 - 10 ->", 100 - 10); // 90
console.log("'foo' - 3  ->", "foo" - 3); // NaN (Not A Number)

console.log("");
console.log("Multiplication (*)");
console.log("2 * 2 ->", 2 * 2); // 4
console.log("-2 * 2 ->", -2 * 2); // -4
console.log("Infinity * 0 ->", Infinity * 0); // NaN
console.log("Infinity * Infinity ->", Infinity * Infinity); // Infinity

console.log("");
console.log("Division (/)");
console.log("1 / 2 ->", 1 / 2, "// returns 0.5 in JavaScript, 0 in Java");
console.log(
  "1.0 / 2.0 ->",
  1.0 / 2.0,
  "// returns 0.5 in both JavaScript and Java"
);
console.log("2.0 / 0 ->", 2.0 / 0, "// returns Infinity in JavaScript");

// Reminder (%)
// a % b
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
console.log("");
console.log("Reminder (%)");
console.log("15 % 2 ->", 1); // 1
console.log("369 % 369 ->", 369 % 369); // 0
console.log("379 % 369 ->", 379 % 369); // 10

// Increment (++)
// a++, ++a
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment
console.log("");
console.log("Increment (++)");
console.log("var x = 1");
var x = 1;
console.log("++x ->", ++x, "// Increment value and then return 1+1 = 2.");
console.log(
  "x++ ->",
  x++,
  "// Return x and then increment the value (2) and then 2+1=3 so x become 3. See below x.."
); // 0
console.log("x ->", x); // 3

// Decrement (--)
// a--, --a
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement
console.log("");
console.log("Decrement (--)");
console.log("--x ->", --x, "// Deccrement value and then return 3-1 = 2.");
console.log(
  "x-- ->",
  x--,
  "// Return x and then decrement the value (2) and then 2-1=1 so x become 1. See below x.."
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
