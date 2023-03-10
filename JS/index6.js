console.log("connected");
//if문 (조건문)
if (5 > 3) {
  console.log("정답");
}

/*let number = Number(prompt("숫자를 입력해 주세요."));
//number = Number(number);
console.log(typeof number);

if (number > 10) {
  console.log("이 수는 10보다 큽니다");
} else {
  console.log("이 수는 10 작거나 같습니다");
}

if (number > 10) {
  console.log("이수는 10보다 ㅡㅋㅂ니다.");
} else if (number === 10) {
  console.log("입력한 수는 10이네요");
} else {
  console.log("입력한 수는 10 보다 작습니다.");
}

if (number > 100 || number < 0) {
  console.log("입력 값이 잘못 되었습니다");
} else if (number >= 90) {
  console.log("A입니다");
} else if (number >= 80) {
  console.log("B입니다");
} else if (number >= 70) {
  console.log("C입니다");
} else if (number >= 60) {
  console.log("D입니다");
} else {
  console.log("F입니다");
}
*/

//실습
/*
let age = Number(prompt("나이를 입력해주세요"));
console.log(typeof age);

if (age >= 20) {
  console.log("성인입니다");
} else if (age >= 17) {
  console.log("고등학생 입니다");
} else if (age >= 14) {
  console.log("중학생 입니다");
} else if (age >= 8) {
  console.log("초등학생 입니다");
} else {
  console.log("유아 입니다");
} */

// 다른 방법
/*
let age = 15;
if (age >=0 && age<8) {
    console.log('유아')
}else if (age >=8 && age<14) {
    console.log('초등학생')
}else if (age >=14 && age<17) {
    console.log('중학생')
}else if (age >=17 && age<20) {
    console.log('고등학생')
}else if (age >=20 ) {
    console.log('성인')
}          */

// db

let userId = "user01";
let userPw = "1234qwer";

function loginUser() {
  let inputId = prompt("아이디를 입력해주세요.");
  let inputPw = prompt("비밀번호를 입력해주세요.");
  if (userId === inputId) {
    if (userPw === inputPw) {
      alert("로그인 성공");
    } else {
      alert("비밀번호가 틀렸습니다!!");
    }
  } else if (inputId === "") {
    alert("아이디를 입력하지 않았습니다.");
  } else {
    alert("아이디가 틀렸습니다.");
  }
}

//loginUser();

/* 2. switch */
let a = 7;
switch (a) {
  case 3:
    console.log("a=3");
    break;

  case 4:
    console.log("a=4");
    break;
  case 5:
    console.log("a=");
    break;
  default:
    console.log("a=?");
  //break;
}

// switch로 성적 산출 프로그램 변경!
//(조건: 0에서 100 이외의 숫자는 들어오지 않는 다는 것을 가정)
let so = 80;
console.log(parseInt(so / 10));
switch (parseInt(so / 10)) {
  case 10:
    console.log("A+");
    break;

  case 8:
    console.log("B+");
    break;

  case 7:
    console.log("C+");
    break;

  case 6:
    console.log("D+");
    break;

  default:
    console.log("F");
}

//삼함 연산자
let num = 5;
if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}

num % 2 === 1 ? console.log("홀수") : console.log("짝수");

let now = new Date().getHours();
console.log(now);
if (now < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

console.log(now < 12 ? "오전" : "오후");

//반복문
//for문
