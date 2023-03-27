/*val()*/
function getValue() {
  let value = $("input").val();
  alert(value);
}
function setValue() {
  $("input").val("설정!");
}

/*css()*/
function changeCssJS() {
  let span = document.querySelector("span");
  span.style = "font-size: 2-px; color:red;";
}
function changeCssJquery() {
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
  console.log($(span).css("color"));
}

/* attr() */
function changeAttrJS() {
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}
function changeAttrJquery() {
  $("a").atty("href", "https://www.daum.net");
}

/* text() */
function changeTextJS() {
  let p = document.querySelector(".p-text");
  p.innerText = "js로 바구겠씁니다";
}
function changeTextJquery() {
  $(".p-text").text("jquery로 바꾸겠습니다");
}
/*html() */
function changeHtmlJS() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "js change";
}
function changeHtmlJquery() {
  $(".p-html").html("jquery change");
}

/*요소 추가하기 */

/*append() */
function appendJS() {
  let li = document.createElement("li");
  li.innerText = "append()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.append(li);
}
function appendJquery() {
  $(".colors").append("<li>append()로 추가된 jquery</li>");
}

/*prepend()요소*/
function prependJS() {
  let li = document.createElement("li");
  li.innerText = "prepend()로 추가된 js";
  let ul = document.querySelector(".colors");
  ul.prepend(li);
}
function prependJquery() {
  $(".colors").prepend("<li>prepend()로 추가된 jquery</li>");
}

/*after()요소*/
function afterJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "after() 형제 요소 js";

  green.after(li);
}
function afterJquery() {
  $(".green").after("<li>after()로 추가된 jquery</li>");
}

/*before요소*/
function beforeJS() {
  let green = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "before() 형제 요소 js";

  green.before(li);
}
function beforeJquery() {
  $(".green").before("<li>before()로 추가된 jquery</li>");
}

/*요소삭제*/
/*remove() */
function removeJS() {
  let li = document.querySelector("#li2");
  li.remove();
}
function removeJquery() {
  $("#li2").remove();
}

/*empty()*/
function emptyJS() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}
function emptyJquery() {
  $("ul.nums").empty();
}

/*요소 탐색 */
function findParent() {
  //parent():보모요소 반환
  console.log($(".child2").parent());
}

function findParents() {
  //parents():부모요소 전부 반환
  //js는 없음
  console.log($(".chlid2").parents());
}

function findNext() {
  //next(): nextSibling()와 동일
  console.log($(".child2").next());
}

function findPrev() {
  //prev():
  console.log($(".child2").prev());
}

function findChildren() {
  //children();자식 요소 모두 반환
  console.log($(".parent").children());
  console.log(document.querySelector(".parent").children);
}

//클래스 조작
function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  // $("#hi").removeClass("fs-50");
  $("#hi").removeClass(); //클래스 모두 삭제
}
function hasClass() {
  //true나 false로 반환
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
