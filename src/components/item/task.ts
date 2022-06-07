
// type OnDeleteListener = () => void;
export class TaskComponent {
	private element: HTMLElement;
	// private deleteListener?: OnDeleteListener;
	constructor() {
		this.element = document.createElement("li");
		this.element.className = "task-item";
		this.element.id = `${Math.floor(Math.random() * 100000)}`;
		this.element.innerHTML = `
			<input class="task-checkbox" type="checkbox" />
			<input class="task-input" type="text"  id=${this.element.id} />
			<button class="task-delete-btn">
				<i class="far fa-trash-alt fa-lg"></i>
			</button>
		`;

		const deleteButton = this.element.querySelector(
			".task-delete-btn"
		)! as HTMLButtonElement;
		deleteButton.onclick = () => {
			this.deleteTask();
		};
	}

	saveInputValue(event: Event): void {
		const input = event.target as HTMLInputElement;
		const value = input.value;
		const taskId = input.parentElement?.id;

		if (value) {
			sessionStorage.setItem(`Task ${taskId}`, value);
		}
	}

	deleteTask(): void {
		const parentElement = this.element.parentElement as HTMLUListElement;
		sessionStorage.removeItem(`Task ${this.element.id}`);
		parentElement.removeChild(this.element);
	}

	attachTo(parent: HTMLUListElement) {
		parent.appendChild(this.element);
	}
}
