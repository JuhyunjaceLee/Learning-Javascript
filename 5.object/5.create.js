// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: apple`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: orange`);
//   },
// };

function Fruit(name, color) {
  this.name = name;
  this.color = color;
  this.display = () => {
    console.log(`${this.name}: ${this.color}`);
  };
  // return this; return 생략가능
}

const apple = new Fruit("apple", "red");
const orange = new Fruit("orange", "orange");

console.log(apple);
console.log(orange);
console.log(apple.name);


//객체지향 프로그래밍에서는 prototype을 기반으로 객체를 만들었지만,
//es6 이후 class를 기반으로 객체지향 프로그래밍을 할 수 있다.