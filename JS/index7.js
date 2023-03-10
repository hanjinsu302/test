/*
console.log("con");

for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}

for (let i = 10; i < 10; i += 2) {
  console.log("안녕 ${i}");
}
console.log("=====");
for (let i = 10; i < 10; i += 2) {
  console.log("안녕 ${i}");
}

for (let i = 0; i < 10; i = i + 3) {
  console.log(i);
}

//1부터 5까지 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

//1 부터 n까지의 합
let n = 11;
let sum = 0;
for (let i = 1; i < n + 1; i++) {
  sum = sum + i;
}

console.log(sum);

//배열이랑 같이 쓰는 for문
let fruits = ["사과", "배", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;
for (let i = 0; i < numsArr.length; i++) {
  numsSum = numsSum + numsArr[i];
}
console.log(numsSum);

//1~20 짝수일 때의 합 구하기
let sum2 = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 = sum2 + 1;
  }
}

console.log(sum2);

//실습1
/*let sum3 = Number(prompt("숫자를 입력하세요"));
for (let i = 1; i < num3 + 1; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}
*/

/*//구구단 만들어보기
for (let i = 2; i < 10; i++) {
  console.log("${i}단");
  for (let J = 1; J < 10; J++) {
    console.log("${i}x${J}=${i * J}");
  }
} */
//while
//1번 타임, 조건문을 사용

/*
let n2 = 1;
while (n2 <= 5) {
  console.log(n2);
  n2++;
}

n2 = 10;
while (n2 <= 10) {
  console.log(n2);
  n2--;
}

n2 = 10;
while (n2 >= 1) {
  if (n2 % 2 === 0) {
    console.log(n2);
  }

  n2--;
}

while (true) {
  console.log("안녕");
  if (n2 == 10) {
    n2++;
    break;
  }
}*/

console.log("con");

let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum3 += i;
}

console.log(sum3);
