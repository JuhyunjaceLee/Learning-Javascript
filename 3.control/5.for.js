// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식){ }

//실행순서:
// 1. 변수선언문을 실행하여, 변수를 초기화 한다.
// 2. 조건식의 값이 참이면 {코드블럭}을 실행한다.
// 3. 증감식을 실행하여 값을 증감시킨다.
// 4. 조건식이 거짓이 될때까지 2번과 3번을 반복한다.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//중첩 for문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

//무한루프
// for(;;){}
//-> for문이 무한루프로 빠지지 않게 멈추는(거짓) 조건식을 짜는게 중요!

//반복문 제어 : break, continue
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("i가 드디어 10이 되었다!");
    break;
  }
  console.log(i);
}
//break -> 특정한 조건에서 반복문을 멈추고 싶을 때 쓰는 키워드

for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue;
    console.log("i가 드디어 10이 되었다!");
    break;
  }
  console.log(i);
}
//continue -> 해당 조건은 건너뛰고, 다음 조건을 실행하는 키워드
