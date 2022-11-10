//문자열타입
let string = "안녕하세요";
console.log(string);

string = `안녕!`;
console.log(string);

string = '"안녕!"';
console.log(string);

string = "'안녕!'";
console.log(string);

//특수문자 출력하는 법(\)
//줄바꿈(\n)
string = "안녕!\n반가워!";
console.log(string);

//탭(\t)
string = "안녕!\t반가워!";
console.log(string);

//역슬래시(\\)
string = "안녕!\\반가워!";
console.log(string);

//템플릿 리터럴(Template Literal ` `)
let id = "name";
let greetings = "'안녕!, " + id + "즐거운 하루 보내세요!'";
console.log(greetings);

greetings = `'안녕, ${id}즐거운 하루 보내세요!'`;
console.log(greetings);
