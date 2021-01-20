const range = document.querySelector(".range");
const title = document.querySelector("h2");
const submitForm = document.querySelector(".submit-form");
const number = document.querySelector(".number");
const submit = document.querySelector(".submit");
const body = document.querySelector("body");
const div = document.querySelector(".div");
const r1=div.querySelector(".r1");
const r2=div.querySelector(".r2");
function changeRange() {
  const currentValue = range.value;
  title.innerText = `Generate a number between 0 and ${currentValue}`;
  number.max = currentValue;
}
function handleSubmit(event) {
  event.preventDefault();
}
function submitNumber() {
  const numberValue = number.value;
  const currentValue = range.value;
  r1.classList.add("block");
  r2.classList.add("thick");
  const numberRandom = Math.floor(Math.random() * currentValue);
  r1.innerText = `You chose: ${numberValue}, the machine chose: ${numberRandom}.`;
  if (parseInt(numberRandom)=== parseInt(numberValue)) {
    r2.innerText = `You won!`;
  } else {
    r2.innerText = `You lost!`;
  }
}
function init() {
  range.addEventListener("input", changeRange);
  submitForm.addEventListener("submit", handleSubmit);
  submit.addEventListener("click", submitNumber);
}
init();
