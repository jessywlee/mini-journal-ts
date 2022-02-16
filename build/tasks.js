"use strict";
let taskArray = [];
const taskData = localStorage.getItem("tasks");
if (taskData) {
    taskArray = JSON.parse(taskData);
}
const taskList = document.querySelector(".task-list");
const addTaskButton = document.querySelector(".add-button");
function loadTask(tasks) {
    console.log('load');
    tasks.forEach((task) => {
        const taskCheckBox = document.createElement("input");
        const taskDeleteButton = document.createElement("button");
        const taskDeleteIcon = document.createElement("i");
        taskDeleteButton.addEventListener("click", (e) => {
            deleteTask(e);
        });
        const taskInput = document.createElement("input");
        const taskItem = document.createElement("li");
        taskCheckBox.type = "checkbox";
        taskCheckBox.className = "task-checkbox";
        taskDeleteButton.className = "task-delete-btn";
        taskDeleteIcon.className = "far fa-trash-alt fa-lg";
        taskDeleteIcon.accessKey = task.id.toString();
        taskInput.type = "text";
        taskInput.className = "task-input";
        taskInput.id = task.id.toString();
        taskInput.value = task.task;
        taskItem.className = "task-item";
        taskItem.accessKey = task.id.toString();
        taskDeleteButton.appendChild(taskDeleteIcon);
        taskItem.appendChild(taskCheckBox);
        taskItem.appendChild(taskInput);
        taskItem.appendChild(taskDeleteButton);
        taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(taskItem);
    });
}
function addTask(e) {
    console.log('add');
    e.preventDefault();
    const task = {
        task: "",
        id: Math.floor(Math.random() * 10000),
    };
    taskArray.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    const taskCheckBox = document.createElement("input");
    const taskDeleteButton = document.createElement("button");
    const taskDeleteIcon = document.createElement("i");
    taskDeleteButton.addEventListener("click", (e) => {
        deleteTask(e);
    });
    const taskInput = document.createElement("input");
    const taskItem = document.createElement("li");
    taskCheckBox.type = "checkbox";
    taskCheckBox.className = "task-checkbox";
    taskDeleteButton.className = "task-delete-btn";
    taskDeleteIcon.className = "far fa-trash-alt fa-lg";
    taskDeleteIcon.accessKey = task.id.toString();
    taskInput.type = "text";
    taskInput.className = "task-input";
    taskInput.id = task.id.toString();
    taskItem.className = "task-item";
    taskItem.accessKey = task.id.toString();
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
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}
function deleteTask(e) {
    const target = e.target;
    const taskId = target.accessKey;
    taskArray.forEach((task, index) => {
        if (task.id === Number(taskId)) {
            taskArray.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(taskArray));
        }
    });
    location.reload();
}
loadTask(taskArray);
addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener("click", (e) => {
    addTask(e);
});
taskList === null || taskList === void 0 ? void 0 : taskList.addEventListener("change", (e) => {
    writeTask(e);
});
//# sourceMappingURL=tasks.js.map