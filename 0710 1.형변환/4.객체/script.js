//객체 (object)- 자바에서 map과 유사
//key , value 가 한쌍으로 구성
let user = {
  name: '홍길동',
  age: 20,
  'math score': 100
}

console.log(user.name);
console.log(user.age);
console.log(user['age']);
console.log(user['math score']);

const member = {
  name : '홍길동',
  age :20
}
console.log(user)
user=10;
console.log(user)

//당연히 상수니까 변경을 못함
//member =10;

//상수지만 큰 구조는 변경하지 않고
//안쪽 내용만 수정은 가능함
member.name="김자바";
console.log(member);

//이름을 보고싶은지 나이를 보고싶은지 입력받음
let key ="name";
console.log(member[key]) // user["name"]

let item="바나나";

let cart ={
  [item]:5
};
console.log(cart)

//10명의 회원정보가 각각 담신 객체 10개를 생성

function makeUserObject(name,age){

  let obj ={
    name : name, //key로 설정할 이름과 value설정할 매개변수가 동일하면
    age : age // 생략해서 하나만 써도됨
  }
  return obj;
}

let a =makeUserObject("홍길동",20);
let b =makeUserObject("김자바",20);
console.log(a,b);

//key , value 추가하기
a.addr = "강동구";

console.log(a)

//삭제하기
delete a.addr;
console.log(a);

//구조분해 할당
//name : '김자바', age : 20

let { age, ...r}=a;

console.log(age);
console.log(r);

console.log({...r, age:30})

//in 연산자로 키가 있는지 없는지 확인할수 있음
console.log("name" in a);
console.log("ddd" in a);

for(let key in a){
  console.log(`${key} : ${a[key]}`)
}