// 아이템들을 담을 아이템 리스트
let itemList = [];
// 아이템 중복확인 위한 변수
let dupl;
// 추가 버튼에 대한 이벤트
let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);
// 전체삭제 버튼에 대한 이벤트
let removeAllBtn = document.querySelector("#remove_all");
removeAllBtn.addEventListener("click", removeList);

// 엔터 입력시 이벤트 발생
document.querySelector("#item").addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addList();
  }
});

// 아이템 추가 메서드
function addList() {
  // 아이템 값 담음
  let item = document.querySelector("#item").value;
  // console.log(item);

  // 중복체크 실행
  checkDupl(item);

  // 조건을 확인하고 아이템 리스트에 푸시
  if (item != "" && dupl) {
    itemList.push(item);
    // console.log(itemList);

    // 아이템 input 창 초기화
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();

    // 아이템 리스트 출력
    showList();
  }
}

// 중복확인 메서드
function checkDupl(item) {
  // 입력한 아이템이 아이템 리스트에 있는지 확인
  if (itemList.includes(item)) {
    alert("이미 담은 준비물입니다.");
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
    dupl = false;
  } else {
    dupl = true;
  }
}

// 아이템리스트 출력 메서드 (테이블)
function showList() {
  // 아이템 리스트를 for 문을 돌면서 테이블 태그로 생성
  let list = "<table>";
  for (let i = 0; i < itemList.length; i++) {
    list += `<tr>
            <td class="i">${itemList[i]}</td>
            <td class="x" id="${i}">X</td>
            </tr>`;
  }
  list += "</table>";

  // 테이블 태그 출력
  document.querySelector("#item_list").innerHTML = list;

  // 아이템 리스트에서 삭제를 위한 X 태그를 담음
  let xMarks = document.querySelectorAll(".x");
  for (let i = 0; i < xMarks.length; i++) {
    // 여러 개 xMarks 중 유저가 xMark 를 선택하면 해당 xMark 에서 삭제 이벤트 발생
    xMarks[i].addEventListener("click", removeOne);
  }
}

// xMark 누르면 삭제 메서드
function removeOne() {
  // getAttribute() -> 파라미터에 해당하는 속성을 가져옴
  // this -> xMarks[i] 에서 선택되는 아이
  let id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}

// 전체 삭제 메서드
function removeList() {
  // 아이템 리스트 전체 삭제
  itemList.splice(0, itemList.length);
  showList();
}
