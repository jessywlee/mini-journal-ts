type Task = {
	task: string;
	id: number;
};

const taskArray: Array<object> = [];
const taskList = document.querySelector('.task-list');
const addTaskButton = document.querySelector('.add-button');

function addTask (e:Event): void {
	e.preventDefault();
	const task: Task = {
	task: "",
	id: Math.floor(Math.random() * 10000)
	}
	taskArray.push(task);
	localStorage.setItem('tasks', JSON.stringify(taskArray))
	
	//add DOM element
	const taskCheckBox = document.createElement('input');
	const taskDeleteButton = document.createElement('button');
	const taskDeleteIcon = document.createElement('i');
	const taskInput = document.createElement('input')
	const taskItem = document.createElement('li');

	taskCheckBox.type = 'checkbox';
	taskCheckBox.className = 'task-checkbox';
	taskDeleteButton.className = 'task-delete-btn';
	taskDeleteIcon.className = 'far fa-trash-alt fa-lg';
	taskInput.type = 'text';
	taskInput.className = 'task-input';
	taskItem.className = 'task-item';

	taskDeleteButton.appendChild(taskDeleteIcon);
	taskItem.appendChild(taskCheckBox);
	taskItem.appendChild(taskInput);
	taskItem.appendChild(taskDeleteButton);
	taskList?.appendChild(taskItem);

}

function writeTask() {

}
addTaskButton?.addEventListener('click', (e)=> {addTask(e)});
