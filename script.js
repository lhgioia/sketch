// create 16x16 div grid using flexbox attributes

const gridSideLength = 16;

const gridPixels = 800;

const wrapperDiv = document.querySelector('#wrapperDiv');

wrapperDiv.style.display = 'grid';

// want to get more familiar with css grid https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout


const pixelDiv = document.createElement('div');
pixelDiv.classList.add('new');

wrapperDiv.appendChild(pixelDiv);

pixelDiv.setAttribute('style', 'color: blue; background: white;');