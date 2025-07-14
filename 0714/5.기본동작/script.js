document.querySelector('a').addEventListener('click',(e)=>{
  // alert('네이버로 이동')

  //기본동작 막아줌
  e.preventDefault();
  console.log('aaa');
})

document.querySelector('p').addEventListener('contextmenu',(e)=>{

  e.preventDefault();
  alert('ddd')
})

document.querySelector('p').addEventListener('dragstart',(e)=>{
  e.preventDefault();
  
})
