// getting the element by id
const progress = document.getElementById('progress')

// get the next button and pre btn
 const prevBtn = document.getElementById('prev')
 const nextBtn = document.getElementById("next");

//  get the circles 
const circles = document.querySelectorAll(".circle")
//  with the active classes
// set a variable to be 1
let currentActive = 1

// adding an event listener to next
nextBtn.addEventListener('click', nextFunc)

  function nextFunc() {
    // increment current active
    currentActive++
    // if the current active variable after increment is greater than circles.length it should be equal
   if(currentActive > circles.length){
      currentActive = circles.length;
 
   }



    //   call the update function 
    update()
  }

//   prev with event listener
prevBtn.addEventListener("click", prevFunc)

function prevFunc() {
    // decrement the current value because we going backwards
    currentActive--

    // if statement
    if(currentActive < 1){
        currentActive = 1
    }


    update()
}

// finaaly the update function
  function update(){
    // loop through the circles 
     circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
     })
const actives = document.querySelectorAll(".active");

  progress.style.width = (actives.length - 1) /( circles.length -1 ) * 100 + '%'

  if (currentActive === 1 ) {
    prevBtn.disabled = true
  } else if(currentActive === circles.length) {
   nextBtn.disabled = true
} else{
    prevBtn.disabled = false
    nextBtn.disabled = false;

  }
  }
