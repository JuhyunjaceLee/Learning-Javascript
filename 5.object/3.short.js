const x = 0;
const y = 0;
// const cordinate = { x: x, y: y };
const cordinate = { x, y };
console.log(cordinate);

function makeObj(name, age) {
  return {
    name: name,
    age: age,
  };
}
function makeObj(name, age) {
  return {
    name,
    age,
  };
}
//key와 value가 받는 매개변수의 이름이 같은 경우 생략 가능
