const catlink = document.querySelector('.cathouse');

//const a = catlink.style.left;
//let a = catlink.style.left;

catlink.style.left = '40%';

catlink.addEventListener('mouseenter', (ev) => {
    
    if(catlink.style.left == '72%') {
        catlink.style.left = '1%';
    } 
        else {
        catlink.style.left = '72%';
    }
});


