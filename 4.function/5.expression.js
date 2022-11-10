// 함수 선언문 function name(){ }
// 함수 표현식 const name = function(){ }

//함수도 객체이기 때문에 변수에 할당, 재할당이 가능하다.
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));
// function의 메모리가 변수 add에 할당된다.
// 따라서 add를 호출하면, 인자(1, 2)를 전달해서 함수를 호출, 실행한다.

//함수 표현식은 무명함수로 사용하는것이 좋다. 이름을 사용해도 변수에 할당되면, 변수의 이름으로 호출될뿐 함수의 이름은 쓰이지 않는다.
// let add = function sum(a, b) {
//   return a + b;
// };
// console.log(sum(1, 2));

//화살표함수 const name = ()=> { }
add = (a, b) => {
  return a + b;
};
console.log(add(3, 4));

//어떠한 값을 바로 return하는 경우라면, 생략가능
add = (a, b) => a + b;
console.log(add(5, 6));

//생성자 함수 const object = new Function();

//IIFE (Immedicately-Invoked Function Expressions)
(function run() {
  console.log(100);
})();
