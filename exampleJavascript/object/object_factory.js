// function Group(name, first, second) {
//   this.name = name;
//   this.first = first;
//   this.second = second;
//   this.sum = function () {
//     return this.first + this.second;
//   };
// }
function Group(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function () {
    return this.first + this.second;
  };
}

const kim = new Group("Kim", 10, 20);

// const kim = {
//   name: "kim",
//   first: 10,
//   second: 20,
//   sum: function () {
//     //여기서의 this는 method가 속해있는 객체를 가르킨다.
//     return this.first + this.second;
//   },
// };
// const lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
//   sum: function () {
//     return this.first + this.second;
//   },
// };
const park = new Group("park", 1, 22);
console.log(new Group());
console.log(kim.name);
console.log(park.name);
console.log(kim.sum());
console.log(park.sum());
// console.log("kim.sum() : " + kim.sum());
// console.log("lee.sum() : " + lee.sum());

//constructor function
//객체로 생성하던 속성들을 생성자 함수로 묶어 중복을 막는다.
