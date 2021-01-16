const selectCountry = document.querySelector(".country");
function saveName(text) {
  localStorage.setItem("country", text);
}
function localstorage() {
  const val= selectCountry.options[selectCountry.selectedIndex].value;
  console.log(val);
  saveName(val);
}
function init() {
  selectCountry.addEventListener("change", localstorage);
}
init();
