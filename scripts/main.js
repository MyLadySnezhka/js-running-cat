
const catlink = document.querySelector('.cathouse');

catlink.style.left = '40%';

catlink.addEventListener('mouseenter', (ev) => {
    
    if(catlink.style.left == '72%') {
        catlink.style.left = '1%';
    } 
        else {
        catlink.style.left = '72%';
    }
});

const runlink = document.querySelector('.catanime');

runlink.style.left = '40%';

const wraperlink = document.querySelector('.wrapper2');
const wraperstyle = window.getComputedStyle(wraperlink);
let widthwrapper2 = wraperstyle.width;
console.log(widthwrapper2); 
   // let koord = wraperlink.style.width/2;
   // console.log(koord);



/*
setInterval(function(){
	y.textContent = window.getComputedStyle(runlink).left
}, 60);
*/

runlink.addEventListener('mouseenter', (ev) => {
       
    
    ypx = window.getComputedStyle(runlink).left;
    //y = ypx.replace(/[\D]+/g, '');  - убрать все небуквенные элементы из записи
    y = Number(ypx.replace("px", '')); //убрать px из значения
    console.log('Мышку поймали в координате', y);

    if(y >= 600) {
        console.log('прыг налево');
        runlink.style.left = '0px';
    } 
        else {
        console.log('прыг направо');
        runlink.style.left = '1000px';
    }
});



