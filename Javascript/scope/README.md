# 스코프

**변수를 참조할 수 있는 범위라고 할 수 있다.**

일반적으로 자바나 C와 같은 언어에서는 블록 레벨 스코프를 가진다. 아래와 같이 if문이나 for문 등 {} 블록 내에서 선언된 변수는 블록내에서만 적용된다.

```java
class JavaScope {
	public static void main(String[] args) {
        if(true){
            int a = 4;
            System.out.println(a); // 4
        }
        
        System.out.println(a); // java: cannot find symbol
    }
}
```

하지만 javascript에서는 조금다르다. 2번째줄에 블록으로 묶었지만 전역 변수 `a`의 값이 변하였다. 즉, 블록과는 별개로 동작한다. 그러나 함수내에서의 변화는 전역에 영향을 주지 않는다. 이처럼 javascript에서 var는 함수 레벨 스코프를 갖는다.

```javascript
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

```

하지만 let이나 const에서는 조금 다르다. 아래와 같이 let과 const에서는 블록 레벨 스코프를 갖는다.

```javascript
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

```

# 렉시컬 스코프

자바스크립트의 변수들은 렉시컬 스코프를 갖는다.

* 렉시컬 스코프란? 함수를 선언하는 당시에 스코프를 갖는것을 의미한다.
* 동적 스코프(Dynamic Scope): 함수를 어디서 호출했는가에 따라 스코프를 갖는 것을 의미한다.

아래와 같이 `b` 함수는 함수가 전역에서 선언되었기 때문에 전역 스코프만 가지고 있다. 따라서 `b` 함수 호출시 1이 콘솔에 찍히게 된다. 동적 스코프였다면 함수가 실행되는 위치에 따라 다르기 때문에 `a` 함수 내에서 호출된 `b` 함수의 상위 스코프는 `a`와 전역 스코프가 있을 것이다. 따라서 2가 콘솔에 출력되고, 전역에서 호출된 `b` 함수는 전역 스코프만 가지고 있으므로 1을 콘솔에 출력할 것이다.

```javascript
const x = 1;

function a() {
  const x = 2;
  b();
}

function b() {
  console.log(x);
}

a(); // 1
b(); // 1

```

---

# 정리

스코프에는 함수레벨스코프, 블록레벨스코프, 동적스코프, 렉시컬스코프 등이 있다.

자바스크립트에서는 변수에 따라 아래와 같은 스코프를 갖는다.

- var 함수 레벨 스코프, 렉시컬 스코프
- let, const 블록 레벨 스코프, 렉시컬 스코프

