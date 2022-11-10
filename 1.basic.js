// 객체를 손쉽게 만들 수 있는 템플릿

// 1. 생성자 함수 (오래된 고전적인 방법 -> 더이상 쓰이지 않음)
// 2. 클래스 이용
//  EX) 생성자 함수 -> 클래스 변환

// function Fruit(name, color) {
//   this.name = name;
//   this.color = color;
//   this.display = () => {
//     console.log(`${this.name}: ${this.color}`);
//   };
// }
class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수, 모든 class는 기본적으로 생성자가 있어야한다.
  constructor(name, color) {
    //생성자 안에서 객체를 만드는데 필요한 data를 채운다.
    this.name = name;
    this.color = color;
  }
  //클래스에 필요한 함수는 생성자 "밖"에 this키워드를 삭제하고 적어준다.
  //function이라는 키워드 삭제
  display = () => {
    console.log(`${this.name}: ${this.color}`);
  };
}

// apple이라는 객체는 Fruit이라는 클래스의 "인스턴스"이다.
const apple = new Fruit("apple", "red");
// orange이라는 객체는 Fruit이라는 클래스의 "인스턴스"이다.
const orange = new Fruit("orange", "orange");

console.log(apple);
console.log(orange);
console.log(apple.name);

//obj는 일반 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: "tom" };
