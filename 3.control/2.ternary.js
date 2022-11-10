// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우(표현식) : 거짓인경우(표현식)

let fruit = "apple";

if (fruit === "apple") {
  console.log("apple");
} else {
  console.log("orange");
}

fruit === "apple" ? console.log("apple") : console.log("orange");

let result = fruit === "apple" ? "apple" : "orange";

console.log(result);
