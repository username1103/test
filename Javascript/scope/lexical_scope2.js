var x = 1;

function foo() {
  var x = 10;
  bar();
}

var bar = function () {
  console.log(x);
};

foo(); // 1
bar(); // 1
