const togle=document.querySelector('.togle');
const menu=document.querySelector('.header_menu');

togle.addEventListener('click', () => {
    menu.classList.toggle("active");
})