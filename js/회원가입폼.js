// 아이디, 비밀번호, 비밀번호 확인 가져오기\
let getId = document.querySelector("#user_id");
let getPwd = document.querySelector("#pwd");
let getCkPwd = document.querySelector("#ck_pwd");
// let btn = document.querySelector("#submit_btn");

getId.onchange = checkId;
getPwd.onchange = checkPwd;
getCkPwd.onchange = comparePwd;

// btn.addEventListener = ("click", submit);
// btn.addEventListener = ("click", checkId);

// function submit() {
//   checkId;
//   checkPwd;
//   comparePwd;
//   alert("dddd");
// }

function checkId() {
  if (getId.value.length > 15 || getId.value.length < 4) {
    alert("아이디는 4~15 자리의 영문과 숫자 입력를 입력하세요");
    getId.select();
  }
}

function checkPwd() {
  if (getPwd.value.length < 8) {
    alert("비밀번호는 8자리 이상의 영문과 숫자 입력를 입력하세요");
    getPwd.focus();
  }
}

function comparePwd() {
  if (getCkPwd.value != getPwd.value) {
    alert("비밀번호가 일치하지 않습니다.");
    getCkPwd.value = "";
    getCkPwd.focus();
  }
}
