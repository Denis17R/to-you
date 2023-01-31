const formEle = document.getElementById('form');
const nameEle = document.querySelector('name');
const passwordEle = document.getElementById('password');
const buttonEle = document.querySelector('button');
const extraEle = document.getElementById('extra');

formEle.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(passwordEle.value);
    let pass = parseInt(passwordEle.value)
    if(pass === 50){
        formEle.style.display = "none";
        extraEle.style.display = "block";
    }
})