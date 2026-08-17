let timeLeft = 25 * 60, timerId = null, isWorkSession = true;
const timeDisplay = document.getElementById('time'), statusDisplay = document.getElementById('status');
function updateDisplay() { timeDisplay.textContent = `${Math.floor(timeLeft / 60).toString().padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`; }
function switchSession() { isWorkSession = !isWorkSession; timeLeft = isWorkSession ? 25 * 60 : 5 * 60; statusDisplay.textContent = isWorkSession ? 'Work Session' : 'Break Time'; updateDisplay(); }
function startTimer() { if (timerId !== null) return; timerId = setInterval(() => { timeLeft--; updateDisplay(); if (timeLeft === 0) { clearInterval(timerId); timerId = null; switchSession(); } }, 1000); }
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', () => { clearInterval(timerId); timerId = null; });
document.getElementById('resetBtn').addEventListener('click', () => { clearInterval(timerId); timerId = null; isWorkSession = true; timeLeft = 25 * 60; statusDisplay.textContent = 'Work Session'; updateDisplay(); });
if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('sw.js')); }
updateDisplay();
