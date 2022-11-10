function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function () {
    return this.first + this.second;
  };
}

const kim = new Person("Kim", 10, 20);
const lee = new Person("Lee", 10, 10);

console.log("kim.sum() : ", kim.sum());
console.log("lee.sum() : ", lee.sum());

//객체 복사하기
// const fruit1 = { color: "red" };
// const fruit2 = { color: "blue", size: "big" };
// const fruit3 = { color: "black" };
// const mixed = Object.assign({}, fruit1, fruit2, fruit3);
// console.log(mixed.color);
// console.log(mixed.size);
