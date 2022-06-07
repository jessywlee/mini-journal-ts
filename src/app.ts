import { PageComponent } from './components/page/page.js';

class App {
	private page: PageComponent;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);
		this.page.changeMenu("home");

		const homeButton = document.querySelector(".button-home");
		homeButton?.addEventListener('click', () => {
			this.page.changeMenu('home');
		})

		const tasksButton = document.querySelector(".button-tasks");
		tasksButton?.addEventListener("click", () => {
			this.page.changeMenu('tasks');
		});

		const playlistButton = document.querySelector(".button-playlist");
		playlistButton?.addEventListener("click", () => {
			this.page.changeMenu('playlist');
		});

		const deleteAllButton = document.querySelector('.delete-button');
		deleteAllButton?.addEventListener('click', () => {
			const allInputs = document.querySelectorAll('.inputs');
			const allInputsArray = [...allInputs] as HTMLInputElement[];
			allInputsArray.forEach((input) => {
				input.value = "";
			})
		})
	}
}

new App(document.querySelector('.main-document') as HTMLElement);
