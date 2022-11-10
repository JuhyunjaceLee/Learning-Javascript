const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//함수를 인자로 받는 고차함수
//직접적으로 계산하는 함수가 아니라, 특정한 action함수를 전달받아서 실행한다.
//외부로부터 전달받는 함수를 콜백함수라고 한다.
//전달된 action은 콜백함수이다.
//전달하는 당시에 바로 호출하는게 아니라 함수의 레퍼런스만 전달받고 나중에 함수 안에서 호출한다.

//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
//따라서 함수는 고차함수 안에서 필요한 순간에 나중에 호출된다.
// function calculator(a, b, action) {
//   let result = action(a, b);
//   console.log(result);
//   return result;
// }
//콜백함수를 전달할때 add()호출이 아닌 이름만 전달했다.
//위에서 선언된 함수의 참조값만 전달된다.
calculator(1, 2, add);
calculator(10, 20, multiply);
calculator(10, -2, multiply);

function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}
