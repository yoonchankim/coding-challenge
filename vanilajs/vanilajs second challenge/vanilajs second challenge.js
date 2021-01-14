const screen = document.querySelector("body");
function changeColor() {
  const width = window.innerWidth;
  if (width > 900) {
    screen.style.backgroundColor = "#eebc11";
  } else if (width > 700) {
    screen.style.backgroundColor = "#904ead";
  } else {
    screen.style.backgroundColor = "#2e8ed6 ";
  }
}
function init() {
  screen.style.backgroundColor = "#904ead";
  window.addEventListener("resize", changeColor);
}
init();
