const gridContainer = document.querySelector('.grid-container');//Create drawing area


//create the grid of pixel-divs
function createDrawingArea(gridSize) {
    numberOfPixels = Math.pow(gridSize, 2);
    for (let i = 0; i < numberOfPixels; i++) {
        const gridSquare = document.createElement('div');//create pixel div
        gridSquare.classList.add('grid-square')//assign "pixel"-class to pixel div
        gridContainer.appendChild(gridSquare);
        console.log(i)
    }
}