// console.log("visual studio code");
// let a = 1;
// let b = 2;
// console.log(a + b);
// console.log("안녕");

// // let input = prompt("숫자를 입력하세요");
// let input = 3;
// // let check = confirm('입력 값이 숫자 맞습니까?');
// // console.log('입력값 : ' + input + ', 숫자 : ' + check + '입니다.');
// let num = Number(input);
// let str = String(input);
// console.log("-----더하기------");
// console.log("input : " + str + "," + (input + str));
// console.log("input : " + num + "," + (input + num));
// console.log("input : " + num + "," + (num + num));

// console.log("-----빼기------");
// console.log("input : " + str + "," + (input - str));
// console.log("input : " + num + "," + (input - num));
// console.log(`input : ${num},${num - num}`);

// let sum = function (a, b) {
//   let z = a + b;
//   return z;
// };

// console.log(sum(1, 1));
// console.log(sum(1, 1));
// console.log(sum(6, 1));

// let multiple = (a, b) => a * b;
// console.log(multiple(2, 4));

// // 콜백 함수
// function callTenTimes(func) {
//   for (let i = 0; i < 10; i++) {
//     func(i + 1);
//   }
// }

// let callback = (i) => console.log(`${i} 번째 함수호출`);

// callTenTimes(callback);

// // 리턴되는 함수
// function returnFunc() {
//   return function () {
//     console.log("helloFuction");
//   };
// }
// returnFunc()();

// // 자기 호출 함수
// (function () {
//   console.log("자기 호출 함수");
// })();

// function orderSet(burger) {
//   return function orderBeverage(beverage) {
//     return function orderSide(side) {
//       return function orderKetchup(yn) {
//         return function orderChiken(count) {
//           console.log(
//             "세트:" +
//               burger +
//               " , " +
//               beverage +
//               " , " +
//               side +
//               " , 케첩(" +
//               yn +
//               "), 조각치킨(" +
//               count +
//               "개)"
//           );
//         };
//       };
//     };
//   };
// }
// let order = orderSet("치즈버거")("콜라")("프렌치후라이")("y")("2");

// let orderSet2 = (burger) => (beverage) => (side) => (yn) => (count) => {
//   console.log(
//     "세트:" +
//       burger +
//       " , " +
//       beverage +
//       " , " +
//       side +
//       " , 케첩(" +
//       yn +
//       "), 조각치킨(" +
//       count +
//       "개)"
//   );
// };
// let order2 = orderSet2("a")("b")("c")("d")("e");

// var a = 1;
// var b = 5;
// function outfunc() {
//   function innerfunc() {
//     a = b;
//   }
//   console.log(a); // 1
//   a = 3;
//   b = 4;
//   innerfunc();
//   console.log(a); // 4
//   var b = 2;
//   console.log(b); // 4
// }
// outfunc();
// console.log(b); // 5

// function clone(obj) {
//   let output = {};

//   for (let i in obj) {
//     output[i] = obj[i];
//   }

//   return output;
// }

// let orig = { a: 10, b: 20 };
// let ref = orig;
// let cloned = clone(orig);
// orig.a = 88;

// console.log(orig);
// console.log(ref);
// console.log(cloned);

// function Product(name, weight, price) {
//   this.name = name;
//   this.weight = weight;
//   this.price = price;
// }
// Product.prototype.caculate = function (weight) {
//   return this.price * (weight / this.weight);
// };
// let product = new Product("돼지삼겹살", 100, 1690);
// console.log(product.name + " : " + product.caculate(300) + "원");

// let friends = {
//   brand: "카카오",
//   original: [
//     { name: "라이언", age: 5 },
//     { name: "어피치", age: 4 },
//   ],
//   newbee: { name: "네온", age: 3 },
// };

// console.log(friends["newbee"]);
// console.log(friends.original[0].name); // 라이언
// console.log(friends["original"][0].name); // 라이언
// console.log(friends["newbee"]["name"]);
// console.log("-------------------------------------------");

// // 속성 값 얻기
// console.log(friends.original[0]); // name: "라이언", age: 5
// console.log(friends.original[1].age); // 4
// console.log(friends.original.length); // 2
// console.log(friends.original[0].name); // 라이언
// console.log(friends.newbee.name); // 네온
// console.log("-------------------------------------------");

