const addBtn = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';
  li.textContent = taskText;

  // Toggle complete
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  // Stop click propagation to prevent toggling when deleting
  deleteBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
}