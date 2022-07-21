// 아이템 담을 아이템 리스트
let itemList = [];
// 중복 확인 변수
let dupl;
// 선택 삭제를 위한 클릭된 아이템 리스트
let clickedList = [];

// 추가 버튼 클릭 시 추가 이벤트 발생
document.querySelector("#add").addEventListener("click", addItem);

// 엔터 입력시 추가 이벤트 발생
document.querySelector("#item").addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addItem();
  }
});

// 선택삭제 버튼 클릭 시 선택 삭제 이벤트 발생
document
  .querySelector("#remove_selected")
  .addEventListener("click", removeSelected);

// 전체 삭제 버튼 클릭 시 전체 삭제 이벤트 발생
document.querySelector("#remove_all").addEventListener("click", removeAllItems);

// 아이템 추가 메서드
function addItem() {
  // 아이템 값 받아오기
  let item = document.querySelector("#item").value;
  // 중복확인
  checkDupl(item);
  // 아이템 값이 있다면 배열에 추가
  if (item != "" && dupl) {
    itemList.push(item);
    // 아이템 입력창 초기화
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
  }
  // 아이템 리스트 출력
  showList();
}

// 중복확인 메서드
function checkDupl(item) {
  // 아이템이 아이템 리스트에 있다면
  if (itemList.includes(item)) {
    alert("이미 담은 준비물입니다 :)");
    // 아이템 입력창 초기화
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
    dupl = false;
  } else {
    dupl = true;
  }
}

// 아이템 출력 메서드
function showList() {
  // 아이템 리스트 for 문으로 ul li 태그 작성
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += `<li class="items" id='${i}'>
              ${itemList[i]}
              <span class="close" id="${i}">X</span>
            </li>`;
  }
  list += "</ul>";

  // ul li 태그 작성 div 에 뿌리기
  document.querySelector("#itemList").innerHTML = list;

  // xMarks 태그 받아오기 --> 삭제 이벤트 발생
  let xMarks = document.querySelectorAll(".close");
  for (let i = 0; i < xMarks.length; i++) {
    xMarks[i].addEventListener("click", removeItem);
  }

  let items = document.querySelectorAll(".items");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", clickedItem);
  }
}

// 아이템 1개 삭제 메서드
function removeItem() {
  let id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}

// 아이템 전체 삭제 메서드
function removeAllItems() {
  itemList.splice(0, itemList.length);
  showList();
}

// 아이템 선택 메서드
function clickedItem() {
  this.style.color = "white";
  this.style.backgroundColor = "black";
  clickedList.push(this.getAttribute("id"));
  console.log(clickedList);
}

// 선택 아이템 삭제
function removeSelected() {
  // console.log("error");
  for (let i = 0; i < clickedList.length; i++) {
    itemList.splice(clickedList[i], 1);
    // console.log("error2");
  }
  // console.log(clickedList);
  // console.log(itemList);
  clickedList.splice(0, clickedList.length);
  showList();
}
