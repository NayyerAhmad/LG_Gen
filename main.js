let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let buttons = document.querySelectorAll(".direction");
let outputCode = document.querySelector(".outputCode");
let copyBtn = document.querySelector(".copy");

let setGradient = (directionValue) => {
  document.querySelector(
    "#display"
  ).style.backgroundImage = `linear-gradient(${directionValue},${color1.value},${color2.value})`;
  outputCode.textContent = `linear-gradient(${directionValue},${color1.value},${color2.value})`;
};

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

copyBtn = () => {
  outputCode.select();
  console.log(outputCode.value);
  navigator.clipboard.writeText(outputCode.value);
  alert("Copied the text: " + outputCode.value);
};