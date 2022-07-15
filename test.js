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

let friends = {
  brand: "카카오",
  original: [
    { name: "라이언", age: 5 },
    { name: "어피치", age: 4 },
  ],
  newbee: { name: "네온", age: 3 },
};

console.log(friends["newbee"]);
console.log(friends.original[0].name); // 라이언
console.log(friends["original"][0].name); // 라이언
console.log(friends["newbee"]["name"]);
console.log("-------------------------------------------");

// 속성 값 얻기
console.log(friends.original[0]); // name: "라이언", age: 5
console.log(friends.original[1].age); // 4
console.log(friends.original.length); // 2
console.log(friends.original[0].name); // 라이언
console.log(friends.newbee.name); // 네온
console.log("-------------------------------------------");

// 속성 추가
friends.newbee["sex"] = "female";
// 객체 배열로 변환
friends["newbee"] = [friends["newbee"], { name: "콘", age: 2 }];
console.log(friends.newbee); // {name: "네온", age: 3, sex: "female"}, {name: "콘", age: 2}
console.log("-------------------------------------------");

// 속성 수정
friends.newbee[0]["sex"] = "male";
friends.newbee.sex = "unknown";
console.log(friends.newbee); // {name: "네온", age: 3, sex: 'male}, {name: "콘", age: 2}, sex: 'unknown'
console.log("-------------------------------------------");

// 속성 삭제
delete friends.newbee[0].sex;
// 배열의 마지막 요소 삭제
friends.newbee.pop();
friends.newbee.pop();
delete friends.brand;
console.log(friends);
console.log("-------------------------------------------");
