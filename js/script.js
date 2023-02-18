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