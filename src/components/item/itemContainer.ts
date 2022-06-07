import { TaskComponent } from "./task.js";
export class ItemContainerComponent {
	private element: HTMLElement;
	constructor(title: 'Tasks' | 'Playlist') {
		this.element = document.createElement("div");
		this.element.id = "item-form";
		this.element.innerHTML = `
      <div class="item-header">
        <h3 style="text-align: center">${title}</h3>
        <button class="add-item-button">
          <i class="fas fa-plus-circle fa-2x"></i>
        </button>
      </div>
      <ul class="item-list"></ul>
    `;
	}

	addItemContainer(item: 'Tasks'| 'Playlist') {
		if (item === "Tasks") {
			const task = new TaskComponent();
			const taskList = document.querySelector(".item-list") as HTMLUListElement;
			task.attachTo(taskList);
			taskList.addEventListener("change", (e) => {
				task.saveInputValue(e);
			}); //ulListElement에 이벤트 등록
		}
	}

	attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
		const previousMenu = parent.childNodes[0];
		previousMenu?.remove();
		parent.insertAdjacentElement(position, this.element);
	}
}