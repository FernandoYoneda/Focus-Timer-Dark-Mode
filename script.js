// Elements
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
// ------------
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTimer')
const buttonRemoveTime = document.querySelector('.removeTime')
// ------------
const soundForest = document.querySelector('.forest')
const soundRain = document.querySelector('.rain')
const soundCoffeeShop = document.querySelector('.coffeeShop')
const soundFirePlace = document.querySelector('.fireplace')
// ------------
const volumeForest = document.getElementById('forest');
const volumeRain = document.getElementById('rain');
const volumeCoffee = document.getElementById('coffeeShop');
const volumeFireplace = document.getElementById('fireplace');
console.log(volumeForest)

// ------------
const buttonModeLight = document.querySelector('.day')
const buttonModeDark = document.querySelector('.night')
// ------------





// End of elements 

// Events

buttonPlay.addEventListener("click", function () {
    play()
    countdown()
    pressButton()
})

buttonPause.addEventListener("click", function () {
    pause()
    hold()
    pressButton()
})
buttonStop.addEventListener("click", function () {
    reset()
    stopCount()
    stopSound()
})
buttonAddTime.addEventListener("click", function () {
    addTime()
})
buttonRemoveTime.addEventListener('click', function () {
    removeTime()
})
// -------------------------------------------------
soundForest.addEventListener("click", function () {
    forest()
})
soundRain.addEventListener("click", function () {
    Rain()
})
soundCoffeeShop.addEventListener("click", function () {
    coffeeShop()
})
soundFirePlace.addEventListener("click", function () {
    fireplace()
})
// -------------------------------------------------
buttonModeLight.addEventListener("click", function () {
    darkMode()
})

buttonModeDark.addEventListener("click", function () {
    darkMode()
})

volumeForest.addEventListener('click', function () {
    volume(volumeForest);        
})
volumeRain.addEventListener('click', function () {
    volume(volumeRain);
})
volumeCoffee.addEventListener('click', function () {
    volume(volumeCoffee);
})
volumeFireplace.addEventListener('click', function () {
    volume(volumeFireplace);
})


// End of events

//Controls

function play() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
}
function pause() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
}

function stopCount() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

}


function playSound(sound) {
    sound.classList.toggle('buttonOn');


    if (sound.classList.length > 1) {
        play(sound.classList[0]);
       
    }
    else {
        // sounds.pause(sound.classList[0]);
        pause(sound.classList[0]);
    }
}



function forest() {
    playSound(soundForest);

}
function Rain() {
    playSound(soundRain);
}
function coffeeShop() {
    playSound(soundCoffeeShop);
}
function fireplace() {
    playSound(soundFirePlace);
}


function darkMode() {
    buttonModeLight.classList.toggle('hide')
    buttonModeDark.classList.toggle('hide')
    document.body.classList.toggle('darkMode');
}




//End of  controls

// Timer
let minutes = Number(minutesDisplay.textContent)

function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function countdown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let timeUp = minutes <= 0 && seconds <= 0

      

        if (timeUp) {
            reset()
            stopSound()
            return
        }

        if (seconds <= 0) {
            seconds = 60
            --minutes

        }

        updateDisplay(minutes, String(--seconds))
        countdown()
    }, 1000)
}

function hold() {
    clearTimeout(timerTimeOut)
}

function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)

}

function addTime() {

    minutes += 5

    seconds = Number(secondsDisplay.textContent)
    updateDisplay(minutes, seconds)
}

function removeTime() {


    if (minutes <= 0) {
        reset()
        stopSound()
        return
    } else {
        minutes -= 5
    }
    // minutes -= 5
    seconds = Number(secondsDisplay.textContent)
    updateDisplay(minutes, seconds)
}

// End of timer

// Sounds


const PressAudio = new Audio("./sounds/button-press.wav")
const StopAudio = new Audio("./sounds/stop-sound.mp3")



function pressButton() {
    PressAudio.play()
}

function stopSound() {
    StopAudio.play()
}

function volume(value){
    wav.volume(value);
}

const sounds = {
    forest: new Audio("./sounds/forest.wav"),
    rain: new Audio("./sounds/rain.wav"),
    coffeeShop: new Audio("./sounds/coffeeShop.wav"),
    fireplace: new Audio("./sounds/fireplace.wav")
};

sounds.forest.loop = true
sounds.rain.loop = true
sounds.coffeeShop.loop = true
sounds.fireplace.loop = true

function play(choice) {
    switch (choice) {
        case 'forest': sounds.forest.play(); break;
        case 'rain': sounds.rain.play(); break;
        case 'coffeeShop': sounds.coffeeShop.play(); break;
        case 'fireplace': sounds.fireplace.play(); break;
    }
}

function pause(choice) {
    switch (choice) {
        case 'forest': sounds.forest.pause(); break;
        case 'rain': sounds.rain.pause(); break;
        case 'coffeeShop': sounds.coffeeShop.pause(); break;
        case 'fireplace': sounds.fireplace.pause(); break;
    }
}

function volume(obj) {
    let choices = obj.id
    console.log(choices)

    switch (choices) {
        case 'forest': sounds.forest.volume = obj.value; break;
        case 'rain': sounds.rain.volume = obj.value; break;
        case 'coffeeShop': sounds.coffeeShop.volume = obj.value; break;
        case 'fireplace': sounds.fireplace.volume = obj.value; break;
    }
}


// End of sounds
