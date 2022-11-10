const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}: apple`);
    //객체 안에서 자기 자신의 속성에 접근하기 위해선 'this'라는 키워드를 사용한다.
  },
};

//display함수 호출해보기
apple.display();
