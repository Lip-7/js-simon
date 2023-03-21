document.getElementById('btn-start').addEventListener('click', () => {
    switchVisibility('playButton', 'game');
    const pcNumbers = generateRandomArray(5, 100)
    const numsPlace = document.getElementById('pcNumbers')
    let timer = 30
    for (let number of pcNumbers){
        generateElementsByArray('span', number, numsPlace)
    }
    const countdown = setInterval(() => {
        if (timer > 0) {
            timer--
            document.getElementById('counter').innerText = timer
        }else{
            clearInterval(countdown)
        }
    }, 1000)
    const switchTimer = setTimeout(() => {
        switchVisibility('startGame', 'main-game');
    }, 30000);
    document.getElementById('timerReady').addEventListener('click', () => {
        switchVisibility('startGame', 'main-game');
        clearTimeout(switchTimer)
    })
    guessingTime(pcNumbers);
});
function timing(timer, intervallName) {
    let counter = timer -1
    if (counter > 23) {
        document.getElementById('counter').innerText = counter
        counter--
    } else {
        clearInterval(intervallName)
    }
    console.log(counter)
}