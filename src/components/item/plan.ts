export class PlanComponent {
	private element: HTMLElement;
	constructor() {
		this.element = document.createElement("div");
		this.element.className = "home-input-container";
		this.element.innerHTML = `
    <h3 style="text-align: center;">Home</h3>
    <div class="home-input">
      <span>Today I am feeling...</span>
      <input id="input-feeling" class="inputs" type="text">
    </div>
    <div class="home-input">
      <span>Today my goal is...</span>
      <input id="input-goal" class="inputs" type="text">
    </div>
    <div class="home-input">
      <span>Today I am grateful for...</span>
      <input id="input-grateful" class="inputs"type="text">
    </div>`;
	}
	savePlanOnLocalStorage() {
		const inputFeeling = document.querySelector("#input-feeling");
		const inputGoal = document.querySelector("#input-goal");
    const inputGrateful = document.querySelector("#input-grateful");

		inputFeeling?.addEventListener("change", (e: Event) => {
      this.saveInputValue(e, 'todayFeeling');
    });
    inputGoal?.addEventListener("change", (e: Event) => {
			this.saveInputValue(e, "todayGoal");
    });
    inputGrateful?.addEventListener("change", (e: Event) => {
			this.saveInputValue(e, "todayGrateful");
		});
	}
	saveInputValue(event: Event, inputName: string): void {
		const input = event.target as HTMLInputElement;
		const value = input.value;
		if (value) {
			localStorage.setItem(inputName, value);
		}
	}
	attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
		const previousMenu = parent.childNodes[0];
		previousMenu?.remove();
		
		parent.insertAdjacentElement(position, this.element);
	}
}