//사용예제 1
function sum(a, b) {
  console.log("function");
  return a + b;
}

const result = sum(1, 2);
console.log(result);

//사용예제2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
let lastName = "이";
let firstName = "주현";
console.log(fullName(firstName, lastName));

let lastName2 = "박";
let firstName2 = "철수";
console.log(fullName(firstName2, lastName2));
