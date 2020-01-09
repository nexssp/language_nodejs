// FUNCTIONS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// The function square takes one parameter, called number. The function consists of
// one statement that says to return the parameter of the function (that is, number) multiplied by itself.
// The statement return specifies the value returned by the function:

function square(number) {
  return number * number;
}
// Also can be written as ANONYMOUS FUNCTIONS:
const squareF = function(number) {
  return number * number;
};
var x = squareF(4); // x gets the value 16

// However, a name can be provided with a function expression.
// Providing a name allows the function to refer to itself, and also
// makes it easier to identify the function in a debugger's stack traces:
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

// ANOTHER WAY TO SPECIFY FUNCTIONS
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// expected output: 8

// FUNCTION SCOPE
// Variables defined inside a function cannot be accessed from anywhere outside the function,
// because the variable is defined only in the scope of the function. However, a function can
// access all variables and functions defined inside the scope in which it is defined.

// The following variables are defined in the global scope
var num1 = 20,
  num2 = 3,
  name = "Chamahk";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Chamahk scored 5"
