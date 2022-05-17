import { TaskComponent } from "../item/task.js";
export class AddItemComponent {
	private element: HTMLElement;
	constructor(title: 'Tasks' | 'Playlist') {
		this.element = document.createElement("div");
		this.element.id = "tasks-form";
		this.element.innerHTML = `
      <div class="tasks-header">
        <h3 style="text-align: center">${title}</h3>
        <button class="add-task-button">
          <i class="fas fa-plus-circle fa-2x"></i>
        </button>
      </div>
      <ul class="task-list"></ul>
    `;
	}

	addTaskItem() {
    const task = new TaskComponent();
    const taskList = document.querySelector('.task-list') as HTMLUListElement;
		task.attachTo(taskList);
	}

	attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
		const previousMenu = parent.childNodes[0];
		previousMenu?.remove();
		parent.insertAdjacentElement(position, this.element);
	}
}