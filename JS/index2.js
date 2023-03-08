/*
자료형
-기번
-strong
-ㅜㅕㅡㅠㄱㅅ
-boolean
-null
-underfined


-객체
 -array
 -obbject

*/

let myName = "길동";
let email = "jinsu302@naver.com";
let city = '"서울"';

console.log(myName);
console.log(email);
console.log(city);

console.log("내 이름은", myName, "이고 이메일은", email, "입니다");
console.log("내 이름은" + myName + "이고 이메일은" + email + "입니다");
//템플릿 리터널//
console.log(`내 이름은 ${myName}이고 이메일은 ${email}입니다`);
let gildng = `내 이름은 ${myName}이고 이메일은 ${email}입니다`;
console.log(gildng);

let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);

console.log("apple" - 3);

let checked = true;
let unchecked = false;

console.log(checked);
console.log(unchecked);

let undef;
console.log(undef);

let empty = null;
console.log(empty);

let fruits = ["orange", "apple", "grape"];
let fruits2 = new Array("orangr", "apple", "grape");

console.log(fruits[0], fruits[1]);

let data = [1, "jinsu", false, null, undefined];
console.log(data[4]);

// array : 2차원 배열//

let korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];

console.log(korean[0][0]);
console.log(korean[1][1]);

let letter = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(letter[3][0]);
console.log(letter[1][3]);
console.log(letter[0][1]);
console.log(letter[0][3]);
console.log(letter[2][2]);

//3차원 배열
let nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

// 7. object

let cat = {
  name: "나비",
  age: 1,
  isCute: true, //항상 소문자로 이루어짐
  mew: function () {
    return "냐옹";
  },
};

console.log(cat);
console.log(cat.name);
console.log(cat.age);

//대괄호 표기법
//오브젝트이름['key이름']
console.log(cat["name"]);

let me = {
  name1: "진수",
  age1: 26,
  inMe: true,
  mew1: function () {
    return "미";
  },
};

console.log(me);
console.log(me.name1);
console.log(me.age1);

//typeof 자료형을 알려주는
console.log(typeof "무자");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof cat);
console.log(typeof nums);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);

//형 변환
let mathscore = prompt("수학점수를 입력하세요"); //80
let engscore = prompt("영어점수를 입력하세요"); //90

//'8090'/2

let avg = (mathscore + engscore) / 2;
console.log(avg);

//1 -> 문자 string()이용
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));
console.log(typeof str1);
console.log(typeof str1.toString());

//2.
let n1 = true;
let n2 = false;
let n3 = "123.9";

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

console.log(typeof Number(n1));
console.log(typeof Number(n2));
console.log(typeof Number(n3));

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(parseInt(n3));
