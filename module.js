//require 는 nodejs에서 외부 모듈을 가져오는 것
//require('파일경로');
//이때 모듈이 될 파일이 같은 폴더에 있다면 경로값의 시작은 ./이 됨
//만일 ./를 하지 않으면 NodeJS 자체 라이브러리에서 모듈을 찾게됨
let movie = require('./movie');
movie.Harry(); //movie 파일에서 모듈화한 변수
movie.Sing();