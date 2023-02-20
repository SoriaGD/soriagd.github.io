/*Nav*/
const menu =document.querySelector(".menu");
const openMenuBtn =document.querySelector(".open-menu");
const closeMenuBtn =document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu)
closeMenuBtn.addEventListener("click", toggleMenu)

const menuLinks =document.querySelectorAll('.menu a[href^="#"]')

menuLinks.forEach(menuLink => {
menuLink.addEventListener("click", function() {
    menu.classList.toggle("menu_opened");
    })
})
/*Nav end*/

/*Formulario*/
const $form = document.querySelector('#form')
const $buttomMailto = document.querySelector('#envio')
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
const form = new FormData(this)
console.log(form.get('name'))
$buttomMailto.setAttribute('href', `mailto:soriaguillermodavid@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
$buttomMailto.click()
}
/*Formulario end*/
/*UP*/
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }
    else{
        document.querySelector('.go-top-container')
        .classList.remove('show')
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/*UP end*/
