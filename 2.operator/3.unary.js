// 단항연산자(Unary Operators)
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a;
console.log(a); // -5
console.log(-a); // 5

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

console.clear();

// +숫자가 아닌 타입들을 숫자로 변환해줌
console.log(+false); //0
console.log(+null); //0
console.log(+""); //0
console.log(+true); //1
console.log(+"text"); //NaN
console.log(+undefined); //NaN

// !!boolean이 아닌 타입들을 boolean으로 변환해줌
console.log(!!1);
console.log(!!0);
