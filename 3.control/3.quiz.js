// 퀴즈!

let num = 2;

//num의 숫자가 짝수이면, '짝수'
// 홀수이면, '홀수' 출력해보기

//1) if문 이용하기
if (num % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

//2) 삼항 연산자
num % 2 === 0 ? console.log("짝수") : console.log("홀수");

//코드의 중복을 피하고 간결하게 코드짜기
let result = num % 2 === 0 ? "짝수" : "홀수";
console.log(result);
