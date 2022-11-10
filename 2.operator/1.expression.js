let b; //선언문

b = 2; // 표현식이면서, 할당문

// let a = let b;
// 값이 아닌 문을 값에 할당하려고 해서 에러가 발생

let a = (b = 2);
console.log(a);
