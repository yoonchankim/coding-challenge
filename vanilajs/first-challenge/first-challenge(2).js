// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
alert("fuk");
const superEventHandler = {
  hover:function(){
    title.style.color= colors[0];
    title.innerHTML = "The mouse is here!";
    console.log("The mouse is here!");
  },
  nothover:function(){
    title.style.color= colors[1];
    title.innerHTML = "The mouse is gone!";
    console.log("The mouse is gone!");
  },
  resize:function(){
    title.style.color= colors[2];
    title.innerHTML = "You just resized!";
    console.log("You just resized!");
  },
  contextmenu:function(){
    title.style.color= colors[3];
    title.innerHTML = "That was a right click!";
    console.log("That was a right click!");
  }
};
title.addEventListener("mouseover",superEventHandler.hover);
title.addEventListener("mouseout", superEventHandler.nothover);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
