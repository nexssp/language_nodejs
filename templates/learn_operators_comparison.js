// OPERATORS - COMPARISON
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Equality (==)
// a == b
console.log("Equality (==)");
console.log("369 == 369 ->", 369 == 369); //true
console.log('"369" == 369 ->', "369" == 369); // true, but "369" === 369 is false!
console.log("false == 0 ->", false == 0); // true, but 0 === false is false!
console.log("null == 0 ->", null == 0); // false
console.log("undefined == 0 ->", undefined == 0); //false
console.log("null == undefined ->", null == undefined); //true but null === undefined is false!

// Inequality (!=)
// a != b
console.log("");
console.log("Inequality (!=)");
console.log("369 != 369 ->", 369 != 369); //false
console.log('"369" != 369 ->', "369" != 369); //false
console.log("true != 1", true != 1); // false
console.log("false != 0", false != 0); // false"

// Identity / strict equality (===)
// a === b
console.log("");
console.log("Identity / strict equality (===)");
console.log("369 === 369 ->", 369 === 369); //true
console.log('"369" === 369 ->', "369" === 369); //false

// Non-identity / strict inequality (!==)
// a !== b
console.log("");
console.log("Non-identity / strict inequality (!==)");
console.log('"369" !== 369 ->', "369" !== 369); //true
console.log("369 !== 963 ->", 369 !== 963); //true

// Greater than operator (>) and Less than operator (<)
console.log("");
console.log("Greater than operator (>) and Less than operator (<)");
console.log("963 > 369 ->", 963 > 369); //true
console.log("963 < 369 ->", 963 < 369); //false

// Greater than or equal operator (>=) and Less than or equal operator (<=)
console.log("");
console.log(
  "Greater than or equal operator (>=) and Less than or equal operator (<=)"
);
console.log("963 >= 369 ->", 963 >= 369); //true
console.log("369 >= 369 ->", 369 >= 369); //true
console.log("963 <= 369 ->", 963 <= 369); //false
console.log("369 <= 369 ->", 369 <= 369); //true
