console.log('timer');

// timer API - built-in library in the browser

// separation of concerns
// data

var startBtn = document.querySelector('.start-btn');
var pauseBtn = document.querySelector('.pause-btn');
var resetBtn = document.querySelector('.reset-btn');
var display = document.querySelector('.display');

var seconds = 0;
display.textContent = seconds;

var timerId = null; // falsey

var handleStart = () => {
  // guard condition
  if (timerId) {
    return
  } else {
    timerId = setInterval( () => {
      seconds++;
      display.textContent = seconds;
    }, 1000)
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
  }
}

var handlePause = () => {
  clearInterval(timerId);
  timerId = null;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

var handleReset = () => {
  clearInterval(timerId);
  timerId = null;
  display.textContent = 0;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
}

pauseBtn.disabled = true;
resetBtn.disabled = true;

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
resetBtn.addEventListener('click', handleReset);
