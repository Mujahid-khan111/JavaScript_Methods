// function text() {
//   console.log("sirft");
//   console.log("second");
//   console.log("Thired");
// }

// text ();

function* Generator() {
  yield "yield No 1";
  yield "yield No 2";
  yield "yield No 3";
}

let g = Generator();
for (let value of g) {
  console.log(value);
}

// console.log(g.next().value);
// g.next();
// console.log(g.next().value);
// console.log(g.next());

// Example 2

function* generator() {
  let nextnum = 305;
  while (true) {
    yield nextnum++;
  }
}


let ge = generator();
// console.log(ge.next().value);

for (let value of ge) {
  if (value > 306) break;
  console.log(value);
  
}


function *generators(){
    yield 'PHP'
    yield 'Node'
    yield 'Angular'
    yield 'React'
}


let ga = generators();
console.log(ga.next());
console.log(ga.return('Ending Now'));
console.log(ga.next().value);
