//함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 절대절대 X
//상태변경이 필요한 경우에는, 새로운 상태(오브젝트 또는 값)를 만들어서 반환해야 한다.
//원시값 -> 값에 의한 복사
//객체값 -> 참조에 의한 복사(메모리주소)

// function display(num) {
//   num = 40;
//   console.log(num);
// }
// const value = 4;
// display(value);
// console.log(value);

function displayObj(obj) {
  obj.name = "Bob";
  console.log(obj);
}
const mike = {
  name: "Mike",
};
// displayObj(mike);
// displayObj(mike.name);
// displayObj("Bob");

displayObj(mike);
displayObj({ name: "roy" });

function changeName(obj) {
  return { ...obj, name: "Julia" };
}
//함수 이름부터 변경하는 느낌을 주도록 짓기!
//반환할때는 새로운 오브젝트 만들기!
