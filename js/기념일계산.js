let now = new Date();
let firstDay = new Date("2022-05-09");
let lastDay = new Date("2022-11-07");
// getTime() 으로 ms 로 변경 --> 빼주기 위함
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let toLast = lastDay.getTime();
let meetTime = toNow - toFirst;

// 만난 시간 퍼센티지 구하기
let totalMeetTime = toLast - toFirst;
let meetPercent = (meetTime / totalMeetTime) * 100;

// 만난 시간 -> 일수로 변환
let meetDay = Math.round(meetTime / 1000 / 60 / 60 / 24);
document.querySelector("#accent").innerHTML = meetDay + "일";

// 각 기념일 계산
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
  let futureTime = toNow + days * 1000 * 60 * 60 * 24;
  // 일, 시간 반환
  let futureDay = new Date(futureTime);
  console.log(futureDay);

  let year = futureDay.getFullYear();
  let month = futureDay.getMonth() + 1;
  let day = futureDay.getDate();
  document.querySelector(
    "#day" + days
  ).innerText = `${year} 년 ${month} 월 ${day} 일`;

  let a = document.querySelector(".cnt");
  a.style.width = meetPercent + "%";
  a.innerText = meetPercent.toFixed(2) + "%";
}
