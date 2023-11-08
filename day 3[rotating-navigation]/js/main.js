const container = document.querySelector('.container')
const open = document.querySelector('#open')
const close = document.querySelector('#close')



function toggleOpen(){
    container.classList.add("show-nav")
    // alert(3)
}

function toggleClose(){
    container.classList.remove('show-nav')
    // console.log(3)
}

open.addEventListener("click", toggleOpen)
close.addEventListener("click", toggleClose)
