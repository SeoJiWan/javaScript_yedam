// let min = document.querySelector("#startMin");
// let sec = document.querySelector("#startSec");
// let startBtn = document.querySelector(".start-btn");
// let resetBtn = document.querySelector("#reset-btn");
// let timerId;

// function startTimer() {
//   clearInterval(timerId);
//   reduceTime();
// }

// function reduceTime() {
//   timerId = setInterval(function () {
//     document.querySelector("#display").innerText =
//       min.value + " : " + sec.value;
//     if (sec.value != 0) {
//       sec.value--;
//       document.querySelector("#display").innerText =
//         min.value + " : " + sec.value;
//     } else {
//       if (min.value != 0) {
//         sec.value = 59;
//         min.value--;
//       } else {
//         terminateTimer(timerId);
//       }
//     }
//   }, 1000);
// }

// function terminateTimer(t) {
//   clearInterval(t);
//   min = "";
//   sec = "";
//   document.querySelector("#display").innerText = "타이머 종료";
// }

// function resetTimer() {
//   terminateTimer(timerId);
// }

let min = "";
let sec = "";
let timer = "";
let totalSec;
let curTotalSec;

function startTimer() {
  min = document.querySelector("#startMin").value;
  if (min == "") min = 0;
  sec = document.querySelector("#startSec").value;
  if (sec == "") sec = 0;
  totalSec = Number(sec) + Number(min) * 60;
  console.log(`min : ${min}`);
  console.log(`sec : ${sec}`);
  console.log(`totalSec : ${totalSec}`);

  timer = setInterval(countTimer, 1000);
}

function countTimer() {
  // console.log(totalSec);
  if (sec != 0) {
    sec--;

    curTotalSec = sec + min * 60;
    console.log(curTotalSec);
    document.querySelector(".cnt").style.width =
      ((totalSec - curTotalSec) / totalSec) * 100 + "%";
    // document.querySelector(".cnt").innerText = min + " : " + sec + "";

    document.querySelector("#display").innerText = min + " : " + sec + "";
  } else {
    if (min != 0) {
      min--;
      sec = 59;
    } else {
      clearTimer(timer);
      document.querySelector("#display").innerText = "타이머종료";
    }
  }
}

function clearTimer(t) {
  clearInterval(t);
  document.querySelector("#display").innerText = "";
  document.querySelector("#startMin").value = "";
  document.querySelector("#startSec").value = "";
}

function resetTimer() {
  clearTimer(timer);
}
