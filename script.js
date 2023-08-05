const container = document.querySelector('.container');
const button = document.querySelector('.button')


let gridSize = 100

function updateGridSize(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        console.log(row)
        for (let j = 0; j< gridSize; j++) {
            let square = document.createElement('div');
            square.classList.add('square')
            row.appendChild(square)
            console.log(square)
        }
    }
}


button.onclick = function getGridSize() {
    gridSize = parseInt(prompt('Please provide a number from 10 to 100'));  // gotta check a better way of doing this and commit
    if (gridSize >= 10 && gridSize <= 100) {
        
    } else {
        alert('insert a valid value')
    }
};

updateGridSize(gridSize)

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
    })
});