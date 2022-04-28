const etchContainer = document.getElementById('etch_container');
const resetButton = document.getElementById('reset');


for (let i = 1; i <= 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.setAttribute('style', 'border: 1px solid blue; width: 100%; height:100%;');
    newDiv.addEventListener('mouseover', () => newDiv.setAttribute('style', 'background-color: lightblue;'));
    etchContainer.appendChild(newDiv);
}

const divs = document.getElementsByClassName('box');
console.log(divs);

function resetDivs() {
    divs.setAttribute('style','background-color: white;');
}

resetButton.addEventListener('click', resetDivs);