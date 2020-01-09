"use strict";
// STRICT MODE
// 'use strict' Prevents you from using undeclared variables and must be at the beginning of the file.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// VARIABLES DECLARATION

// var vs let
// 'let' allows you to declare variables that are limited to a scope of a block statement,
// or expression on which it is used, unlike the 'var' keyword, which defines a variable globally,
// or locally to an entire function regardless of block scope.

// var
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

// Declaring and initializing two variables
var a = 0,
  b = 0;

var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2

// let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
let q = 1;

if (q === 1) {
  let q = 2;

  console.log(q);
  // expected output: 2
}

console.log(q);
// expected output: 1
