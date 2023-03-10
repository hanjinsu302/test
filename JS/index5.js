console.log("연결");

helloWorld1();
function helloWorld1() {
  console.log("helloWorld1");
}

helloWorld1();

function helloWorld2() {
  return "helloWorld2"; //return은 값을 변환
}

helloWorld2();
console.log(helloWorld2());

/*function add(num1, num2) {
  return num1 + num2;
}
function add2(num1, num2) {
  console.log(num1 + num2);
}
let result = add(5, 5);
let result2 = add2(5, 5);

console.log(result, result2);*/

//함수 표현식
//선언 전 호출 불가능
let helloWorld3 = function () {
  console.log("helloworld3");
};
helloWorld3();

//3.화살표 함수
let helloWorld4 = () => {
  console.log("helloworld4");
};

helloWorld4();

//매개 변수 있는 버전!
function sayHello1(text) {
  return text;
}

console.log(sayHello1("안년ㅇ하세요"));

function sayHello2(text, name) {
  return "${text} ${name)";
}
console.log(sayHello2("hi", "진형"));

//실습1
let multify = (num3, num4) => {
  return num3 * num4;
};

console.log(multify(3, 7));

//실습1 같이
function multify1(a, b) {
  return a * b;
}
console.log(multify1(6, 4));

//실습2
function square(num5) {
  return num5 * num5;
}
console.log(square(4));

//실습2 같이
const square2 = function (a) {
  console.log(a ** 2);
};
square2(5);
