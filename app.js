document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        addTask();
    }
});
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText ==='') {
        alert('Please enter a task!');
        return;
    }
  
    const taskList = document.getElementById('task-list');
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fas', 'fa-check');
    checkIcon.onclick = function() {
        li.classList.toggle('completed');
    };

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas', 'fa-trash');
    trashIcon.onclick= function() {
        taskList.removeChild(li);
    };
  
    li.appendChild(checkIcon);
    li.appendChild(trashIcon);
  
    taskList.appendChild(li);
  
    taskInput.value = '';
  }
