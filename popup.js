/* Timer Code */

const startTimerBtn = document.getElementById("start-timer-btn");

startTimerBtn.addEventListener("click", () => {
  chrome.storage.local.get(["isRunning"], (res) => {
    chrome.storage.local.set({ isRunning: !res.isRunning }, () => {
      startTimerBtn.textContent = !res.isRunning
        ? "Pause Timer"
        : "Start Timer";
    });
  });
});

const resetTimerBtn = document.getElementById("reset-timer-btn");
resetTimerBtn.addEventListener("click", () => {
  chrome.storage.local.set(
    {
      timer: 0,
      isRunning: false,
    },
    () => {
      startTimerBtn.textContent = "Start Timer";
    }
  );
});

const time = document.getElementById("time");

function updateTime() {
  chrome.storage.local.get(["timer"], (res) => {
    const time = document.getElementById("time");
    const minutes = `${25 - Math.ceil(res.timer / 60)}`.padStart(2,"0");
    let seconds = "00"
    if (res.timer %60 !=0){
        seconds = `${60 - res.timer % 60}`.padStart(2,"0");
    }
    time.textContent = `${minutes}:${seconds}`;
  });
}

updateTime();
setInterval(updateTime, 1000);


/* To-Do Code */
