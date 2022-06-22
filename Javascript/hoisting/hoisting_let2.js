// console.log(a); // 선언단계 이후 초기화가 이루어지지 않아 ReferenceError: Cannot access 'a' before initialization 발생

let a; // 선언단계는 이미 거쳤지만 여기서 초기화가 이루어짐
console.log(a);

a = 3;
console.log(a);
