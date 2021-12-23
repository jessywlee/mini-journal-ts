let inputFeeling = document.getElementById("input-feeling");
let inputGoal = document.getElementById("input-goal");
let inputGrateful = document.getElementById("input-grateful");
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
