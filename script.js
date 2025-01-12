function addTask() {
    const taskInput = document.getElementById('todoInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    taskInput.value = ''; // Clear input field after adding task
}
