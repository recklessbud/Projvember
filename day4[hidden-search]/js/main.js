const container = document.querySelector(".container")
const input = document.querySelector('input')
const btn =  document.querySelector(".btn")


btn.addEventListener('click', ()=>{
    input.focus()
    // container.classList.remove("active");/
    if(!container.classList.contains("active")){
      container.classList.add("active");
      //   container.classList.remove('active')
    }else{
        container.classList.remove("active")
    }

})
