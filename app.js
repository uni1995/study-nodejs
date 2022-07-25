console.log("hello from you");//출력

//추가내용 깃으로 올릴려면 git add .
//git commit -m 이름
//git push origin master << 깃허브에 업로드

let yh = 'yunhee'; //일반변수선언은 var로 한다. 
var age = 28; //입력값에 따라서 자료형타입 확인됨
console.log(yh, age)
console.log(typeof(yh)); //typeof 는 변수 타입
console.log(typeof(age));

var q='qwe';
console.log(q); 
var q='123';
console.log(q); 
//var로 선언한경우 중복으로 선언될수 있기 때문에 이런 상황이 생길수있다

let a='con';
console.log(a);
//console.log(typeof(a));
//let a='asd'; //let 으로 선언한경우 중복으로 선언할수없다 오류남
a='asd' //다시 대입은 가능하다
console.log(a); 

//const z;  //할당없이 선언 불가능
const z='zxc';
console.log(z);
//const z='xcv';   //const는 중복선언불가능
//console.log(z);
//z='xcv';
//console.log(z); //const는 나중에 대입 불가능

var student ={
    name1:'uni',
    age:28
};
console.log(student);
console.log(typeof(student));
console.log(typeof(student.name1));
console.log(typeof(student.age));

//함수선언방법1
//함수를 따로 만들어서 함수명을 이용해서 호출
function sum(n1,n2){
    return n1+n2;
}
console.log(sum(1,4));

//함수선언방법2
//함수를 변수에 대입해서 변수를 통해 함수를 호출
var print = function(){
    console.log("hello");
}
print();

//1초후에 실행
setTimeout(print,1000);
//5초후에 실행이면 5000

/* --- 01. 기본 변수 선언 --- */
var var1;
var var2 = 20;
var1 = "Hello World";
var2 = 10; // 오류 안 남.

/* --- 02. 최근 변수 선언 --- */
let var3; // var의 최근 버전.
const var4 = 30; // 상수 선언. // var4 = 40; 오류 남.

/* --- 03. 정수 연산 --- */
var numberInt1 = 10;
var numberInt2 = 20;
var numberInt3 = numberInt1 + numberInt2;
console.log(numberInt3); // 30

/* --- 04. 소수점 연산 --- */
var numberFloat1 = 0.1;
var numberFloat2 = 0.2;
var condition = (numberFloat1 + numberFloat2) == 0.3;
console.log(condition); // false
condition = (((numberFloat1 * 10) + (numberFloat2 * 10)) / 10) == 0.3; // 정수로 치환해서 계산.
console.log(condition); // true

/* --- 05. 문자열 --- */
var firstName = "Jeong ";
var lastName = 'Mingyu';
var fullName = firstName + lastName;
console.log(fullName); // Jeong Mingyu
fullName = "Jeong 'MinGyu'";
console.log(fullName); // Jeong 'Mingyu'
fullName = 'Jeong "MinGyu"';
console.log(fullName); // Jeong "Mingyu"


//조건문
if (true) {
    var x = 3;
}
console.log(x); // 3

if (true) {
    let y = 4; // let, const는 {} 안에서 지역 변수로 가능.
}
//console.log(y); // ReferenceError: y is not definedv


// js는 객체 지향이지만, 클래스는 없다.
// 함수로 객체 지향을 구현한다.

/* --- 00. 객체 선언 --- */
/* --- 01. 객체 키 값 접근 --- */
/* --- 02. 객체에 키 값 추가. --- */
/* --- 03. 객체를 JSON으로 바꾸기 --- */


/* --- 00. 객체 선언 --- */
var person = {
    name : "Mingyu", // key : value를 묶어서 pair라고 한다.
    job : "empty", // 자료구조는 Hash Table.
    age : 20
}
// 객체 선언을 이렇게도 가능함.
// var person = new Object(); 아무 키 값도 없는 객체 선언 가능.

/* --- 01. 객체 키 값 접근 --- */
console.log(person); // { name: 'Mingyu', job: 'empty', age: 20 }
console.log(person["name"]); // Mingyu
console.log(person.name); // Mingyu

/* --- 02. 객체에 키 값 추가. --- */
person.gender = "Male"; // 키가 있으면 넣고 없으면 추가.
// person["gender"] = "Male"; // 위랑 같음.

/* --- 03. 객체를 JSON으로 바꾸기 --- */
// 객체를 JSON으로 바꿔준다. NodeJS에 있는 기능이다.
console.log(JSON.stringify(person)); 
// {"name":"Mingyu","job":"empty","age":20,"gender":"Male"}


// 객체를 처음 배울 때 썼던, 객체를 만드는 방식.
let obj = {
    name : 'JeongMingyu'
}
console.log(obj); // { name: 'JeongMingyu' }

// 클래스처럼 재활용할 수 있도록, 객체를 만드는 방식.
function Person(name) {
    this.name = name;
}
let Jeong = new Person('Jeong');
let Mingyu = new Person('Mingyu');
console.log(Jeong); // Person { name: 'Jeong' }
console.log(Mingyu); // Person { name: 'Mingyu' }

