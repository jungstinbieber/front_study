const btnBoard =document.querySelector('#open');
const madalBox = document.querySelector('.black-bg')

btnBoard.addEventListener('click', () => {

  document.querySelector('.black-bg').classList.add('show')
});

const btnClose = document.querySelector('#close');

btnClose.addEventListener('click',function(){
madalBox.classList.remove('show');
})

//jQuery

//$('open').on('click',() => {
//  $('.black-bg').addClass('show');
//})

//$('#close').on('click',() =>{
//  $('.black-bg').removeClass('show')
//})