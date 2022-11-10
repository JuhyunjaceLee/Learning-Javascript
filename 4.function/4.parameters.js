// 매개변수의 기본 값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1
// 외부에 값이 지정되면 외부 값으로 매개변수가 지정됨
// function add(a = 1, b = 3) {
//   console.log(a);
//   console.log(b);
//   console.log(arguments);
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   return a + b;
// }
// const addResult = add(5, 6);
// console.log(addResult);

// Rest매개변수 Rest Parameters
function sum(a, b, c, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(numbers);
  console.log(arguments);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
