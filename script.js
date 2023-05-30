// Calling The Counter
var css = document.querySelector(".checking");

// Calling The First and Second Input
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// Calling The Body
var body = document.getElementsByTagName("body")[0];

// Creating a Function that Set The Value of The Background and Input Two
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

// Make A Default Color Everytime the Page is Loaded
setGradient();

// Using This Function everytime I click an Inputs
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
