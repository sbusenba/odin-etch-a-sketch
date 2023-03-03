const container = document.querySelector('.container')
const newButton = document.querySelector('.newButton')
const input = document.querySelector('input')
let gridSize = 16
newButton.addEventListener('click',newButtonClick)
input.addEventListener('change',newButtonClick)
function clearGrid(){
    while (container.firstElementChild)
    container.removeChild(container.firstElementChild)

}

function newButtonClick (){
    clearGrid()
    gridSize = Number(input.value)

    
    drawGrid(gridSize)

}
function fadeToBlack(e){
        this.classList.add('darkened')
}
function drawGrid(width){
    for(let rowNum=0;rowNum<width;rowNum++){
        let row = document.createElement('div')
        row.classList.add('row')
        for(let columnNum=0;columnNum<width;columnNum++){
            let cell= document.createElement('div')
            cell.classList.add('cell')
            cell.addEventListener('mouseenter',fadeToBlack)
            row.appendChild(cell)

        }

        container.appendChild(row)
    }
}

drawGrid(gridSize)

