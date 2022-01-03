"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const data = localStorage.getItem('tasks');
let taskArray = [];
if (data) {
    taskArray = JSON.parse(data);
}
const taskList = document.querySelector('.task-list');
const addTaskButton = document.querySelector('.add-button');
function loadTask(tasks) {
    tasks.forEach(task => {
        const taskCheckBox = document.createElement('input');
        const taskDeleteButton = document.createElement('button');
        const taskDeleteIcon = document.createElement('i');
        const taskInput = document.createElement('input');
        const taskItem = document.createElement('li');
        taskCheckBox.type = 'checkbox';
        taskCheckBox.className = 'task-checkbox';
        taskDeleteButton.className = 'task-delete-btn';
        taskDeleteIcon.className = 'far fa-trash-alt fa-lg';
        taskDeleteIcon.accessKey = task.id.toString();
        taskInput.type = 'text';
        taskInput.className = 'task-input';
        taskInput.id = task.id.toString();
        taskInput.value = task.task;
        taskItem.className = 'task-item';
        taskItem.accessKey = task.id.toString();
        taskDeleteButton.appendChild(taskDeleteIcon);
        taskItem.appendChild(taskCheckBox);
        taskItem.appendChild(taskInput);
        taskItem.appendChild(taskDeleteButton);
        taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(taskItem);
        taskDeleteIcon.addEventListener('click', e => { deleteTask(e); });
    });
}
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
    taskDeleteIcon.accessKey = task.id.toString();
    taskInput.type = 'text';
    taskInput.className = 'task-input';
    taskInput.id = task.id.toString();
    taskItem.className = 'task-item';
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
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}
function deleteTask(e) {
    return __awaiter(this, void 0, void 0, function* () {
        // e.preventDefault();
        const target = e.target;
        const taskId = target.accessKey;
        yield taskArray.forEach((task, index) => {
            if (task.id === Number(taskId)) {
                taskArray.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(taskArray));
            }
        });
    });
}
loadTask(taskArray);
addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener('click', (e) => { addTask(e); });
taskList === null || taskList === void 0 ? void 0 : taskList.addEventListener('change', (e) => { writeTask(e); });
//# sourceMappingURL=tasks.js.map