const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";
const toDos = [];


function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: toDos.length + 1
  };
  toDos.push(toDoObj);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value="";
}
function loadToDos(){
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if(loadedtoDos !== null){

  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();