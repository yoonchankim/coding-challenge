const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const finToDoList = document.querySelector(".js-finToDoList");
const TODOS_LS = "toDos";
let toDos = [];
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
function finFinToDo(event) {
  const finFinBtn = event.target;
  const finFinLi = finFinBtn.parentNode;
  toDoList.appendChild(finFinLi);
  finFinBtn.innerText = "✔";
  finFinBtn.addEventListener("click", finshToDo);
}
function finshToDo(event) {
  const finBtn = event.target;
  const finLi = finBtn.parentNode;
  finBtn.innerText = "⏪";
  finToDoList.appendChild(finLi);
  finBtn.addEventListener("click", finFinToDo);
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      painToDo(toDo.text);
    });
  }
}
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function painToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  delBtn.innerText = "❌";
  finBtn.innerText = "✔";
  delBtn.addEventListener("click", deleteToDo);
  finBtn.addEventListener("click", finshToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  painToDo(currentValue);
  toDoInput.value = "";
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
