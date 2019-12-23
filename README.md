# com.vanilla.mobileList

## 모바일웹에서 제공되는 간단한 목록 만들기

#### 1. 제공된 API를 사용해서 모바일웹에서 조회 가능한 목록을 만드는 어플
    * API Response 로 주어지는 JSON 내용 중 result 항목의 배열을 모바일웹의 목록
    * 목록의 각 항목은 id, key, uuid, created 값 포함
    * created 항목은 사용자가 인지하기 쉬운 형태로 포맷팅 
    * 목록을 아래에서 위로 드래그 하면 다음 페이지를 로딩 (무한 스크롤 방식으로 페이징을 구현)
    * 화면에서 서버에 데이터를 요청하는 동안 화면에는  Loading Indicator 를 노출
    * 주어진 API 의 Parameter 값은 자유롭게 활용 가능
        * Page Size 의 값을 자유롭게 조정하고 해당 값을 결정하게 된 이유를 상세히 설명
    * Build / Deploy 를 통해 풀이한 내용을 실행해볼 수 있도록 동작 가능한 환경을 구성
    * 적절하게 Open Source 등의 3th Party Lib 을 활용가능
    * ./views/user.html 에 javascript, html 등 구현 코드를 자유롭게 개발
    * 풀이과정, 구현의도, 실행방법 등에 대한 설명을 `RESULT.md` 에 기술
    
#### 2. users API Server 실행 방법
    * npm install  을 통해 dependency module 을 설치
    * npm start or node ./bin/www 명령어로 express app 을 실행
    * npm test 로 test code 를 실행
    * users API 를 통해 간단한 JSON Data를 조회 가능
        * 해당 API에서 사용 가능한 query parameter
            * page : 조회하고자 하는 page number
                * 1 부터 시작되며 전달하지 않는 경우 기본값은 1
            * size : 한번에 조회하고자 하는 page size
                * 기본값은 10
            * request example
                * http://localhost:3000/users?page=1&size=10
    * users API 의 응답은 JSON 형태이며 다음과 같은 항목
        * id : 고유한 id 값으로 1부터 순차적으로 증가
        * key : 랜덤하게 생성된 String 값
        * uuid : key String을 소스로 생성되는 UUID
        * created : 각 row 가 생성된 시간 (Date.now(): time value in millisecond)
    * 주어진 API 는 불행하게도 매우 느린 속도로 데이터를 조회
