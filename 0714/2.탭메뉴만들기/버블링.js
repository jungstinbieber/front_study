const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

function claerClassList(){
  for(let i=0; i<btns.length; i++){
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show')
  }
}

document.querySelector('.list').addEventListener('click',() =>{
  let no = e.target.dataset.no;

  console.log(no)

  if(no!==undefined){
  claerClassList();
  btns[no].classList.add('selected');
  contents[no].classList.add("show");
  }
})