a();

const a = () => {
  console.log(1);
};

// const a = function () {
//   console.log(1);
// };

// Uncaught ReferenceError ReferenceError: Cannot access 'a' before initialization
//     at <anonymous> (undefined:1:1)
//     at Module._compile (undefined:1099:14)
//     at Module._extensions..js (undefined:1153:10)
//     at Module.load (undefined:975:32)
//     at Module._load (undefined:822:12)
//     at executeUserEntryPoint (undefined:77:12)
//     at <anonymous> (undefined:17:47)

// a가 정의는 되었지만 const로 초기화 되지 않았다.
