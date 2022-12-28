// create sketch grid using css grid

let gridSideLength = 20;

let gridDivNumber = gridSideLength * gridSideLength;

const gridPixels = 750;

const body = document.querySelector('body');

const wrapperDiv = document.createElement('div');

const buttonDiv = document.createElement('div');
body.appendChild(buttonDiv);

const button = document.createElement('button');
buttonDiv.appendChild(button);
button.style.width = '50px';
button.style.height = '20px';
button.textContent = 'reset';

button.addEventListener('click', gridReset);

function gridReset() {
    gridSideLength = prompt('enter the grid side length pixel number', 100);
    gridDivNumber = gridSideLength * gridSideLength;

    // wrapperDiv.innerHTML = '' does not work on internet explorer;
    while(wrapperDiv.firstChild) {wrapperDiv.removeChild(wrapperDiv.firstChild)};

    body.appendChild(wrapperDiv);

    wrapperDiv.style.height = `${gridPixels}px`;
    wrapperDiv.style.width = `${gridPixels}px`;

    wrapperDiv.style.display = 'grid';

    wrapperDiv.style.gridTemplateColumns = `repeat(${gridSideLength}, 1fr)`;


    createGrid();
};

function createGrid() {
    for (let i = 0; i < gridDivNumber; i++) {
        const pixelDiv = document.createElement('div');
        pixelDiv.addEventListener('mouseover', changeBackgroundRainbow);
        wrapperDiv.appendChild(pixelDiv);
    };
};

function changeBackgroundRainbow(e) {
    if (e.target.style.background != '') {
        e.target.style.background = 'black';
    } else {
    randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    e.target.style.background = randomColor;
    };
};

gridReset();