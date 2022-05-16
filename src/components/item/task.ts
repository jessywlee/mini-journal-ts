export class TaskComponent {
	private element: HTMLElement;
	constructor() {
		//task component말고 task 추가 component가 따로 필요해보임
		//page: task 추가, 헤더 컴포 -> task component
		this.element = document.createElement("li");
		this.element.className = "tasks-item";
		this.element.innerHTML = `
			<input class="task-checkbox" type="checkbox" />
			<input class="task-input" type="text" />
			<button class="task-delete-btn">
				<i class="far fa-trash-alt fa-lg"></i>
			</button>
		`;
  }
	
	
	saveInputValue(event: Event, inputName: string): void {
		const input = event.target as HTMLInputElement;
		const value = input.value;
		if (value) {
			localStorage.setItem(inputName, value);
		}
	}
	attachTo(parent: HTMLUListElement) {
		console.log(parent)
		parent.appendChild(this.element);
	}
}
