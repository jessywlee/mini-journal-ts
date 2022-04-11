import { PlanComponent } from '../item/plan.js';
type PageMenu = 'home' | 'tasks' | 'playlist';
export class PageComponent {
  private element: HTMLDivElement;
  constructor(pageMenu: string) {
    this.element = document.createElement('div');
    this.element.setAttribute('class', pageMenu);
    this.element.textContent = `${pageMenu}`;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }

  changeMenu(pageMenu: PageMenu) {
    this.element.textContent = `${pageMenu}`;
    if (pageMenu == 'home') {
      const plan = new PlanComponent();
      plan.attachTo(this.element, 'afterbegin');
      plan.savePlanOnLocalStorage();
    }
  } 
}