"use strict";
const taskArray = [];
const taskList = document.querySelector('.task-list');
const addTaskButton = document.querySelector('.add-button');
function addTask(e) {
    e.preventDefault();
    const task = {
        task: "",
        id: Math.floor(Math.random() * 10000)
    };
    taskArray.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    //add DOM element
    const taskCheckBox = document.createElement('input');
    const taskDeleteButton = document.createElement('button');
    const taskDeleteIcon = document.createElement('i');
    const taskInput = document.createElement('input');
    const taskItem = document.createElement('li');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.className = 'task-checkbox';
    taskDeleteButton.className = 'task-delete-btn';
    taskDeleteIcon.className = 'far fa-trash-alt fa-lg';
    taskInput.type = 'text';
    taskInput.className = 'task-input';
    taskInput.id = task.id.toString();
    taskItem.className = 'task-item';
    taskItem.classList.add(task.id.toString());
    taskDeleteButton.appendChild(taskDeleteIcon);
    taskItem.appendChild(taskCheckBox);
    taskItem.appendChild(taskInput);
    taskItem.appendChild(taskDeleteButton);
    taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(taskItem);
}
function writeTask(e) {
    const target = e.target;
    const taskValue = target.value;
    const taskId = target.id;
    taskArray.forEach((task) => {
        if (task.id === Number(taskId)) {
            task.task = taskValue;
        }
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}
addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener('click', (e) => { addTask(e); });
taskList === null || taskList === void 0 ? void 0 : taskList.addEventListener('change', (e) => { writeTask(e); });
//# sourceMappingURL=tasks.js.map