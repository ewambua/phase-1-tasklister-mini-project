


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = () => document.querySelector('form')
  taskForm().addEventListener('submit', createNewTask)
});

function createNewTask(e) {
  e.preventDefault()
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'remove'

  const todoList = document.getElementById("tasks");
  todoList.appendChild(newTask);
  todoList.appendChild(deleteButton);
  deleteButton.addEventListener('click', removeTask)

  li.appendChild(deleteButton)
  todoList().appendChild(li)

  e.target.reset();
}

function removeTask(e){
  e.target.parentNode.remove();
}