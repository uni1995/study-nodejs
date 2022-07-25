//node.js를 이용한 간단 웹 서버 만들기

//http 모듈 불러오기
//nodejs 자체 라이브러리에서 불러오게됨
var http = require('http');

//요청을 어떻게 처리할지 작성
//여기서 요청한다는 것은 서버에 접속하는것을 의미함
function onRequest(request, response){ //request 요청  response 응답
    console.log("receive request.. : " + request.url);
    //Client(유저, 사용자)의 정보를 출력

    //어떤 데이터를 보낼것인가
    //뒤에 올 내용이 이런것이다. 하는 헤더설정
    response.writeHead(200, {"Content-Type":"text/plain"})
    //요청 응답 200 : 정상 Okay
    //200은 상태코드(Status Code) , plain은 일반 text를 의미
    

    //응답할 데이터
    response.write("hello client"); //접속했을때 보낼 데이터

    //응답 완료
    response.end();
}


//요청처리와 포트를 설정

//서버를 생성
http.createServer(onRequest).listen(8888);
//8888이 포트번호이다

console.log("Server Created..");
