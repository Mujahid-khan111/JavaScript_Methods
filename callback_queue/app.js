console.log("start");

setTimeout(() => {
  console.log("Inside settime out callback");
}, 2000);

console.log("End");

// higher-Order Function

function oprater(num1, num2, operation) {
  return operation(num1, num2);
}

function multiplay(a, b) {
  return a * b;
}

console.log(oprater(5, 3, multiplay));

// let x = new Promise(() => {
//   console.log("hello");
// });
