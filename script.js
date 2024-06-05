let s = 0;

function updateTimerDisplay(minutes, seconds) {
    let timer = document.getElementById('time-left');
     timer.textContent = minutes.toString() + ':' + seconds.toString();
}

function startTimer(duration) {
    s = duration;
    let timerId = setInterval(() => {
        let minutes = Math.floor(s/60);
        let seconds = s % 60;

        updateTimerDisplay(minutes, seconds)

        if (s <= 0) {
            clearInterval(timerId);
        }
        else {
            s -- ; 
        }
    }, 1000);
}


startTimer(2000);