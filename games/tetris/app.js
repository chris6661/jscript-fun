document.addEventListener('DOMContentLoaded', () => {
    
    const GRID_WIDTH = 10
    const GRID_HEIGHT = 20
    const GRID_SIZE = GRID_WIDTH * GRID_HEIGHT

    //do not need 200 divs this time around
    const grid = createGrid();
    let squares = Array.from(grid.querySelectorAll('div'))
    const startBtn = document.querySelector('.button')
    const hamburgerBtn = document.querySelector('.toggler')
    const menu = document.querySelector('.menu')
    const span = document.getElementsByClassName('close')[0]
    const scoreDisplay = document.querySelector('.score-display')
    const linesDisplay = document.querySelector('.lines-score')
    let currentIndex = 0
    let currentRotation = 0
    const width = 10
    let score = 0
    let lines = 0
    let timerId
    let nextRandom = 0
    const colors = [
      'url(images/blue_block.png)',
      'url(images/pink_block.png)',
      'url(images/purple_block.png)',
      'url(images/peach_block.png)',
      'url(images/yellow_block.png)'
    ]

    function createGrid() {
        //main grid
        let grid = document.querySelector(".grid")
        for (let i = 0; i < GRID_SIZE; i++) {
            let gridElement = document.createElement("div")
            grid.appendChild(gridElement)
        }

        //srt base of grid
        for (let i = 0; i < GRID_WIDTH; i++) {
            let gridElement = document.createElement("div")
            gridElement.setAttribute("class", "block3")
            grid.appendChild(gridElement)
        }

        let previousGrid = document.querySelector(".previous-grid")
        //since 16 is max grid soze for tetrominoes can fit we create one here
        for (let i = 0; i < 16; i++) {
            let gridElement = document.createElement("div")
            previousGrid.appendChild(gridElement)
        }
        return grid; 
    }


    
})