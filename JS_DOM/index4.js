console.log("con");
let btn1 = document.querySelector(".btn--black");
let btn2 = document.querySelector(".btn--green");
let btn3 = document.querySelector(".btn--blue");
let btn4 = document.querySelector(".btn--red");
console.log(btn1, btn2, btn3, btn4);

btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭 하셨넹");
});

btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "aqua";
});

let container = document.getElementById("container");
console.log(container);

btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "hi";
  container.append(div);
});

btn3.addEventListener("click", changeColor);

function changeColor() {
  let divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }

  divs[divs.length - 1].style.backgroundColor = "yellow";
}

btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.sty = "#000";
}

console.log(window);
window.addEventListener("scroll", function (event) {
  console.log(event);
  console.log(this.scrollY);

  let pos = this.document.querySelector(".pos");
  if (scrollY > 700) {
    pos.style.opacity = "1";
  }
});

const btn = document.querySelector("button");
const input = document.querySelector("input");
//console.log(btn, input); 지우기
btn.addEventListener("click", function (event) {
  console.log(event);
});

input.addEventListener("keydown", function (e) {
  console.log(e.code);
  console.log(e.key);
  //console.log(e.keycode);
  if (e.code === "ArrowUp") {
    console.log("위쪽 방향키를 누르셨군요");
  } else if (e.code === "ArrowDown") {
    console.log("아래쪽 방향키를 누르셨군요");
  } else if (e.code === "ArrowLeft") {
    console.log("왼쪽 방향키를 누르셨군요");
  } else if (e.code === "ArrowRight") {
    console.log("오른쪽 방향키를 누르셨군요");
  } else {
    console.log("others");
  }
});

const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");
//console.log(todoForm, todos);

todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();
  //실제로 폼이 제출되는 것을 막음
  //입네트 전달을 막음

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput);
  console.dir(todoInput);
  console.log(todoInput.value);

  /*const todo = todoInput.value;

  const newTodo = document.createElement("li");
  newTodo.append(todo);
  todos.append(newTodo);*/
  const todo = todoInput.value.trim();

  if (todo !== "") {
    const newTodo = document.createElement("li");
    newTodo.append(todo);
    todos.append(newTodo);
  }

  //입력값 초기화
  todoInput.value = "";
});

const chgInput = document.querySelector("#change-input");
chgInput.addEventListener("change", function () {
  console.log("change!!");
});
chgInput.addEventListener("input", function () {
  console.log("change?");
  let div = document.querySelector(".intro");

  div.innerHTML = chgInput.value;
});
