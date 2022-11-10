//각각의 객체로 생성하기

// const apple = {
//   name: "apple",
//   color: "red",
//   display() {
//     console.log("apple");
//   },
// };

// const orange = {
//   name: "orange",
//   color: "orange",
//   display() {
//     console.log("orange");
//   },
// };

//생성자 함수로 생성하기

// function Fruits(name, color) {
//   this.name = name;
//   this.color = color;
// }

// const apple = new Fruits("apple", "red");
// console.log(apple);
// const orange = new Fruits("orange", "orange");
// console.log(orange);
// const banana = new Fruits("banana", "yellow");
// console.log(banana);

//class 문법으로 생성하기
class Fruits {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  display = () => {
    console.log(this.name);
  };
}
const apple = new Fruits("apple", "red");
const orange = new Fruits("orange", "orange");
const banana = new Fruits("banana", "yellow");

console.log(apple);
console.log(orange);
console.log(banana);

apple.display();
orange.display();
banana.display();
