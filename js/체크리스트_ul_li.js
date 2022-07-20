let itemList = [];
let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
  // 아이템 input 에서 아이템 값 받기
  let item = document.querySelector("#item").value;
  // console.log(item);

  // 아이템 값이 있으면 아이템 리스트에 추가
  if (item != "") {
    itemList.push(item);
    console.log(itemList);
    // 추가 후 input 에 남은 데이터 삭제
    document.querySelector("#item").value = "";
    // input 에 포커스
    document.querySelector("#item").focus();
    // 아이템 리스트 출력
    showList();
  }
}

function showList() {
  // 아이템 리스트에서 반복물을 돌아 ul li 태그를 생성
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    // span 태그의 X 표시는 id 를 인덱스로 --> 삭제할 때 배열의 인덱스로 삭제할 것
    list +=
      "<li>" + itemList[i] + `<span class="close" id="${i}">X</span></li>`;
  }
  list += "</ul>";

  // ul li 태그문 id 가 item_list 인 div 에 추가
  document.querySelector("#item_list").innerHTML = list;

  // 아이템 리스트에서 삭제를 위한 X 태그를 담음
  let xMarks = document.querySelectorAll(".close");
  for (let i = 0; i < xMarks.length; i++) {
    // 여러 개 xMarks 중 유저가 xMark 를 선택하면 해당 xMark 에서 삭제 이벤트 발생
    xMarks[i].addEventListener("click", removeList);
  }
}

function removeList() {
  // getAttribute() -> 파라미터에 해당하는 속성을 가져옴
  // this -> xMarks[i] 에서 선택되는 아이
  let id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}
