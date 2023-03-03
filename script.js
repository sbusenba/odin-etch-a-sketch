const container = document.querySelector('.container')
const newButton = document.querySelector('.newButton')
const input = document.querySelector('input')
const greyScalePalette = ['rgb(247, 247, 247)',
                        'rgb(223, 223, 223)',
                        'rgb(168, 168, 168)',
                        'rgb(109, 109, 109)',
                        'rgb(95, 95, 95)',
                        'rgb(61, 61, 61)',
                        'rgb(0, 0 ,0)']
const rainbowPalette = [

]
let gridArray = []
newButton.addEventListener('click',newButtonClick)
input.addEventListener('change',changeSize)





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
function applyGreyscale(node){
    let currentColorIndex = 0;
    greyScalePalette.forEach((value,index)=>{
        console.log(node.style.backgroundColor,'>',value)
        if (node.style.backgroundColor == value){
            currentColorIndex = index;
        }
    })
    if (currentColorIndex>=0 && currentColorIndex<7){
        console.log('match!')
    node.style.backgroundColor= greyScalePalette[currentColorIndex+1]
    }
    

}



function mouseOver(e){
    let mode = document.querySelector('#mode-select').value
    switch (mode) {
        case 'black':
            e.target.style.backgroundColor = '#000000'
            break;
        case 'greyscale':
            applyGreyscale(e.target)
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
            cell.setAttribute('data-x',rowNum)
            cell.setAttribute('data-y',columnNum)
            cell.addEventListener('mouseenter',mouseOver)
            row.appendChild(cell)

        }

        container.appendChild(row)
    }
    console.log(gridArray)
}
let size = parseInt(input.value)
drawGrid(size)

