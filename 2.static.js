//"static" 정적 프로퍼티, 정적 매소드
class Fruit {
  static MAX_FRUITS = 100;
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  //공통적으로 사용할 수 있고, 만들어진 인스턴스를 참조할 필요가 없는 경우라면, "static"으로 만들 수 있다.
  //클래스 레벨의 매서드
  //클래스 레벨의 매서드에서는 주어진 data가 정해져있지 않은 상태(=template 상태)=> 따라서 this를 참조할 수 없음
  static makeRandomFruits() {
    return new Fruit("melon", "green");
    //새로운 object를 만들어서 반환하는 함수
  }

  static store() {
    return "Fruits world";
  }

  static add(num1, num2) {
    return num1 + num2;
  }

  //만들어진 object의 주어진 data를 접근해서 무언가를 출력하는 매소드이므로, "인스턴스 레벨"로 남겨두는게 맞다.
  //인스턴스 레벨의 매소드
  display = () => {
    console.log(`${this.name}: ${this.color}`);
  };
}

// class이름 자체에서는 접근이 불가능하다.(class레벨)
// class 자체에는 아직 data들이 채워져있지 않은 template 상태이다.
// 인스턴스 레벨의 프로퍼티 또는 매소드는 반드시 생성된 인스턴스를 통해서 접근과 호출이 가능하다.
// console.log(Fruit.name);
// Fruit.display();

const apple = new Fruit("apple", "red");
const orange = new Fruit("orange", "orange");

console.log(apple);
console.log(orange);
console.log(apple.name);

//만들어진 object에서 호출하는 것이 아니라, 바로 사용할 수 있다.
const melon = Fruit.makeRandomFruits();
console.log(melon);

Fruit.store();

console.log(Fruit.MAX_FRUITS);

console.log(Fruit.add(10, 20));
console.log(Fruit.store());

const a = [10, 20];
const b = a;
console.log(a);

b[0] = 100;

console.log(a);
console.log(b);
