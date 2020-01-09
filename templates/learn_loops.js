// LOOPS

// for
console.log("Loop: for .. with break");
const myArray = ["a", "b", "c", "d"];
for (i = 0; i < myArray.length; i++) {
  if (myArray[i] == "c") {
    // This will brake on c
    break;
  }
  console.log(myArray[i]);
}

// for in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

console.log("\nLoop: for .. in");
console.log("This will display only keys..0, 1, 2, 3 etc.");

for (let x in myArray) {
  console.log(x);
}

console.log("\nLoop: Object.keys + forEach");
Object.keys(myArray).forEach(function(key) {
  console.log(key, " -> ", myArray[key]);
});

console.log("\nLoop: for const [key, value].. Object.entries ");
const object = { a: 1, b: 2, c: 3 };
for (const [key, value] of Object.entries(object)) {
  console.log(key, " -> ", value);
}

// do while
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
console.log("\nLoop: do .. while");
do {
  i += 1;
  console.log(i);
} while (i < 5);

// while
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
console.log("\nLoop: while");
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log("n:", n, "x:", x);
}

// continue statement

i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

// while (never ending)
// while (true) {
//   console.log("Hello, world");
// }
