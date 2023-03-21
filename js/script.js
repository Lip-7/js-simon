document.getElementById('btn-start').addEventListener('click', () => {
    switchVisibility('playButton', 'game');
    const pcNumbers = generateRandomArray(5, 100)
    const numsPlace = document.getElementById('pcNumbers')
    let timer = 30
    for (let number of pcNumbers){
        generateElementsByArray('span', number, numsPlace)
    }
    setInterval(() => {
        if (timer > 0) {
            timer--
            document.getElementById('counter').innerText = timer
        }
    }, 1000);
    setTimeout(() => {
        switchVisibility('startGame', 'main-game');
    }, 10000);
    guessingTime(pcNumbers);
});