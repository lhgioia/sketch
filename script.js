// create sketch grid using css grid

const gridSideLength = 160;

const gridDivNumber = gridSideLength * gridSideLength;

const gridPixels = 750;

const wrapperDiv = document.querySelector('#wrapperDiv');

wrapperDiv.style.height = `${gridPixels}px`;
wrapperDiv.style.width = `${gridPixels}px`;

wrapperDiv.style.display = 'grid';

wrapperDiv.style.gridTemplateColumns = `repeat(${gridSideLength}, 1fr)`;

const pixelDiv = document.createElement('div');

for (let i = 0; i < gridDivNumber; i++) {
    const pixelDiv = document.createElement('div');
    pixelDiv.addEventListener('mouseover', changeBackground);
    wrapperDiv.appendChild(pixelDiv);
};

function changeBackground(e) {
    e.target.style.background = 'black';
}