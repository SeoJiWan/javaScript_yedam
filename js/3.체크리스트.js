// 아이템 담을 배열
let itemList = [];
// 중복확인 변수
let dupl;
let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addItem);

function addItem() {
  // 아이템 input 값 받기
  let item = document.querySelector("#item").value;
  // 중복확인하여 푸시
  checkDupl(item);
  if (item != "" && dupl) {
    // 배열에 아이템 추가
    itemList.push(item);
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
  }
  showList();
}

// 중복확인
function checkDupl(item) {
  if (itemList.includes(item)) {
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
    alert("이미 담았다");
    dupl = false;
  } else {
    dupl = true;
  }
}

function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += `<li>${itemList[i]}
    <span class="close" id="${i}">X</span></li>`;
  }
  list += "</ul>";

  document.querySelector("#itemList").innerHTML = list;

  let xMarks = document.querySelectorAll(".close");
  for (let i = 0; i < xMarks.length; i++) {
    xMarks[i].addEventListener("click", removeOne);
  }
}

function removeOne() {
  let id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}

function removeAll() {
  itemList.splice(0, itemList.length);
}
