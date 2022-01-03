type Task = {
	task: string;
	id: number;
};

const data = localStorage.getItem("tasks");
let taskArray: Array<Task> = [];
if (data) {
	taskArray = JSON.parse(data);
}

const taskList = document.querySelector(".task-list");
const addTaskButton = document.querySelector(".add-button");

function loadTask(tasks: Array<Task>): void {
	tasks.forEach((task) => {
		const taskCheckBox = document.createElement("input");
		const taskDeleteButton = document.createElement("button");
		const taskDeleteIcon = document.createElement("i");
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
		taskList?.appendChild(taskItem);

		taskDeleteIcon.addEventListener("click", (e) => {
			deleteTask(e);
		});
	});
}

function addTask(e: Event): void {
	e.preventDefault();
	const task: Task = {
		task: "",
		id: Math.floor(Math.random() * 10000),
	};
	taskArray.push(task);
	localStorage.setItem("tasks", JSON.stringify(taskArray));

	//add DOM element
	const taskCheckBox = document.createElement("input");
	const taskDeleteButton = document.createElement("button");
	const taskDeleteIcon = document.createElement("i");
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
	taskList?.appendChild(taskItem);
}

function writeTask(e: Event): void {
	const target = e.target as HTMLInputElement;
	const taskValue = target.value;
	const taskId = target.id;

	taskArray.forEach((task) => {
		if (task.id === Number(taskId)) {
			task.task = taskValue;
		}
	});

	localStorage.setItem("tasks", JSON.stringify(taskArray));
}

async function deleteTask(e: Event): Promise<void> {
	// e.preventDefault();
	const target = e.target as HTMLButtonElement;
	const taskId = target.accessKey;

	await taskArray.forEach((task, index) => {
		if (task.id === Number(taskId)) {
			taskArray.splice(index, 1);
			localStorage.setItem("tasks", JSON.stringify(taskArray));
		}
	});
}

loadTask(taskArray);
addTaskButton?.addEventListener("click", (e) => {
	addTask(e);
});
taskList?.addEventListener("change", (e) => {
	writeTask(e);
});
