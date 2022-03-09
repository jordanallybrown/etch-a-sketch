let gridSize = 32;

const container = document.querySelector('#container');

// Generate the divs
let fragment = document.createDocumentFragment();
let div;

//setup the grid column numbers
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
        div = document.createElement('div');
        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = "purple";
        })
        fragment.appendChild(div);
    }
}

container.appendChild(fragment);