const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__lista');
const links = document.querySelectorAll('.nav__link');

menu.addEventListener('click', function(){

    menuList.classList.toggle('nav__lista--show');

});

links.forEach(function(link){

    link.addEventListener('click', function(){

        menuList.classList.remove('nav__lista--show')

    })
});