console.log(a);

a();

var a = () => {
  console.log(1);
};

// var a = function () {
//   console.log(1);
// };

// undefined
// Process exited with code 1
// Uncaught TypeError TypeError: a is not a function
//     at <anonymous> (undefined:3:1)
//     at Module._compile (undefined:1099:14)
//     at Module._extensions..js (undefined:1153:10)
//     at Module.load (undefined:975:32)
//     at Module._load (undefined:822:12)
//     at executeUserEntryPoint (undefined:77:12)
//     at <anonymous> (undefined:17:47)

// 호이스팅이 이루어져 a에 undefined가 할당되어 있음을 알 수 있다.
