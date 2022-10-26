##### 안녕하세요

#### 안녕하세요

### 안녕하세요

## 안녕하세요

# 안녕하세요

### 오늘 배운 내용 정리

1. md 파일 특징
   - 실무에서 많이 사용하는 파일
   - 메모장이랑 같으나 기능들이 많다.
   - 깃허브랑 많이 사용한다.🎈
2. md파일에 소스작성하기

```java
    int x = 10
```

```html
<input type="text" />
```

안녕하세요 오늘은 md파일을 배웠어요!  
오늘은 금요일입니다.  
 /_ ctrl+/ _/

margin  
 padding

div : 박스태그

```
transition : 효과를 시간에 맞게 적용한다.
```

/_ float : 정렬 _/
display : 화면을보여주는 형식

HTML 5
CSS 5
JS(JavaScript) 5 / 9 or 10
6 or 7 (ECMA)

flex : 컨테이너와 아이템으로 구성

flex

repositories : 폴더들

.github 다운받는법

1 git clone 폴더의 주소입력

1.티스토리 2.개발블로그(사이트주소에 개발용어가 들어가있음)

```stack
   stack overflow
   what is () *in* ()
```

z index <- z축 값

###

- window 객체 - 최상위 객체
- window 객체 : 브라우저를 열었을때 생성되는 상항 존재하는 객체
- 속성 : classes , dafaultStatus,document,frame,history,length,location,navigator 등

```
 1. classes : HTML 문서에서 정의된 모든 스타일 시트
 2. dafaultStatus : 상태바에 표시될 문자열 지정
 3. frame : window에 포함된 프레임수 반환
    ->여러 프레임이 존재할 경우 배열형태로 표시 가능
    (window.frames[0])
 4. history : window가 방문한 URL 정보
 5. innerHeight : 현재 브라우저의 document영역의 높이
 6. innerWidth : 현재 브라우저의 document영역의 너비
 7. location : 현재문서의 URL정보
 8. menubar : 메뉴바 표시 여부지정
 9. opener: open()함수로 생성된 윈도우 이름
 10. name : window 이름
 11. outerHeight : 윈도우 밖 테두리 높이
 12. outerWidth : 윈도우 밖 테두리 너비
 13. pageXOffset : window에 표시되는 X 위치
 14. pageYOffset : window에 표시되는 Y 위치
 15. scrollbars : 스크롤바 표시 여부
```

###

window 객체 메서드

```
- alert() : 메세지와 OK버튼을 가진 메세지 박스
- setInterval : 지정된 시간만큼 반복
- setTimeout : 지정된 시간이후에 실행
- clearIntertval : setInterval 해제
- clearTimeout : setTimeout 해제
- close() : window 닫기
- confirm() : 질문 다이얼로그 확인과 취소 버튼을 가진 박스
- back,forward : 뒤,앞으로 이동
- moveBy(x,y) : 윈도우이동(상대적)
- moveTo(x,y) : 윈도우이동(절대적)
- resizeBy(x,y) : 윈도우크기변경(상대적)
- resizeTo(x,y) : 윈도우크기변경(절대적)
```

```
- open : 새윈도우 생성
      -> open(url.window_name property)
      -> url : 페이지주소
      -> window_name :
                    -> _blank : 새창에 열린다.
                    -> _parent : 부모 프레임에 열린다.
                    -> _self : 현재 페이지를 대체한다.
                    -> _top : 로드된 프레임셋 대체
```

```
- property : 새 window의 옵션부여
  heigth : 새창의 높이 지정
  width : 새창의 너비 지정
  left : 모니터화면 왼쪽에서부터 위치
  right : 모니터화면 오른쪽에서부터 위치
  top : 모니터 화면 위쪽에서부터 위치
```

### 특정브라우저

```
- channelmode : 전체화면 (yes OR no)
- fullscreen  : 전체화면 (yes OR no)
- location    : 주소표시줄 표시여부 (yes OR no)
- menubar     : 메뉴바 표시여부 (yes OR no)
- scrollbar   : 스크롤바 표시여부 (yes OR no)
- status      : 상태바 표시여부 (yes OR no)
- resizable   : window 크기 변경 가능여부 (yes OR no)
- toobar      : 툴바 표시여부 (yes OR no)
```

- MDN
- W3 schools

### screen

```
- screen : 화면 정보 제공
- screen.width : 화면의 전체 너비
- screen.height : 화면의 전체 높이
- screen.availWidth : 실제 사용 가능한 화면 너비
- screen.availHeight : 실제 사용 가능한 화면 높이
- screen.colorDepth : 사용 가능한 색상 수
- screen.pixelDepth : 한픽셀 당 비트 수
```

### documnet 객체

```
 document.write("title : " + document.title);
 document.write("마지막 수정 : " + document.lastModified)
 document.write("배경색 : " + document.bgColor)
```

### history 객체

```
사용자의 웹사이트 사용 내역
 - history.length : 히스토리 목록에 포함된 URL의 수
 - history.back() : 뒤로 이동
 - history.forward() : 앞으로 이동
 - history.go(N) : 현재 URL 위치에서 N만큼 앞으로 이동(음수(N)만큼 뒤로 이동)
```

### location 객체

```
현재 윈도우의 URL 주소에 대한 정보 제공 객체
 - location.host : 호스트 이름과 포트번호(URL로부터 분리하여 제공)
                   www.naver.com:80

 - location.href : 하이퍼링크로 주소지정
 - location.pathname : 디렉토리 위치
 - location.port : 호스트 포트번호
 - location.portocol : 프로토콜 종류
 - location.reload() : 문자 다시읽기
 - window.location.assign(URL) : URL로 이동(방문기록 저장)
 - window.location.replace(URL) : URL로 이동(방문기록 덮어쓰기)
```

### navigator 객체

웹 브라우저의 특성 정보를 가지는 객체

```
 - navigator.appName : 사용중인 브라우저 종류
 - navigator.appCodeName : 사용중인 웹브라우저 이름
 - navigator.appVersion : 브라우저 버전 및 OS이름
 - navigator.platform : 운영체제 환경
 - navigator.userAgent : 웹브라우저 종류와 버전
 - navigator.plugins : 설치된 플러그인 정보
 - navigator.mimeTypes : 브라우저에서 지원되는 mime 타입
```

```
mime 종류 : text. image , audio, video,application,message,multiport

image - gif.jpeg
video - mpeg
application - streaam,script
```

### 플렉스 속성

```
    display:flex, inline-flex(모든 태그 적용)
            flex : 박스를 블록 수준의 플렉서블 박스로 작동
            inline-flex : 박스를 인라인 수준의 플렉서블 박스로 적용
    아이템 배치 방향
    flex-direction - row(기본값) , row-reverse , column-reverse
    row - 박스를 왼쪽에서 오른쪽으로 배치
    row-reverse - 박스를 오른쪽에서 왼쪽으로 배치
    column - 박스를 위에서 아래로 배치
    column-reverse - 박스를 세로로 배치하되 역방향으로 배치

    아이템 배치 방식
    flex-wrap - nowrap(기본값) , wrap , wrap-reverse (플렉서블 박스에 적용)
    nowrap - 박스를 한줄로 배치
    wrap - 박스를 여러 줄로 배치
    wrap-reverse - 박스를 여러줄로 배치하되 역방향배치
                   주축이 가로일때(direction : row) 아래서 위로
                   주축이 세로일때(direction : column) 오른쪽에서 왼쪽

    플렉스 아이템배치와 방향 한번에
    flex-flow - flex-flow:row wrap;
```
