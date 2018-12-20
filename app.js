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
  //remove icon
  taskList.addEventListener("click", removeTask);
  //clear task  button
  clearBtn.addEventListener("click", clearTasks);
  // filter tasks
  filter.addEventListener("keyup", filterTasks);
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
//Remove li
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
// Clear Task Button
function clearTasks(e) {
  // taskList.innerHTML = ""; or

  //coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements

  // While loop
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//Filter
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
  // console.log(text);
}
