//산술 연산자(Arithmetic Operators)

// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나누고 나머지 값
// ** 지수(거듭제곱) es7

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); //es7
console.log(Math.pow(5, 2));

// +(더하기) 연산자의 주의점!
let text = "문자열" + "합치기";
console.log(text);

let plus = "1" + 1;
console.log(plus);
console.log(typeof plus);
//문자열과 숫자를 더하면 문자열로 변환됨
