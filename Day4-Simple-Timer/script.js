const inputTime = document.getElementById("time");
const warning = document.getElementById("warning");
const startBtn = document.getElementById("timerbtn");
const timerElement = document.getElementById("timeleft");

let timeLeft = 0;
let timerInterval = null;

inputTime.addEventListener("input", () => {
  const value = parseInt(inputTime.value);
  if (isNaN(value) || value < 1 || value > 10000) {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
  }
});

function updateTimer() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timerInterval);
  }
}

startBtn.addEventListener("click", () => {
  const value = parseInt(inputTime.value);
  if (isNaN(value)) {
    alert("Enter a value");
    return;
  }

  clearInterval(timerInterval);

  timeLeft = value;
  updateTimer(); // call once to show immediate time
  timerInterval = setInterval(updateTimer, 1000);
});
