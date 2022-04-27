let divContainer = document.querySelector('.container');
console.log(divContainer);

for (let i = 1; i <= 16; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add([i]);
    newDiv.setAttribute('style', 'border: 1px solid blue; width: 250px; height: 250px;');
    divContainer.appendChild(newDiv);
}