import { PlanComponent } from '../item/plan.js';
import { ItemContainerComponent } from "../item/itemContainer.js";
type PageMenu = 'home' | 'tasks' | 'playlist';
export class PageComponent {
  // todo
  // playlist page - import url & add video
  // playlist page - video drag drop order 
  
	private element: HTMLDivElement;
	constructor() {
		this.element = document.createElement("div");
		this.element.setAttribute("class", "page-container");
	}

	attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
		parent.insertAdjacentElement(position, this.element);
	}

	changeMenu(pageMenu: PageMenu) {
    if (pageMenu == "home") {
			const plan = new PlanComponent();
			plan.attachTo(this.element, "afterbegin");
			plan.savePlanOnLocalStorage();
    } else if (pageMenu == "tasks") {
      const addTask = new ItemContainerComponent('Tasks');
      addTask.attachTo(this.element, 'beforeend')
			const addTaskButton = document.querySelector('.add-task-button');
			addTaskButton?.addEventListener('click', () => { addTask.addItemContainer('Tasks') });
    } else if (pageMenu == 'playlist') {
      const addTask = new ItemContainerComponent("Playlist");
			addTask.attachTo(this.element, "beforeend");
		}
	}
}