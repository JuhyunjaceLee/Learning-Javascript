//원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; //1
b = 2;

console.log(a);
console.log(b);

//객체타입은 값이 아닌, 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  name: "사과",
};
let orange = apple;

console.log(orange);
orange.name = "오렌지";
console.log(orange.name);
console.log(apple.name);
