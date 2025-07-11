// js 태그를 생성
let div= document.createElement('div');

div.calssName = 'box';
div.innerHTML='<b>div 태그만듬'

console.log(div);

document.body.prepend(div);

//요소.append : 해당 요소 왼쪽 마지막에 추가
//요소.prepend : 해당 요소 안쪼 첫번째에 추가
//요소.befoer : 해당 요소 전에 추가
//요소. after : 해당 요소 후에 추가


const ulTag = document.querySelector('.list')

let pTag= document.createElement('p');
pTag.innerHTML = "앞에 들어갈 p태그";

ulTag.before(pTag);

let liTag = document.createElement('li');
liTag.innerHTML='새로 생성한 li태그'

ulTag.prepend,ㅣ,(liTag)

liTag.remove()