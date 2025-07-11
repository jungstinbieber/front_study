const btn = document.querySelector('.btn-mode');
const body = document.body;

btn.addEventListener('click',(e)=> {

  alert(e.target.value);

document.body.style.background = 'black';
document.body.style.color = 'white';
});

//btn.addEventListener('click', () =>){
  //다크모드이면 true 아니면 false
  let isdark = false;

  

  if( isDark) {
  body.style.background = 'white'
  body.style.color = 'black'
  btn.value = '다크모드';
  isDark = !isDark;
}else{
body.style.background = 'white'
  body.style.color = 'black'
  btn.value = '라이트모드';
  isDark=!isDark;
}

