const a = 3;
{
  const a = 4;
  console.log(a); // 4
}

console.log(a); // 3

function b() {
  const a = 5;
  console.log(a); // 5
}

b();

console.log(a); // 3

/**
 * const는 블록 레벨 스코프를 따른다.
 */
