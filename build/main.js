"use strict";
const homeForm = document.querySelector(".page-container");
const inputFeeling = document.getElementById("input-feeling");
const inputGoal = document.getElementById("input-goal");
const inputGrateful = document.getElementById("input-grateful");
const refreshButton = document.querySelector(".refresh-button");
function saveInputValue(event, inputName) {
    const input = event.target;
    const value = input.value;
    if (value) {
        localStorage.setItem(inputName, value);
    }
}
function clearData(e) {
    e.preventDefault();
    localStorage.clear();
    inputFeeling.value = "";
    inputGoal.value = "";
    inputGrateful.value = "";
}
inputFeeling === null || inputFeeling === void 0 ? void 0 : inputFeeling.addEventListener("change", (e) => {
    saveInputValue(e, "todayFeeling");
});
inputGoal === null || inputGoal === void 0 ? void 0 : inputGoal.addEventListener("change", (e) => {
    saveInputValue(e, "todayGoal");
});
inputGrateful === null || inputGrateful === void 0 ? void 0 : inputGrateful.addEventListener("change", (e) => {
    saveInputValue(e, "todayGrateful");
});
refreshButton === null || refreshButton === void 0 ? void 0 : refreshButton.addEventListener("click", (e) => { clearData(e); });
//# sourceMappingURL=main.js.map