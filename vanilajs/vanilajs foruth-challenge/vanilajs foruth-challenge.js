const selectCountry = document.querySelector(".country");
function saveName(text) {
  localStorage.setItem("country", text);
}
function localstorage() {
  const val= selectCountry.options[selectCountry.selectedIndex].value;
  saveName(val);
}
function init() {
  const rcountry=localStorage.getItem("country");
  if(rcountry!==null){
    selectCountry.value=rcountry;
    selectCountry.addEventListener("change", localstorage);
  }
}
init();
