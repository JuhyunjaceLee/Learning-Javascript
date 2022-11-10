const memberArray = ["a", "b", "c"];
// console.log("memberArray[1]:", memberArray[1]);

const memberObject = {
  a: "a",
  b: "b",
  c: "c",
};
memberObject.c = "cc"; //수정
// console.log("memberObject.c:", memberObject.c); //.으로 접근 가능
// console.log("memberObject['c']:", memberObject["c"]); //배열처럼 []로도 접근 가능

memberObject.d = "d"; //추가
delete memberObject.a; //삭제
// console.log("after delete memberObject.a:", memberObject.a);
// console.log(memberObject.a);
// console.log(memberObject.c);
// console.log(memberObject.d);

for (const key in memberObject) {
  console.log(memberObject[key]);
}
