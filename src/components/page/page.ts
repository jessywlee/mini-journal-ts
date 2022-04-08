export class PageComponent {
  private element: HTMLUListElement;
  constructor(pageMenu: string) {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', pageMenu);
    this.element.textContent = `${pageMenu}`;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }

  changeMenu(pageMenu: string) {
    this.element.textContent = `${pageMenu}`;
  } 
}