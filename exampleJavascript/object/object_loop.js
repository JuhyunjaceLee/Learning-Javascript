const memberArray = ["a", "b", "c"];

console.group("Array Group");
var i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd("Array Group");

const memberObject = {
  a1: "a",
  b2: "b",
  c3: "c",
};

console.group("Object Loop");
for (label in memberObject) {
  console.log(label, memberObject[label]);
}
console.groupEnd("Object Loop");
