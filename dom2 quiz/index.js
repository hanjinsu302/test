const commentForm = document.querySelector("form");
const commentsList = document.querySelector(".comment-list");

commentForm.addEventListener("submit", (e) => {
  //addEventListener:선택요소에 지정한 이벤트가 발생하면 약속된 명령어 실행시키는 메소드
  e.preventDefault();
  const userid = document.querySelector('input[name="userid"]'); // querySelector:요소 선택자를 사용해서 자신이 가져오소 싶어하는 요소를 가져오는 메소
  const comment = document.querySelector('input[name="comment"]');
  const inputId = userid.value.trim("");
  const inputComment = comment.value.trim("");
  if (inputId !== "" && inputComment !== "") {
    const newInput = document.createElement("li"); //html의 요소를 추가,()=html의 요소인 태그명 작성
    newInput.innerHTML = `<b>${inputId}</b> - ${inputComment}`;
    commentsList.append(newInput); //commentsList값에 newInput값을 자식 요소로 추가
  }
  userid.value = ""; //아이디값 초기화
  comment.value = ""; //댓글 값 초기화
});
