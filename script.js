
let timerInterval;
let countdownTime = 300; // Set the countdown time in seconds (5 minutes)

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("resetButton").disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    countdownTime = 300; // Reset the countdown time
    updateTimer();
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("resetButton").disabled = true;
}

function updateTimer() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    const timerDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("timer").textContent = timerDisplay;

    if (countdownTime === 0) {
        clearInterval(timerInterval);
        document.getElementById("startButton").disabled = false;
        document.getElementById("stopButton").disabled = true;
        document.getElementById("resetButton").disabled = false;
    } else {
        countdownTime--;
    }
}