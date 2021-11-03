const container = document.querySelector('.container')
const newButton = document.querySelector('.newButton')
const input = document.querySelector('input')
gridSize = 16
newButton.addEventListener('click',newButtonClick)
function clearGrid(){
    container.innerHTML = ""
}

function newButtonClick (e){
    clearGrid()
    gridSize= Number(input.value)
    console.log(input)
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

