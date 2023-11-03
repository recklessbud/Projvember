// get all the divs with class of panels from the html
const panels = document.querySelectorAll('.panel')


//l0op through the div using foreach
 panels.forEach((panel) => {
     panel.addEventListener('click', () =>{
        removeActiveClass()
     panel.classList.add('active')
     })
 })

//define a function to work in event listener
 function removeActiveClass(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
 }



 /**
  * day 1 of 50 projects
  *   did the expansion card proj where when the card picture is clicked it expands
  *  new thing learned is the nth:type() and more ideas on how to use loops
  */