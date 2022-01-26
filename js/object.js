// let user = {
//   // an object
//   name: "John", // by key "name" store value "John"
//   age: 30, // by key "age" store value 30
// };
// console.log(user);

// let name = {};

// // name["khan"] = true;

// for (let i = 1; i < 10; i++) {
//   name[i + i] = i;
// }
// console.log(Object.values(name));
// // name.forEach((e) => {
// //   console.log(e);
// // });
// // name.forEach((e, n) => {
// //   console.log(e);
// // });
// // let userName = [
// //   { khan: [{ na: "naeem" }, { nae: "mow" }] },
// //   { love: "mowsumi" },
// // ];
// // console.log();
// // // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

// // userName.map((e, value) => {
// //   if (Array.isArray(e.khan)) {
// //     // let thisarr = e.khan;
// //     e.khan.forEach((next) => {
// //       console.log(next);
// //     });
// //   }
// // });

// // let users = {
// //   name: "naeem",
// //   age: 43,
// // };
// let key = prompt("Enter the key for get Information?", "name");
// // console.log(users[key]);s

// let useNames = {
//   [key]: 8,
// };
// console.log(useNames);

// function setUserInfo(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// let userInfo = new setUserInfo("khan", 132);
// console.log(userInfo);
// let user = { name: "John", age: 0 };

// // alert("age" in user); // true, user.age exists
// // alert("blabla" in user);

// for (let key in user) {
//   console.log(user[key]);
// }

// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   // ..,
//   1: "USA",
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

// let user = {
//   name: "naeem",
// };

// user.sayhi = function () {
//   return "hello world";
// };
// let now = user.sayhi();
// console.log(now);

// let user = {
//   name: "khan",
//   age: 30,
//   lib: ["naeem", "khan", "mow"],
//   sayhi(name) {
//     // let self = this;
//     this.lib.forEach((e) => console.log(name));
//   },
// };

// // let users = user;
// // console.log(users);

// user.sayhi(user.age);

const inputText = document.querySelector(".inputText");
const showResult = document.querySelector(".showText");
function show() {
  // let value = this.value;
  setTimeout(() => {
    showResult.innerHTML = this.value;
  }, 100);
}

// inputText.addEventListener("keyup", show);
// // const person = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   age: 50,
// //   eyeColor: "blue",
// // };
// // let name = "naeem";
// console.log(typeof name);

let Strings = "naEem , khan , mow";

// let arra = Strings.split(",");
// console.log(arra);

// let match = Strings.match(/ee/gi);
// console.log(match);
let includes = Strings.includes("na");
console.log(includes);
