//drums
i = 0;
while (document.querySelectorAll(".drum").length > i) {

  document.querySelectorAll(".drum")[i].addEventListener("click", drumClick);
    function drumClick(){
      var drumKeys = this.innerHTML;
      makeSound(drumKeys)

      buttonAnimation(drumKeys)
}
i++}

document.addEventListener("keypress", function(ev){
  makeSound(ev.key)
  buttonAnimation(ev.key)
})

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
  
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;


    default:
      alert("sorry, error");

  }
}

function buttonAnimation(currentKey){
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout( function() {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100)

}



// //calculator

// function add(num1, num2){
//   return(num1+num2)
// }
// function subtract(num1, num2){
//   return(num1-num2)
// }
// function multiply(num1, num2){
//   return(num1*num2)
// }
// function calc(num1,num2, operator){
//   return operator(num1, num2)
// }