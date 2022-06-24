# SOP(Same-Origin Policy)

SOP란 다른 출처의 리소스를 사용하는 것에 대해 제한하는 것을 말한다.

여기서 다른 출처란 scheme, host, port중 하나라도 다른 것을 의미한다. 
`http://a.example.com`와 `http://b.example.com`은 서로 다른 출처가 된다. 따라서 SOP란 같은 출처로만 http 요청을 보낼 수 있는 것을 의미한다. 일반적으로 브라우저는 SOP를 준수한다.

왜? 사용자는 여러 페이지에 방문하게 되고 각 페이지마다 여러 정보들을 사용자 브라우저의 쿠키나 스토리지에 저장하게된다. SOP가 없다면, 악의적인 페이지에 접속했을 때, 사용자의 인증 토큰을 이용해 해당 사이트에 요청을 보낼 수 있다. 이를 방지하고자, 브라우저는 기본적으로 SOP를 준수한다.

하지만 사용하다보니 다른 origin의 리소스가 필요한 경우들이 생겼다. 그럴땐 어떻게 할까?

# CORS(Cross-Origin Resource Sharing)

CORS설정을 통해 가능하다. `CORS는 추가 HTTP헤더를 사용하여, 한 출처에서 실행 중인 웹 어플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다.`라고 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)에 나와있다. 즉, http헤더에 추가적인 정보를 통해, 브라우저에게 너가 우리 서버에 접근할 권한이 있는지 알려주는 것을 의미한다. 

어떻게? 

## preflighted requests

preflighted request는 요청을 보내기전에 `OPTIONS` 메소드를 통한 HTTP요청을 먼저 보내는 것을 의미한다. 이 요청에 대한 서버의 응답을 확인하고 응답내용에 있는 정보를 통해 요청이 가능한지 확인한다. 이 후, 요청이 가능하다면 원하는 요청을 보내는 것을 의미한다.


![preflighted requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/preflight_correct.png)

아래와 같은 서버의 응답에서 `Access-Control-Allow-Origin`, `Access-Control-Allow-Method`
`Access-Control-Allow-Headers` 값들을 통해 보내려는 요청이 허용되는지 확인 후, 요청한다.
![options](https://velog.velcdn.com/images/username1103/post/65e2a645-1932-4016-b578-a5e9d97ff022/image.png)

`Access-Control-Max-Age`는 다른 실행 전 요청을 보내지 않고 preflighted requests의 응답을 캐시할 수 있는 기간을 말한다. 기본적으로 5초이며 최대 86400초(24시간)까지 가능하다.

항상 preflighted requests가 이용되는 것은 아니다. simple requests의 조건에 맞지 않을 경우 사용한다.

## simple request

simple request는 preflight 요청 없이 바로 요청하는 것을 의미한다. 
simple request를 보내기 위해선 아래의 조건을 모두 만족해야한다.

1. 요청 메소드가 `GET`, `POST`, `HEAD` 중 하나여야 한다.
2. 요청 헤더에는 user agent에 의해 추가되는 `Connection`, `User-Agent` 와 같은 헤더를 제외하고 `Accept`, `Accept-Language`, `Content-Language` 만 허용된다.
3. `Content-Type`은 `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` 만 허용한다.

이 조건이외의 경우에는 preflighted 요청이 발송된다.

![simple request](https://velog.velcdn.com/images/username1103/post/0ba9db09-fbc2-419a-80ea-7d6f4669bd74/image.png)


> 왜 preflighted 요청이 필요할까?
CORS가 생기기 이전 만들어진 서버들은 SOP정책이 무조건 적용된다는 가정하에 만들어졌는데, CORS가 생김으로서 다른 출처로의 요청이 가능해졌다. 따라서 과거에 만들어진 서버에는 CORS에 대한 처리가 없기 때문에, simple request만 있다면 서버는 요청에 대한 처리 후 응답을 했지만 브라우저는 CORS오류로 인식하게 된다. 따라서 preflighted 요청을 통해 미리 요청을 방지함으로서 CORS에 대한 처리가 없는 서버들을 보호할 수 있다. 라고 합니다.

## Credentialed Request

인증 관련 헤더를 포함할 때, 사용하는 요청이다. 클라이언트 측에서 요청에 `creadential: include`와 함께 요청을 보내면 서버측에서 `Access-Control-Allow-Credentials: true` 응답이 와야만 CORS에러가 발생하지 않는다. 이 때, `Access-Origin-Allow-Origin: *`, `Access-Control-Allow-Method: *`, `Access-Control-Allow-Headers: *` 은 허용되지 않는다.

또한 preflighted요청에는 creadential이 포함될 수 없고, 단순히 preflighted 요청의 응답을 통해 credential이 필요함을 알고 본 요청에 추가하게 된다.

또한 응답 내에 `Set-Cookie` 헤더가 있지만, `Access-Origin-Allow-Origin: *`인 경우, 실제로 cookie를 설정하지 않는다.



## TEST
NestJS server와 react web에서 axios를 사용해 실제 서버 cors설정에 대한 테스트가 가능합니다.


### ref

- mdn cors https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- 우아한 테크톡 CORS https://www.youtube.com/watch?v=-2TgkKYmJt4
