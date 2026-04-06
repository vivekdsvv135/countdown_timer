

let totalTime = 600, timer, isRunning = false;
const timerDisplay = document.getElementById("timer"), startBtn = document.getElementById("startBtn");
const updateDisplay = () => timerDisplay.innerText = `${Math.floor(totalTime / 60)}:${(totalTime % 60).toString().padStart(2, '0')}`;
startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (totalTime > 0) {
        totalTime--;
        updateDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up!");
      }
    }, 1000);
  }
});
