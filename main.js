let timerdisplay = document.querySelector('.timerdisplay');

let start = document.getElementById('start');
let stope = document.getElementById('stope');
let reset = document.getElementById('reset');
let help = document.getElementById('help')

let mseec = 00;
let secs = 00;
let mins = 00;

let timerid = null;


// Add event listener for the spacebar key
document.addEventListener('keydown', function(event) {
    // If the spacebar key is pressed, start or stop the timer
    if (event.keyCode === 32) {
      if (timerid !== null) {
        clearInterval(timerid);
      } else {
        timerid = setInterval(startTimer, 10);
      }
    }
  });


help.addEventListener('click',function(){
    alert('Use Space key for start and stope')
})

start.addEventListener('click', function () {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer, 10);
});

stope.addEventListener('click', function () {
    clearInterval(timerid);
});

reset.addEventListener('click', function () {
    clearInterval(timerid);
    timerdisplay.innerHTML = '00 : 00 : 00';

    mseec = secs = mins = 0;
});

function startTimer() {
    mseec++;
    if (mseec === 100) {
        mseec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = mseec < 10 ? `0${mseec}` : mseec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerdisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
