const inputFeeling = document.getElementById('input-feeling');
const inputGoal = document.getElementById('input-goal');
const inputGrateful = document.getElementById('input-grateful');

function saveInputValue(event: Event, inputName: string): void {
  const input = event.target as HTMLInputElement;
  const value = input.value;

  if (value) {
    localStorage.setItem(inputName, value);
  }
}

if (inputFeeling) {
  inputFeeling.addEventListener('change', (e) => { saveInputValue(e, 'todayFeeling')});
}
if (inputGoal) {
  inputGoal.addEventListener('change', (e) => { saveInputValue(e, 'todayGoal')});
}
if (inputGrateful) {
  inputGrateful.addEventListener('change', (e) => { saveInputValue(e, 'todayGrateful')});
}
