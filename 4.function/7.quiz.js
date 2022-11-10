// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함

// 1. 최대값은 5, 순회하는 숫자를 다 출력하기
// 2. 최대값은 5, 순회하는 숫자의 두배 값을 다 출력하기
// function iterate(max, action){ }

//1.
function print(max, action) {
  for (let i = 0; i < max + 1; i++) {
    action(i);
  }
}

function action(i) {
  console.log(i);
}

print(5, action);

function doubleAction(i) {
  console.log(i * 2);
}
print(5, doubleAction);

setTimeout(() => {
  console.log("3초 뒤에 실행됩니다.");
}, 3000);
