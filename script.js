const COLOR = 'purple';
const DEFAULT_GRID_SIZE = 16;

const gridContainer = document.querySelector('#container');
const clearButton = document.querySelector('#clear');

function setupGrid(gridSize = DEFAULT_GRID_SIZE){
    let fragment = document.createDocumentFragment();
    let div;

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            div = document.createElement('div');
            div.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = COLOR;
            })
            fragment.appendChild(div);
        }
    }

    gridContainer.appendChild(fragment);
}

function createNewGrid(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let size = getGridSize();
    setupGrid(size);
}

function getGridSize(){
    let size;
    let invalidInput = false;
    do{
        size = prompt('Please enter a grid size as a whole number. The maximum size you can enter is 100:');
        size = parseInt(size)
        if (typeof(size) === 'number'){
            invalidInput = (size < 1 || size > 100) ? true : false;
        }
    } while(invalidInput)
    
    return size;
    
}

clearButton.addEventListener('click', () => {
    createNewGrid();
});

setupGrid();


