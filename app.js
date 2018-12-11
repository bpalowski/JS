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
  /// crete Li
  const li = document.createElement("li");

  li.className = "collection-item";
  // Create Text node Apppend to li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement("a");

  link.className = "delete-item secondary-content";

  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  taskList.appendChild(li);

  taskInput.value = "";

  e.preventDefault();
}
