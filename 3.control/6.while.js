// while(조건){ }
// 조건이 false가 될때까지 { } 코드를 무한정 반복 실행

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log(i);
  if (i === 5) {
    break;
  }
  i++;
}

let isFalse = false;
do {
  console.log("일단 1번은 실행");
} while (isFalse);
