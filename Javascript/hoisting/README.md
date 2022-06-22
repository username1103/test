# Hoisting

# 변수 호이스팅

javascript의 변수는 3가지 단계를 거쳐 초기화된다.

- 선언: 변수를 Execution Context의 Variable Object에 등록한다.

- 초기화: 메모리 할당 및 undefined로 초기화된다.

- 할당: 초기화된 변수에 실제 값을 할당한다.

선언과 초기화는 자바스크립트 엔진이 초기에 파싱되면서 실행되고, 할당은 이후에 코드가 진행되면서 실행된다.

## var vs const, let

`var`는 선언과 초기화가 같이 이루어지게 된다.  
하지만 `let`은 선언은 되지만 초기화가 되지 않기 때문에, 변수 선언문에 도달하기 전에 호출시 `ReferenceError: Cannot access 'a' before initialization` 가 발생하게 된다.  
`const`는 초기화와 할당이 동시에 이루어져야 하는 것 같다. 변수 선언문에 도달하기 전에 호출시 `let`과 같은 에러가 발생한다.

# 함수 호이스팅

함수호이스팅에는 함수선언식과 함수표현식에 따라 달라진다.

- 함수 선언식: 함수를 정의하는 것
```javascript
function a() {
  consol.log(1);
}
```

- 함수 표현식: 함수를 변수에 할당하는 것 (화살표함수가 아니어도 됨)
```javascript
const a = ()=>{
  console.log(1);
}
```

함수 선언식은 함수명이 Variable Object의 프로퍼티로, 값은 heap에 생성된 함수 오브젝트를 가리키도록 Call Stack에 할당된다. (call by reference)

함수 표현식은 변수 호이스팅과 같은 방식으로 var인 경우 선언과 초기화, let, const인 경우 선언 후 코드가 진행됨에 따라 할당되게 된다.

## 순서

함수 선언식이 먼저 호이스팅되고, 변수, 함수표현식이 호이스팅 된다.
