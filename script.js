const gridContainer = document.querySelector('.grid-container');//get drawing area


//create the grid of pixel-divs
function createDrawingArea(gridSize) {
    const grid = document.createElement('div');//create grid for pixels
    grid.classList.add('grid')
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridContainer.appendChild(grid);

    numberOfPixels = gridSize * gridSize;
    for (let i = 0; i < numberOfPixels; i++) {
        const gridSquare = document.createElement('div');//create pixel div
        gridSquare.classList.add('grid-square')//assign "pixel"-class to pixel div
        gridSquare.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#fff'
        })
        grid.appendChild(gridSquare);
    }
}