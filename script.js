

const container = document.querySelector('.container')
const newButton = document.querySelector('.newButton')
const gridInput = document.querySelector('#gridsize')
const colorInput = document.querySelector('#color-input')
const greyScalePalette = ['rgb(247, 247, 247)',
                        'rgb(223, 223, 223)',
                        'rgb(168, 168, 168)',
                        'rgb(109, 109, 109)',
                        'rgb(95, 95, 95)',
                        'rgb(61, 61, 61)',
                        'rgb(0, 0 ,0)']
const rainbowPalette = ['rgb(255, 0, 0)',
                        'rgb(255, 165, 0)',
                        'rgb(255, 255, 0)',
                        'rgb(0, 128, 0)',
                        'rgb(0, 0, 255)',
                        'rgb(75, 0, 130)',
                        'rgb(238, 130, 238)'

]
let rainbowIndex = 0
let gridArray = []
newButton.addEventListener('click',newButtonClick)
gridInput.addEventListener('change',changeSize)





function clearGrid(){
    while (container.firstElementChild)
    container.removeChild(container.firstElementChild)
}

function newButtonClick (e){
    e.preventDefault()
    clearGrid()
    let gridSize = parseInt(gridInput.value)
    console.log(gridSize)
    drawGrid(gridSize)
}

function changeSize(){
    clearGrid()
    let gridSize = parseInt(gridInput.value)
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
function applyRainbow(node){
    node.style.backgroundColor = rainbowPalette[rainbowIndex];
    rainbowIndex<6 ? rainbowIndex= rainbowIndex+1 : rainbowIndex = 0;
}
function randomHexColor(){
    let hexString = '#'
    hexString = hexString + Math.floor(Math.random()*256).toString(16)
    hexString = hexString + Math.floor(Math.random()*256).toString(16)
    hexString = hexString + Math.floor(Math.random()*256).toString(16)
    return hexString
}
function applyRandom(node){
    node.style.backgroundColor = randomHexColor()
}
function mouseOver(e){
    let mode = document.querySelector('#mode-select').value
    switch (mode) {
        case 'default':
            e.target.style.backgroundColor = colorInput.value
            break;
        case 'greyscale':
            applyGreyscale(e.target)
            break;
        case 'rainbow':
            applyRainbow(e.target)
            break;
        case 'random':
            applyRandom(e.target)
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
let size = parseInt(gridInput.value)
drawGrid(size)

