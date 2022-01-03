const taskArray: Array<object> = [];
type Task = {
	task: string;
	id: number;
};
const addTaskButton = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");
const taskItems = document.querySelectorAll(".task-item");

addTaskButton?.addEventListener("click", (e) => {
	addTask(e);
});

function addTask(e: Event): void {
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

	taskList?.appendChild(item);
}

const task: Task = {
	task: "hello",
	id: 1,
};
