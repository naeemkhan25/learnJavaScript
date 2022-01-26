var add = (a, b) => a + b;

var javascript = {
  name: "javascript",
  popular: ["react", "vue", "modern"],
  printvalue: function () {
    this.popular.forEach((e) => {
      console.log(e);
    });
  },
};
let sayHi = function () {
  // (1) create
  alert("text");
};

function BgColor() {
  let name = sayHi();
  console.log(name);

  // change the background color to red
  let number = 0;

  let a = 10,
    b = 10;
  console.log(add(a, b));

  document.body.style.background = "red";
  // let arra = javascript;
  console.log(new JavaScript());

  //   Name();
  // change it back after 1 second
  setTimeout(() => (document.body.style.background = ""), 1000);
  firstData();
  PrvSubling();
}
window.BgColor();

function Name() {
  var currentLocation = location.href;

  if (confirm("Go to Wikipedia?")) {
    location.href = "https://wikipedia.org";
  }
}
function firstData() {
  let firstCh = document.body.firstChild;
  console.log(firstCh.data);
}
function PrvSubling() {
  let sibling = document.getElementById("class_container");
  //   let prev = sibling.Subling;
  console.log((sibling.textContent = "naeem khan"));
}
