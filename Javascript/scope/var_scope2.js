var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1

/**
 * var는 렉시컬 스코프를 따른다. 어디서 선언되었는가를 따른다.
 */
