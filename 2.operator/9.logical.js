// 논리연산자 Logical Operator
// && 그리고
// || 또는
// ! 부정
// !! 불리언 값으로 변환

let num = 5;
if (num >= 0 && num < 9) {
  console.log("출력");
}

let num2 = 21;
if (num2 >= 0 || num2 < 9) {
  console.log("출력");
}

let num3 = 10;
if (num3 !== 3) {
  console.log("출력!");
}

//QnA
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(!"text"); //false
console.log(!!"text"); //true
