//알림창 띄우기
//alert("자바스크립트 파일만듬");
//출력문 - 콘솔창에 띄움
console.log("콘솔창에 내용띄우기");

//html에 출력해주기

document.write("문서에 쓰기");

//변수만들기
let 변수이름;

let msg='hello';
console.log(msg);
msg =20;
console.log(msg);

//상수
const COLOR ='red';


let n =12.345;

console.log(typeof (n));
console.log(typeof n);

//실제로 나누기 0은 불가능 하지만
//JS은 수학적 연산은 전부 처리가 됨
// 대신 결과가 안나오는건 특수 숫자 값으로 처리가된다
console.log(n/0);
console.log(typeof Infinity);
console.log("abc"/2);
console.log(typeof NaN);

//문자
//JS 에서는 문자(열)은 쌍따옴표, 작은따옴표, 빽틱
let str1 ="abc";
let str2 ='abc';
let str3 =`abc`;

let age=20;
let name = "홍길동"
console.log(name+"님의 나이는"+age+"입니다");
console.log(`${name}님의 나이는 ${age}살입니다`);
console.log(typeof name);
'${'
//boolean : true / false
let check = true;
console.log(10>=5);
console.log(typeof check);

// null 값
//JS 에서 null은 존재하지 않음 , 비어있다, 알수없다
let a= null;

//undefined 
let x;
console.log(x);

//모달창 띄우기
//alert 메세지만 출력하고 확인버튼 한개
//alert('메세지 띄우기');

//prompt 메세지를 출력해주고 사용자에게 입력받는 창이 있고
//확인과 취소버튼이 있음
//prompt ('메시지',초기값)
//let result=prompt('메세지',20);
//console.log(result);


//나이를 입력받아 +1을 더한 값을 출력
// let result =prompt 는 문자열 따라서 형변환은
// let result = Number( prompt('나이입력'));
// console.log(typeof result);
// //result=result+1
// result++;
// console.log(result);


//confirm 메세지를 출력해주고 확인, 취소버튼이있음
//확인을 누르면 true 취소를 누르면 false 가 리턴됨
let re=confirm('메세지');
console.log(re);

