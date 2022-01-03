"use strict";
const taskArray = [];
const addTaskButton = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");
const taskItems = document.querySelectorAll(".task-item");
addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener("click", (e) => {
    addTask(e);
});
function addTask(e) {
    e.preventDefault();
    const item = document.createElement("li");
    const input = document.createElement("input");
    const button = document.createElement("button");
    const icon = document.createElement("i");
    icon.className = "far fa-trash-alt fa-lg";
    button.className = "task-delete-btn";
    input.className = "task-input";
    item.className = "task-item";
    button.appendChild(icon);
    taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(item);
}
const task = {
    task: "hello",
    id: 1,
};
//# sourceMappingURL=tasks.js.map