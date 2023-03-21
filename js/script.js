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

function guessingTime(correctArray) {
    document.getElementById('btnGuess').addEventListener('click', () => {
        switchVisibility('gameResult')
        let counterArray = []
        const userNums = document.querySelector('input').value.split(' ')
        for (let numb of userNums){
            numb = parseInt(numb)
            if (correctArray.includes(numb)) {
                counterArray.push(numb);
            }
        }
        document.getElementById('numbersGuessed').innerHTML = counterArray.length
        for (let i = 0; i < correctArray.length; i++) {
            const singleNumber = document.createElement('span')
            if (counterArray.includes(correctArray[i])) {
                singleNumber.classList.add('correct')
            }else{
                singleNumber.classList.add('wrong')
            }
            singleNumber.innerText = correctArray[i]
            document.getElementById('numbersEntered').appendChild(singleNumber)
        }
    })
}