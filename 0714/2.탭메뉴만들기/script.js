const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

function claerClassList(){
  for(let i=0; i<btns.length; i++){
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show')
  }
}


for(let i=0; i<btns.length; i++){

  btns[i].addEventListener('click', () =>{
    
    //0,1,2에 모든 selected, show를 제거
    claerClassList();

    btns[i].classList.add('selected');
    contents[i].classList.add('show');
  });

}



