// 정해진 시간이 흐른뒤 해당 코드가 작동되도록 함
// setTimeout(콜백함수, 시간(ms))
// 5초뒤에 콜백함수가 실행됨

const time = document.querySelector('.time');

let t=5;



  
const interval = setInterval(()=>{

    t--;
    time.innerHTML =t ;
  },1000)

 setTimeout(() => {
    document.querySelector('.alert').style.display='none';
    clearInterval(interval)
  }, 5000);
    




// 정해진 시간이 흐른 뒤 해당 코드가 반복하며 작동
// setInterval ( 콜백함수, 시간 (ms));

// setTimeout(()=>{
//   console.log('2초마다 싱해되는 코드');
// },2000);
let timer;

document.querySelector('.btn').addEventListener('click', ()=>{

  clearTimeout(timer)


  timer = setTimeout(()=>{
    console.log('클릭하면 3초뒤 나타남');
  },3000)
})

//날짜 관련된 함수들
// const data = new Date();
// console.log(date);

// //년도 추출
// console.log(date.getFullYear());
// // 월 추출
// console.log(date.getMonth());
// //일 추출
// console.log(date.getDate());
// //요일 추출
// console.log(date.getDat());
// //요일 추출 - (0-일요일, 6-토요일)
// console.log(data.getHours());
// //시간 추출
// console.log(date.getMinutes());
// //초 추출
// console.log(date.getSeconds());


const clock = document.querySelector('.clock')

function insertTime(){

const data = new Date();

const hour = String(Date.getHours()).padStart(2,0);
const minute = String(Date,getMinuites()).padStart(2,0);
const second = String(Date.getSecons()).padStart(2,0);

clock.innerHTML = `${hour}: ${minute} : ${second}`;
}
setInterval(insertTime,1000);

let a =1;

console.log(a.padStart(3,0));