const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const randomButton = document.querySelector("button");

// Applies inputed gradients to the background
const setGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

/* Math.floor() function returns the largest integer less than
   or equal to a given number*/
const generateRandomColor = () => '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

// Applies randomly generated gradients
const setRandomGradient = () => {
    const randomGradient1 = generateRandomColor();
    const randomGradient2 = generateRandomColor();
    body.style.background = "linear-gradient(to right, " + randomGradient1 + ", " + randomGradient2 + ")";
    css.textContent = body.style.background + ";";
    color1.value = randomGradient1;
    color2.value = randomGradient2;
}

// Applies default
color1.value = "#b42222";
color2.value = "#0046ff";
setGradient();

// "input" event listener for color value
color1.addEventListener("input", setGradient)
// "input" event listener for second color value
color2.addEventListener("input", setGradient)
randomButton.addEventListener("click", setRandomGradient);