// // 속성 추가
// friends.newbee["sex"] = "female";
// // 객체 배열로 변환
// friends["newbee"] = [friends["newbee"], { name: "콘", age: 2 }];
// console.log(friends.newbee); // {name: "네온", age: 3, sex: "female"}, {name: "콘", age: 2}
// console.log("-------------------------------------------");

// // 속성 수정
// friends.newbee[0]["sex"] = "male";
// friends.newbee.sex = "unknown";
// console.log(friends.newbee); // {name: "네온", age: 3, sex: 'male}, {name: "콘", age: 2}, sex: 'unknown'
// console.log("-------------------------------------------");

// // 속성 삭제
// delete friends.newbee[0].sex;
// // 배열의 마지막 요소 삭제
// friends.newbee.pop();
// friends.newbee.pop();
// delete friends.brand;
// console.log(friends);
// console.log("-------------------------------------------");

// === 배열 220718 ===
let seasons = ["봄", "여름", "가을", "겨울"];
let color = ["초록", "빨강", "갈색", "흰색"];

console.log(seasons);
console.log(seasons.length);
console.log(seasons[2]);

// for문으로 배열 출력
console.log("=== for 문 ===");
for (let i = 0; i < seasons.length; i++) {
  console.log(seasons[i]);
}

// forin --> 인덱스를 가져옴
console.log("=== forin 문 ===");
for (let i in seasons) {
  console.log(seasons[i]);
}

// forof --> 요소를 가져옴
console.log("=== forof 문 ===");
for (let elem of seasons) {
  console.log(elem);
}

// foreach
console.log("=== foreach 문 ===");
seasons.forEach((element) => {
  console.log(element);
});

// 배열 두개 컨캣
let concatArr = seasons.concat(color);
console.log(concatArr);
console.log(concatArr.length);

// 배열 조인
console.log(seasons.join("::"));

// 배열 리버스
// console.log(seasons.reverse());

// 요소 추가
color.push("검정"); // 배열의 끝에 추가
color.unshift("주황"); // 배열의 시작에 추가
console.log(color);

// 요소 삭제
// color.pop("검정"); // 배열의 마지막 원소 삭제
// color.shift("주황"); // 배열의 첫 원소 삭제
console.log(color);

// 원하는 인덱스 요소 삭제 - splice(시작번호, 삭제 개수, 추가요소)
// color.splice(2);
// console.log(color);
// color.splice(2, 3);
// console.log(color);
// color.splice(2, 3, "노랑");
// console.log(color);

// 요소 slice
// let myColor = color.splice(3);
// console.log(myColor);
// console.log(color.splice(1, 4));

// 배열인지 확인
console.log(Array.isArray(color));

// 요소의 인덱스 반환
console.log(color);
console.log(color.indexOf("갈색"));
console.log(color.indexOf("파랑"));

console.log(color.lastIndexOf("갈색"));
console.log(color.lastIndexOf("파랑"));

// foreach()
color.forEach(function (elem, idx) {
  console.log(`index : ${idx}, element : ${elem}`);
});

color.forEach((elem, idx) => console.log(idx, elem));

// map() : 기존 배열을 이용해 새로운 배열 생성
let arr = [1, 2, 3, 4, 5];
let mapArr = arr.map(function (elem) {
  return elem * elem;
});
console.log(mapArr);

// filter() : 특정조건 만족하는 요소 추출 -> 새로운 배열 생성
// every() : and, some() : or
let filterArr = arr.filter(function (elem) {
  return elem <= 3;
});
console.log(filterArr);

function lessthan3(element, index, array) {
  return element <= 3;
}
let everylt3 = arr.every(lessthan3);
console.log(everylt3);
let somelt3 = arr.some(lessthan3);
console.log(somelt3);

// reudce() : 왼쪽에서 두 개씩 묶어 하나가 될 때까지 줄여가는 연산
// reduceRight() : 오른쪽에서 두 개씩 묶어 하나가 될 때까지 줄여가는 연산
let reduceArr = arr.reduce(function (pre, cur) {
  console.log(`pre : ${pre}, cur : ${cur}`);
  return pre + cur;
});
console.log(reduceArr);

// sort()
let arrNum = [2, 7, 5, 3, 10];
console.log(arrNum);
console.log(arrNum.sort()); // 유니코드 순서에 따라서 정렬
console.log(
  arrNum.sort(function (a, b) {
    return a - b;
  })
);

console.log(color);
console.log(
  color.sort(function (a, b) {
    return a > b ? 1 : -1;
  })
);
