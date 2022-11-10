// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a, b) {
  // return a + b;
  // return undefined;
}

const result = add(1, 2);
// console.log(result);

function print(text) {
  console.log(text);
}

// const memo = print(1000);
// console.log(memo);

// print("text");
// print("2");
// print(100);

// return을 함수 중간에 하게 되면 함수가 종료됨
// ex) 조건이 맞지 않는 경우, return을 만나 함수를 종료함.
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}

print(10); //10
print(-10); //조건이 맞지 않는 결과는 출력되지 않음.
