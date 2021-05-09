// https://www.joshbeckman.org/presents/twice-around-the-javascript-event-loop/

setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
  console.log("this is setTimeout 2");
  Promise.resolve().then(() => {
    console.log("this is promise added inside setTimeout");
  });
}, 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);
setTimeout(() => console.log("this is setTimeout 4"), 0);
setTimeout(() => console.log("this is setTimeout 5"), 0);

// Fixed added below () as resolve() was without ()
Promise.resolve().then(() => console.log("this is promise 1"));
Promise.resolve().then(() => {
  Promise.resolve().then(() => {
    console.log("this is the inner promise inside promise");
  });
});
