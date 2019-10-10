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
  console.log(input)
  const email = input[0].value
  console.log(email)
  const validateEmail = email.indexOf("@")
  console.log(validateEmail)
  if (validateEmail < 1) {
    alert("Please enter valid email address")
  } else {
    alert("Thanks for subscribing!")
  }
  input[0].value = ""
})