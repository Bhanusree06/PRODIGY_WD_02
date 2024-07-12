// let startTime;
// let updatedTime;
// let difference;
// let tInterval;
// let running = false;
// let paused = false;
// let lapNumber = 1;

// const display = document.getElementById('display');
// const lapsContainer = document.getElementById('laps');

// document.getElementById('start').addEventListener('click', start);
// document.getElementById('pause').addEventListener('click', pause);
// document.getElementById('reset').addEventListener('click', reset);
// document.getElementById('lap').addEventListener('click', lap);

// function start() {
//     if (!running) {
//         startTime = new Date().getTime();
//         tInterval = setInterval(getShowTime, 10);
//         running = true;
//         paused = false;
//         display.style.background = "#FF0000";
//         display.style.color = "white";
//     }
// }

// function pause() {
//     if (!paused) {
//         clearInterval(tInterval);
//         paused = true;
//         running = false;
//         display.style.background = "#A9A9A9";
//         display.style.color = "white";
//     }
// }

// function reset() {
//     clearInterval(tInterval);
//     running = false;
//     paused = false;
//     display.innerHTML = "00:00:00.0";
//     display.style.background = "#FFFFFF";
//     display.style.color = "black";
//     lapsContainer.innerHTML = "";
//     lapNumber = 1;
// }

// function lap() {
//     if (running) {
//         const lapTime = display.innerHTML;
//         const lapDiv = document.createElement('div');
//         lapDiv.innerHTML = `Lap ${lapNumber}: ${lapTime}`;
//         lapsContainer.appendChild(lapDiv);
//         lapNumber++;
//     }
// }

// function getShowTime() {
//     updatedTime = new Date().getTime();
//     difference = updatedTime - startTime;

//     let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((difference % (1000 * 60)) / 1000);
//     let milliseconds = Math.floor((difference % 1000) / 100);

//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;

//     display.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`;
// }