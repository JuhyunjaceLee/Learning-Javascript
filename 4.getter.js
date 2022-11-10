// 접근자 프로퍼티(Accessor Property)
//class의 변수처럼 보이기는 하지만, 실제로는 함수를 말한다.

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName} ${this.firstName}`;
  }
  //접근
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  //할당
  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("수지", "김");
// student.firstName = "안나";

console.log(student.firstName);
console.log(student.lastName);
//firstName과 lastName은 프로퍼티처럼 접근이 가능하지만, 함수는 호출하듯이 접근해야한다.
//함수처럼 사용하기 싫을때 쓸 수 있는 키워드가 getter이다.

//함수 사용의 이유?
//함수가 아닌 프로퍼티로 만들 수 있지 않을까 하지만,
//생성자가 만들어진 이후 이미 fullName도 생성이 완료된 상태이다.
//따라서 생성자가 만들어진 이후에 수정하게 되면, 업데이트가 불가하다.
// console.log(student.fullName());
console.log(student.fullName);
student.fullName = "김철수";
