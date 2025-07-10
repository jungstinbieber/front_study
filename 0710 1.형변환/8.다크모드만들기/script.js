const btn = document.querySelector('.btn-mode');
const body = document.body;

btn.addEventListener('click',(e)=> {

  alert(e.target.value);

document.body.style.background = 'black';
document.body.style.color = 'white';
});