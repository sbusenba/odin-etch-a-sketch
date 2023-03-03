const container = document.querySelector('.container')
const newButton = document.querySelector('.newButton')
const input = document.querySelector('input')
newButton.addEventListener('click',newButtonClick)
input.addEventListener('change',changeSize)
let size = parseInt(input.value)
function clearGrid(){
    while (container.firstElementChild)
    container.removeChild(container.firstElementChild)
}

function newButtonClick (e){
    e.preventDefault()
    clearGrid()
    let gridSize = parseInt(input.value)
    console.log(gridSize)
    drawGrid(gridSize)
}

function changeSize(){
    clearGrid()
    let gridSize = parseInt(input.value)
    console.log(gridSize)
    drawGrid(gridSize)
}


function mouseOver(e){
    let mode = document.querySelector('#mode-select').value
    switch (mode) {
        case 'black':
            e.target.classList.add('darkened')
            break;
        case 'greyscale':

            break;
        case 'rainbow':

            break;
        case 'random':

            break;
    
        default:
            break;
    }
    
}
function drawGrid(width){
    for(let rowNum=0;rowNum<width;rowNum++){
        let row = document.createElement('div')
        row.classList.add('row')
        for(let columnNum=0;columnNum<width;columnNum++){
            let cell= document.createElement('div')
            cell.classList.add('cell')
            cell.addEventListener('mouseenter',mouseOver)
            row.appendChild(cell)

        }

        container.appendChild(row)
    }
}

drawGrid(size)

