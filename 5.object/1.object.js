// Object literal { key: value }
// new Object()
// Object.create();

//Object literal
//key -> 문자, 숫자, 문자열, 심볼
//key: 데이터에 접근할 때 쓸 수 있다.
//value -> 원시값, 객체

let apple = {
  name: "apple",
  "hello-morning": "good morning",
  //helloMornig 과 같이 카멜케이스를 이용하는 것이 더 바람직하다.
  0: 1,
  ["hello"]: "Hello",
};

//속성 즉, 데이터에 접근하기 위해서는
//마침표 표기법 dot notation
// console.log(apple.name);
// console.log(apple.hello);

//대괄호 표기법 bracket notation
// console.log(apple["name"]);
// console.log(apple[0]);
// console.log(apple["hello"]);
// console.log(apple["hello-morning"]);

//속성의 추가
apple.color = "red";
console.log(apple.color);
console.log(apple["color"]);
console.log(apple);

// 속성의 삭제 -> delete 키워드 이용
delete apple.color;
console.log(apple.color);
console.log(apple);
