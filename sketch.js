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

/*
these functions are invoked on page load
*/
createGrid(defaultGridSize.textContent);
btnColorMode();

/*
add eventListeners to buttons and
invoking respective functions on click
*/
const buttons = document.querySelectorAll(`.btn-container`);
buttons.forEach(btn => btn.addEventListener(`click`, function(e){
    let button = e.target.classList.value;
    switch(button){
        case "btn-color-mode":
            btnColorMode();
            break;
    }
}))

/*
change background-color on mouse hover
*/
function btnColorMode() {
    const divs = document.querySelectorAll(`.block`);
    divs.forEach(div => div.addEventListener(`mouseover`, function(e){
        e.target.classList.add(`color-black`);
    }))
}