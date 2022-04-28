let etchContainer = document.getElementById('etch_container');
console.log(etchContainer);

for (let i = 1; i <= 16; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.setAttribute('style', 'border: 1px solid blue; width: 100%; height:100%');
    etchContainer.appendChild(newDiv);
}