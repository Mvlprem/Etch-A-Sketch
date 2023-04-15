const gridContainer = document.querySelector(`.grid-container`);
const defaultGridSize = document.querySelector(`.grid-size`);

/*
creates a grid of given size
Ex 16x16,32x32...
*/
function createGrid(gridSize){
    for(let counter = 0; counter < gridSize; counter++){ 
        const parentElement = document.createElement(`div`);
        gridContainer.appendChild(parentElement);

        for(let counter = 0; counter < gridSize; counter++){
            const childElement = document.createElement(`div`);
            childElement.classList.add(`block`);
            parentElement.appendChild(childElement);
        }
    }
}

createGrid(defaultGridSize.textContent);