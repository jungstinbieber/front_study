const btn=document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');

//목록이 보이는지 안보이는지 여부
//let isShow = false;

//btn.addEventListener('click',() =>{

//  if(isShow){
//    //isShow 가 ture 일때 실행되는 영역
//    //true라는 소리는 목록이 현재 보이고있다
//    list.classList.remove('show');
//    isShow=!isShow;
//  }else{
//    list.classList.add('show');
// isShow =!isShow;
//    //isShow 가 false일때 실행되는 영역
//    //false라는 소리는 목록이 현재 안보임
 // }
//});
btn.addEventListener('click', () =>{

  list.classList.toggle('show')
})

const liTags = document.querySelectorAll('.list-group-item');

for(let i=0; i<liTags.length; i++){

  liTags[i].addEventListener('click', () =>{
    alert('ddd')
  })
}

//$('.list-group-item').on('click', () =>{
//  alert('ddd')
//})

