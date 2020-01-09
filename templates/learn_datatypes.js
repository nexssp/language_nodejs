// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// DYNAMIC TYPING
// Variables in JavaScript are not directly associated with any particular value type,
// and any variable can be assigned (and re-assigned) values of all types:
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean

// SEVEN PRIMITIVE DATATYPES

// Boolean: true or false
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
let boolean1 = true;
let boolean2 = false;

// Null
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
let null1 = null;

// undefined
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
let undefined1 = undefined;

// Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
let val1 = 1234;
let number1 = new Number(val1);
let number2 = new Number("123"); // a === 123 is false
let number3 = Number("123"); // b === 123 is true
let number4 = number1 instanceof Number; // is true
let number5 = null1 instanceof Number; // is false

// BigInt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
let bigInt1 = 2n ** 53n;
let bigInt2 = bigInt1 + 1n;

// String: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
let string1 = "My String";
let string2 =
  "中文 español Deutsch English देवनागरी العربية português বাংলা русский 日本語 norsk bokmål ਪੰਜਾਬੀ 한국어 தமிழ் עברית";
let string3 = `Multiline 
'Template Literal' and some variables inside example ${string2} and some other types ${number1}`;
console.log(string3);
// Symbol: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// and Object
let symbol1 = Symbol();
let symbol2 = Symbol(42);
let symbol3 = Symbol("foo");

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol("foo") === Symbol("foo"));
// expected output: false

// Symbol("foo") === Symbol("foo"); // false
// let sym = new Symbol()  // TypeError
