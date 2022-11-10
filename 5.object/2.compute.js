const obj = {
  name: "Mike",
  age: 20,
};

//코딩하는 시점에, 정적으로 접근이 확정될 때 사용
obj.name;
console.log(obj.name);
obj.age;
console.log(obj.age);

//동적으로 속성에 접근하고 싶을 때 사용
function getValue(object, key) {
  return object[key];
}
console.log(getValue(obj, "name"));
console.log(getValue(obj, "age"));

//동적으로 추가하고 싶을때
function addKey(object, key, value) {
  object[key] = value;
}
addKey(obj, "job", "engineer");
console.log(obj);

//동적으로 삭제하고 싶을때
function deleteKey(object, key) {
  delete object[key];
}
deleteKey(obj, "job");
console.log(obj);
