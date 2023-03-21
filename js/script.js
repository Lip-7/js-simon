document.getElementById('btn-start').addEventListener('click', () => {
    switchVisibility('playButton', 'game');
    const pcNumbers = generateRandomArray(5, 100)
    const numsPlace = document.getElementById('pcNumbers')
    let timer = 30
    for (let number of pcNumbers){
        generateElementsByArray('span', number, numsPlace)
    }
    setTimeout(() => {
        switchVisibility('startGame', 'main-game');
    }, 1000);
    guessingTime(pcNumbers);
});