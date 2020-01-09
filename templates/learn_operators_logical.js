// OPERATORS - LOGICAL
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

// Logical operators are typically used with Boolean (logical) values. When they are,
// they return a Boolean value. However, the && and || operators actually return the
// value of one of the specified operands, so if these operators are used with
// non-Boolean values, they will return a non-Boolean value.

// Logical AND (&&)
// expr1 && expr2 -> If expr1 can be converted to true, returns expr2; else, returns expr1.
console.log("Logical AND (&&)");
console.log("true && true ->", true && true); //true
console.log("true && false ->", true && false); //false
console.log("false && true ->", false && true); //false
console.log("false && false ->", false && false); //false

// Logical OR (||)
// expr1 || expr2 -> If expr1 can be converted to true, returns expr1; else, returns expr2.

console.log("");
console.log("Logical OR (||)");
console.log("true || true ->", true || true); //true
console.log("true || false ->", true || false); //false
console.log("false || true ->", false || true); //false
console.log("false || false ->", false || false); //false
// Logical NOT (!)
// !expr -> Returns false if its single operand can be converted to true; otherwise, returns true.
console.log("");
console.log("Logical NOT (!)");
console.log("!true ->", !true); //false
console.log("!false ->", !false); //true
console.log("!'' ->", !""); //true
console.log("!'Cat' ->", !"Cat"); //false

console.log("");
console.log("Double NOT (!!)");
console.log("!!{} ->", !!{}, "// Any object is truthy");
console.log("NOTE: aCondition is always equal to !!aCondition");

console.log("");
console.log("More Advanced Examples");
const a = 3;
console.log("const a = 3 ->", a);
const b = -2;
console.log("const b = -2 ->", b);
console.log("a > 0 && b > 0 ->", a > 0 && b > 0); //false
console.log("a > 0 || b > 0 ->", a > 0 || b > 0); //true
console.log("!(a > 0 || b > 0) ->", !(a > 0 || b > 0)); //false
