function showHide(state){
  // JS 문법
  //document.getElementById('ab').style.display = state;
 // Jquey 문법
 $('#ad').css('display',state)
}

function showMsg(msg){
  //JS문법
  document.querySelector('.alert').innerHTML = msg
// JQuery 문법
$('.alert').html(msg);
}
