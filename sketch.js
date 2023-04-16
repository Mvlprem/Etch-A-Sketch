const gridContainer = document.querySelector(`.grid-container`);
const defaultGridSize = 16;

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
createGrid(defaultGridSize);
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
    
        case "btn-eraser":
            btnEraser();
            break;
            
        case "btn-clear":
            btnClear();
            break;
    }
}))

/*
change background-color on mouse hover
*/
function btnColorMode() {
    const divs = document.querySelectorAll(`.block`);
    const inputColor = document.querySelector(`.input-color`);
    inputColor.addEventListener(`input`, () => { inputColor.value })
    divs.forEach(div => div.addEventListener(`mouseover`, function(e){
        e.target.style.backgroundColor = inputColor.value;
    }))
}

/*
erase div on click
*/
function btnEraser() {
    const divs = document.querySelectorAll(`.block`);
    divs.forEach(div => div.addEventListener(`mouseover`, function(e){
        e.target.style.backgroundColor = "white";
    }))
}

/*
clear grid
*/
function btnClear() {
    const divs = document.querySelectorAll(`.block`);
    divs.forEach(div => div.style.backgroundColor = "white");
}

/*
create new grid of user choice by
removing existing grid
*/
const inputRange = document.querySelector(`.input-range`);
const size = document.querySelectorAll(`.size`);
inputRange.addEventListener(`input`, (e) => {
    size.forEach(size => size.textContent = inputRange.value);
    removeGrid();
    createGrid(inputRange.value);
    btnColorMode();
})

/*
removes entire grid
*/
function removeGrid(){
    let child = gridContainer.lastElementChild;
    while(child){
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
}