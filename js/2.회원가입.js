let id = document.querySelector("#user-id");
let pwd = document.querySelector("#user-pw1");
let ckPwd = document.querySelector("#user-pw2");

// 가입하기 클릭 시 이벤트 발생
let btn = document.querySelector("#btn");
btn.addEventListener("click", checkInfo);

// id.onchange = checkInfo;

// 탭 키 클릭 시 이벤트 발생

// TAB 키는 이미 포커스를 이동하는 예약된 이벤트를 가지고 있습니다.
// 바로 onkeypress 이벤트 시점이 예약된 처리를 하는 시점입니다.
// 그렇기 때문에 스크립트 상의 이벤트가 무시 되는 것
// --> onkeydown 으로 사용
// , "user-pw1", "usesr-pw2"
document.querySelector("#user-id").addEventListener("keydown", function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    checkInfo();
  }
});

// Enter 키 눌렀을 때 이벤트 발생
// document.querySelector("#user-id").addEventListener("keypress", function (e) {
//   if (e.keyCode === 13) {
//     e.preventDefault();
//     checkInfo();
//   }
// });

function checkInfo() {
  if (id.value.length > 15 || id.value.length < 4) {
    alert("아이디 부적합");
    document.querySelector("#user-id").value = "";
    return;
  }
  if (pwd.value.length < 8) {
    alert("비밀번호 부적합");
    document.querySelector("#user-pw1").value = "";
    return;
  }
  if (pwd.value != ckPwd.value) {
    alert("비밀번호 불일치");
    document.querySelector("#user-pw2").value = "";
    return;
  }
}
