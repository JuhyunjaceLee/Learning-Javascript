const kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    //여기서의 this는 method가 속해있는 객체를 가르킨다.
    return this.first + this.second;
  },
};
console.log(kim.sum());
