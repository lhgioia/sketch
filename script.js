// create sketch grid using css grid

const gridSideLength = 100;

const gridDivNumber = gridSideLength * gridSideLength;

const gridPixels = 750;

const body = document.querySelector('body');

const buttonDiv = document.createElement('div');
body.appendChild(buttonDiv);

const button = document.createElement('button');
buttonDiv.appendChild(button);

const wrapperDiv = document.createElement('div');
body.appendChild(wrapperDiv);
// const wrapperDiv = document.querySelector('#wrapperDiv');

wrapperDiv.style.height = `${gridPixels}px`;
wrapperDiv.style.width = `${gridPixels}px`;

wrapperDiv.style.display = 'grid';

wrapperDiv.style.gridTemplateColumns = `repeat(${gridSideLength}, 1fr)`;

for (let i = 0; i < gridDivNumber; i++) {
    const pixelDiv = document.createElement('div');
    pixelDiv.addEventListener('mouseover', changeBackground);
    wrapperDiv.appendChild(pixelDiv);
};

function changeBackground(e) {
    e.target.style.background = 'black';
};