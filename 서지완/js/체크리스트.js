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
  .addEventListener("click", removeSelectedItem);

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
  // 선택된 아이템들은 스타일 변환
  this.style.color = "white";
  this.style.backgroundColor = "black";
  // 선택리스트에 추가 -> 원소 = itemList 원소들의 인덱스
  clickedList.push(this.getAttribute("id"));
  console.log(clickedList);
  console.log(itemList);
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
}
function removeSelectedItem() {
  // 선택 리스트에 있는 원소들을 이용하여 아이템 리스트의 아이템 삭제 하고 0 삽입
  // --> 0 삽입이유 : 여러 개 삭제 시 길이가 줄어들어 인덱스변화를 방지하기 위함
  for (let i = 0; i < clickedList.length; i++) {
    console.log(itemList[clickedList[i]]);
    itemList.splice(clickedList[i], 1, 0);
  }
  // 아이템 리스트에서 0을 제외한 원소들로만 tmp 구성
  let tmp = itemList.filter((elem) => elem != 0);
  // 아이템 리스트 전체 삭제
  itemList.splice(0, itemList.length);
  // tmp 의 원소들을 아이템 리스트에 복사
  itemList = tmp;
  // 클릭 리스트 초기화
  clickedList.splice(0, clickedList.length);
  // 아이템 리스트 출력
  showList();
}
