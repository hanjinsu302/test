var divs = document.querySelectorAll("div");
divs.forEach(function (elm) {
  elm.addEventListener("mouseenter", function () {
    var panel = document.querySelector(".highlight");
    panel.classList.toggle("highlight");
    elm.classList.toggle("highlight");
  });
});

window.addEventListener("keyup", function (e) {
  var panel = document.querySelector(".highlight");
  if (
    (e.keyCode == 37 || e.keyCode == 38) &&
    panel != document.querySelectorAll("div")[0]
  ) {
    panel.previousElementSibling.classList.toggle("highlight");
    panel.classList.toggle("highlight");
  }
  if (
    (e.keyCode == 39 || e.keyCode == 40) &&
    panel != document.querySelectorAll("div")[3]
  ) {
    panel.nextElementSibling.classList.toggle("highlight");
    panel.classList.toggle("highlight");
  }
});

window.focus();
