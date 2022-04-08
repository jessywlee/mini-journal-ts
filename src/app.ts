import { PageComponent } from './components/page.js';

class App {
	private readonly page: PageComponent;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);
	}
}

new App(document.querySelector('.main-document') as HTMLElement);

// const homeForm = document.querySelector(".page-container") as HTMLElement;
// const inputFeeling = document.getElementById("input-feeling") as HTMLInputElement;
// const inputGoal = document.getElementById("input-goal") as HTMLInputElement;
// const inputGrateful = document.getElementById("input-grateful") as HTMLInputElement;
// const refreshButton = document.querySelector(".refresh-button");

// function saveInputValue(event: Event, inputName: string): void {
// 	const input = event.target as HTMLInputElement;
// 	const value = input.value;
// 	if (value) {
// 		localStorage.setItem(inputName, value);
// 	}
// }

// function clearData(e: Event): void {
// 	e.preventDefault();
// 	localStorage.clear();
// 	inputFeeling.value = "";
// 	inputGoal.value = "";
// 	inputGrateful.value = "";
// }

// inputFeeling?.addEventListener("change", (e) => {
// 	saveInputValue(e, "todayFeeling");
// });

// inputGoal?.addEventListener("change", (e) => {
// 	saveInputValue(e, "todayGoal");
// });

// inputGrateful?.addEventListener("change", (e) => {
// 	saveInputValue(e, "todayGrateful");
// });

// refreshButton?.addEventListener("click", (e) => { clearData(e) });
