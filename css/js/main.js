const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

menuButton.addEventListener('click', function(){
    menu.classList.toggle('active');
});