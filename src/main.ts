const homeForm = document.getElementById("home-form") as HTMLFormElement;
const inputFeeling = document.getElementById("input-feeling");
const inputGoal = document.getElementById("input-goal");
const inputGrateful = document.getElementById("input-grateful");
const refreshButton = document.querySelector(".refresh-button");

function saveInputValue(event: Event, inputName: string): void {
	const input = event.target as HTMLInputElement;
	const value = input.value;
	if (value) {
		localStorage.setItem(inputName, value);
	}
}

function clearData(): void {
	localStorage.clear();
	homeForm?.reset();
}

inputFeeling?.addEventListener("change", (e) => {
	saveInputValue(e, "todayFeeling");
});

inputGoal?.addEventListener("change", (e) => {
	saveInputValue(e, "todayGoal");
});

inputGrateful?.addEventListener("change", (e) => {
	saveInputValue(e, "todayGrateful");
});

refreshButton?.addEventListener("click", clearData);
