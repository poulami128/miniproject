const header = document.querySelector("header");

window.addEventListener ("scroll",function() {
    header.classList.toggle ("sticky",this.window.scroll > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = scrollReveal ({
    distance: '30px' ,
    duration: 2600,
    reset: true
});
 
sr.reveal('.home-text',{delay:280, origin:'bottom'})

sr.reveal('.featured,.cta,.new,.brand,.contact'{delay:200, origin:'bottom'})