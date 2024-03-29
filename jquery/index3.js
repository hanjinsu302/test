console.log(window);
console.log(document);

console.log($(window));
console.log($(document));

//mouse event
//click(function(){}) , mouseover(function(){})
// hover(function (){},function(){})
//hover(마우스를 올렸을 때의 동작, 마우스를 떼였을 때의 동작)

//1.click()method
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

//on() == addEventListener()

$(".num").on("click", function () {
  $(this).css("color", "blue");
});

$(".div-hover").hover(
  function () {
    $(this).addClass("hover1");
  },
  function () {
    $(this).removeClass("hover1");
  }
); //인자가 두개

$(window).scroll(function () {
  console.log("scroll!!!");
});

//선택요소.addEventListener('keydown',function(){})

$(".input-key").keydown(function (e) {
  console.log(e.code);
  if (e.code === "ArrowUp") {
    console.log("up");
  } else if (e.code === "ArrowRight") {
    console.log("right");
  } else if (e.code === "ArrowLeft") {
    console.log("left");
  } else if (e.code === "ArrowDown") {
    console.log("down");
  } else {
    console.log("others");
  }
});

/*todo list*/
$("#todo-form").on("submit", function (event) {
  event.preventDefault(); //이벤트 막기

  const todo = $('input[name="todo"]').val();
  $("ul.todos").append(`<li>${todo}</li>`);

  $('input[name="todo"]').val(""); //초기화
});