//배열
var array = [10, 20, 30]; 

// 자바스크립트에서 배열의 실체는 없다. 배열은 사실 객체다. 
// 객체는 순차 검색을 하기 때문에, 배열의 장점인 빠른 접근 속도가 없다.
// 객체이기에, 이렇게 섞어서 선언해도 상관 없다.
// var array = [10, 20, "test"];

// 그래서 밑처럼 선언한 것과 var array = [10, 20, 30]; 는 같다.
/*
var array = {
    "0" : 10, // 배열의 Index를 Key로 가진다.
    "1" : 20,
    "2" : 30
}
*/

console.log(array); // [ 10, 20, 30 ]
console.log(array[0]); // 10
console.log(array["1"]); // 20 이게 되네...? 객체이기 때문에 그런가보다.


//함수

// 함수를 선언함.
function sayHello1() { // 이렇게 {를 써줘야 인식함. 다음 줄에 쓰면 인식을 못함.
    console.log("Hello1");
}

// 함수를 할당함.
var sayHello2 = function() {
    console.log("Hello2");
}

// 어차피 이름 없는 함수인데 이렇게도 쓸 수 있게 만듦.
var sayHello3 = () => {
    console.log("Hello3");
}

sayHello1(); // Hello1
sayHello2(); // Hello2
sayHello3(); // Hello3
//-----------------------------
sayHello1(); // Hello1
//sayHello2(); // 오류.

// 함수 선언식.
function sayHello1() { 
    // 함수 호이스팅으로 인해 함수가 밑에 선언되어있어도 사용 가능.
    console.log('Hello1');
}

// 함수 표현식.
let sayHello2 = function() { // 변수로 인식하기 때문에, 이 줄 밑으로만 함수 사용 가능.
    console.log('Hello2');
}

sayHello1(); // Hello1
sayHello2(); // Hello2


function add(a, b) {
    return a + b;
}
console.log(add(10, 20)); // 30

function add(a, b) {
    return a + b;
}
function test() {
    return add; // 함수 자체를 반환.
}
console.log(test()(10, 20)); // 30


//반복문
var array = [1,2,3,4,5];

for (let ix = 0; ix < array.length; ix++) {
    console.log(array[ix]); 
    // 1 2 3 4 5 (값 사이에 줄 바꿈 있음.)
}
for (let ix in array) { 
    // 다른 언어와는 다르게, 배열 안의 값이 아닌 Index를 반환함. 근데 자바스크립트의 배열 Index는 객체의 Key 값이므로 당연하다고 생각함.
    console.log(array[ix]); // 1 2 3 4 5 (값 사이에 줄 바꿈 있음.)
}
// 이런 방법을 의존성 주입 (Dependency Injection, DI) 이라고 함.
array.forEach(function(data) { 
    // 순차적으로 동작 안 할 수도 있기 때문에, 알고있어야 함. 근데 거의 순서대로 동작한다고 함.
    console.log(data); // 1 2 3 4 5 (값 사이에 줄 바꿈 있음.)
});


//신기
// 이상한 문법.
// 이름은 필요 없고, 그냥 바로 로직을 실행해야 하는 경우일 때 쓴다고 함.
(() => {
    console.log("Test Function")
})(); // (); 이게 호출하는 거임. 붙여서 쓸 필요 없음. 다음 줄에 써도 됨.


//기타
//클래스를 쓰지 않지만 함수로 객체 지향 구현조건 만족하기 때문에 쓸수있다

// 1급 객체 (객체 지향 구현 조건). First Class Citizen. 자바스크립트는 함수로 1급 객체를 구현했다.

// 1. 변수나 구조(클래스/구조체/객체)에 할당 가능해야 한다.
let sayHello = function() {
    console.log('Hello');
}

// 2. 다른 함수의 파라미터로 전달 가능해야 한다.
var array = [1,2,3,4,5];
array.forEach(function(data) {
    console.log(data); // 1 2 3 4 5 (값 사이에 줄 바꿈 있음.)
});

// 3. 반환 값으로 사용 가능해야 한다.
function add(a, b) {
    return a + b;
}
function test() {
    return add; // 함수 반환.
}
console.log(test()(10, 20)); // 30
// C/C++ 에서는 함수 포인터로 구현되어 있음. (델리게이트.)


//이벤트 기반.
// 이벤트 Driven (이벤트 기반.)
// UE4에서는 Blueprint가 이벤트 기반임. BeginPlay 이벤트, Tick 이벤트 등.
function run() {
    console.log('3초 후 실행');
}

// 논블로킹 (Non Blocking)
console.log('시작');
setTimeout(run, 3000);
console.log('종료');

// 시작
// 종료
// 3초 후 실행


// 로드 밸런싱 : 부하를 나눠서 하는 것.
// Socket - TCP(신뢰/Reliable) / UDP(빠름/Unreliable)