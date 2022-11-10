// 동등 비교 관계 연산자(Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입 둘 다 같음
// !== 갑과 타입이 다름

console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false

console.log(2 == "2"); // true
//'2'를 number로 형 변환 후 값을 비교한다.

console.log(2 === "2"); // false
// 값 자체는 같지만, 타입이 다르다. **

console.log(true == 1); // true
//1을 boolean으로 형 변환하면 true이기 때문에
console.log(true === 1); // false

console.log(false == 0); // true
//0을 boolean으로 형 변환하면 false이기 때문에
console.log(false === 0); // false

console.clear();

const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); // false
// 둘이 가지고 있는 key와 value가 동일하기는 하지만 둘의 메모리 주소가 다르기 때문에 같지 않다.
console.log(obj1 === obj2); // false
// 값 자체가 다르므로 타입도 다르다.

console.log(obj1.name == obj2.name); // true
// name이라는 key가 가지고 있는 value(값)이 'js'로 동일하다.
console.log(obj1.name === obj2.name); // true
// 값과 타입 모두 동일하다.

let obj3 = obj2;

console.log(obj3 == obj2); // true
// 동일한 메모리 주소를 가지고 있으므로 같다.

console.log(obj3 === obj2); // true
// 값과 타입 모두 동일히다.
