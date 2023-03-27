const lis = document.querySelectorAll("li");
for (let li of lis) {
  li.classList.toggle("done");
  li.classList.toggle("todo");
}
