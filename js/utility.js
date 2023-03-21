function switchVisibility(toShow,toHide){
    const content1 = document.getElementById(toShow);
    content1.classList.toggle('d-none');
    if (toHide != undefined) {
      const content2 = document.getElementById(toHide);
      content2.classList.toggle('d-none');
    }
};
function preventSubmitRefresh(form){
  form.addEventListener('submit', (e) => {
      e.preventDefault();
} )
};
function randomNumber(max) {
  return Math.round(Math.random() * (max - 1)) + 1;
};
function generateLi(listIngredients, listToAppend, tohide, toshow) {
let iterable = 0;
const ulDestination = document.getElementById(listToAppend);
while (iterable < listIngredients.length){
    const ingredient = document.createElement('li');
    ingredient.innerText = listIngredients[iterable];
    ulDestination.appendChild(ingredient);
    iterable++;
}
switchVisibility(toshow, tohide)
};
function separe(buttons){
  for (let i = 0; i < buttons.length; i++){
      buttons[i].style.translate = 0;
    }
};
function drawSquare(content, width){
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `calc(100% / ${width})`;
  square.style.height = `calc(100% / ${width})`;
  square.innerHTML = content;
  return square;
}
function generateRandomArray(lenght, maxSingleNumber){
  const myArray = []
  while (myArray.length < lenght){
      const randomNum = randomNumber(maxSingleNumber);
      if (!myArray.includes(randomNum)) {
          myArray.push(randomNum);
      }
  }
  return myArray;
}
function simulateClick(element) {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(event);
  element.dispatchEvent(new Event('removeClick'));
}
function clickAll (list) {
  let alreadyClicked = ['bomb','safe']
  for (let i = 0; i < list.length; i++) {
      if (!alreadyClicked.includes(list[i].classList[1])) {
          simulateClick(list[i])
      }
  }
}
function showAllBombs(bombsArray) {
  const squares = document.querySelectorAll('.square')
  for (let square of squares) {
      if (bombsArray.includes(parseInt(square.innerText))) {
          square.classList.add('bomb')
      }
  }
}
function generateElementsByArray(elementType, content, wrapper){
  const singleElement = document.createElement(elementType);
  singleElement.innerText = content;
  wrapper.appendChild(singleElement);
}