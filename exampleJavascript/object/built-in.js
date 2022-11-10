//객체지향 프로그래밍 자바스크립트의 특징 중 하나
//Math라는 "객체"의 활용

//파이 값 출력
console.log("Math.PI : ", Math.PI);

//method
//실행할 때 마다 랜덤한 수 출력
console.log("Math.random() : ", Math.random());

//소수자리 버림(정수 출력)
console.log("Math.floor(정수가 아닌 수) : ", Math.floor(5.152));
console.log("Math.floor(정수가 아닌 수) : ", Math.floor(7.89));

//서로 연관된 변수와 함수를 "객체"로 묶은 것
const MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(val)", MyMath.floor(1.23));
