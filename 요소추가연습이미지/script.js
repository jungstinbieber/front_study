const FRUITS = [
  { name: 'apple', memo : '빨간 사과'},
  { name: 'mango', memo : '달달맛있'},
  { name: 'melon', memo : '맛있다'}
];



for(let i=0; i<FRUITS.length; i++){
  let card =


`
<div class="col">
   <div class="card" style="width: 18rem;">
    <img src="./images/${FRUITS[i].name}.jpg" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${FRUITS[i].name}</h5>
           <p class="card-text">${FRUITS[i].memo}</p>
        <button class="btn btn-primary cart">담기</button>
     </div>
    </div>
   </div>
  `;
  
  //beforebegin : 해당 요소 앞에 html을 넣어줌
  // afterbegin : 해당 요소 첫번째 자식으로 추가
  // beforeend : 해당 요소 마지막 자식으로 추가
  // agerend : 해당 요소 뒤에 넣어줌
  document.querySelector('.row').insertAdjacentHTML('beforeend',card);       
}
document.querySelectorAll('.cart');

for(let i=0; i<cart.length; i++){
  cart[i].addEventListener('click', (e) =>{
   let nameTag=e.target.previouseElementSibling.previouseElementSibling;
   let name = nameTag.innerHTML;

   if(localStorage.getItem('cart')!=null){

   }else {
    localStorage.setItem('cart',JSON.stringify([name]))
   }
  })
}

// FRUITS.forEach((data, index)=>{
//   console.log(data.name, index)
// })

//로컬스토리지에 저장 or 수정 (동일한 키를 넣으면 기존 데이터를 지움)
//localStorage.setItem ('키','값')
//로컬스토리지에서 해당 키에 대한 값을 리턴해줌
//localStorage.getItem('키')
//로컬스토리지에서 해당 키를 삭제
//localStorage.removeItem('키')

//let arr =[1,2,3,4,5];
//let obj = {
//  name :'kim',
//  age: 20
//}

//로컬스토리지에는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리됨
//localStorage.setItem('arr',arr);
//localStorage.setItem('obj',obj);

//JSON 형식으로 변환 "[1,2,3,4]"
// arr인 배열을 문자열 (JSON)로 변환
//let arr_JSON = JSON.stringify(arr);
//배열은 아니지만 배열 구조 (대괄호) 가 유지된채로 문자열이 됨
//localStorage.setItem('arr',arr_JSON);
//arr=localStorage.getItem('arr');
//console.log(arr, typeof arr);
//arr=JSON.parse(arr);
//console.log(arr, typeof arr);

 
