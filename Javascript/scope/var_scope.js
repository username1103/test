var a = 3;
{
  var a = 4;
  console.log(a); // 4
}

console.log(a); // 4

function b() {
  var a = 5;
  console.log(a); // 5
}

b();

console.log(a); // 4

/**
 * var는 함수 레벨 스코프를 따른다.
 */
