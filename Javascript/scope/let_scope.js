let x = 3;
{
  let x = 4;
  console.log(x); // 4
}
console.log(x); // 3

/**
 * let는 블록 레벨 스코프를 갖는다.
 */
