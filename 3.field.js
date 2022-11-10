//접근제어자 -> 캡슐화
// private(#), public(기본), protected
class Fruit {
  //생성자가 제공하는 데이터는 생략이 가능하다.
  #name;
  #color;
  //class가 만들어지자마자 type은 초기화되어 제공된다.
  #type = "fruit";
  constructor(name, color) {
    this.#name = name;
    this.#color = color;
  }
  #display = () => {
    console.log(`${this.name}: ${this.color}`);
  };
}

const apple = new Fruit("apple", "red");
// apple.#name = "orange"; //#feild는 외부에서 접근이 불가능함
console.log(apple);

// apple.display();
