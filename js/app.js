const cart = document.querySelectorAll(".cart");
const cartNumber = document.getElementById("notif-text");
const shoppingCart = [];

let clicks = 0;

cart.forEach(function(element, index) {
  cart[index].addEventListener("click", function add(event) {
    clicks += 1;
    cartNumber.innerHTML = clicks;
    console.log(clicks);
    console.log(cart);
  });
});

const form = document.getElementsByClassName("form");
const input = document.getElementsByTagName("input");

input[1].addEventListener("click", function(event) {
  event.preventDefault()

  



  alert("Thanks for subscribing!")
  console.log(input)
  console.log(input[0].value)
 
  // validateEmail = [RegExp(/^.+@.+\..+$/.test("email"))]
  // if (email == false) {
  //   alert("Please enter valid email address")
  // } else {
  //   alert ("Thanks for subscribing!")
  // }
})

// const name = prompt("")
// function validEmail("beforeSymbol", "mySymbol", "afterSymbol", "theDot") {

}