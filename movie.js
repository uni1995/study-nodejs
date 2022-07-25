//모듈이 될 파일, 다른 파일에서 불러올수있게 한다

//함수선언
function printHarryPotter(){
    console.log("해리포터");
}

function printSing(){
    console.log("씽");
}

//이 함수들을 사용하려면 module.exprots를 사용해서 exports 할건지 작성해야함
//module.exports.이름 = 함수;
//밖으로 내보낼
//변수=값 을 넣어주는 것. 사용시 내가 설정한 변수값을 사용

module.exports.Harry = printHarryPotter;
module.exports.Sing = printSing;