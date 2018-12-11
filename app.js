const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners
loadEventListeners();

function loadEventListeners() {
  //add event listeners
  form.addEventListener("submit", addTask);
}

//Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add task");
  }

  e.preventDefault();
}
