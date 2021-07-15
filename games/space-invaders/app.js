// document.addEventListener('DOMContentLoaded', () => {
//     const squares = document.querySelectorAll('.grid div')
//     const resultDisplay = document.querySelector('#result')

//     let width = 15
//     let currentShooterIndex = 202
//     let currentInvaderIndex = 0
//     let alienInvadersTakenDown = []
//     let result = 0
//     let direction = 1
//     let invaderId

//     //define alien invaders
//     const alienInvaders = [
//         0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//         15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
//         30, 31, 32, 33, 34, 35, 36, 37, 38, 39
//     ]

//     //draw the alien invaders
//     alienInvaders.forEach(invader => squares[currentInvaderIndex + invader].classList.add('invader'))

//     //draw the shooter
//     squares[currentShooterIndex].classList.add('shooter')

//     //move the shooter along a line
//     function moveShooter(e) {
//         squares[currentShooterIndex].classList.remove('shooter')
//         switch(e.keyCode) {
//             case 37:
//                 //width divisible by 15, cn not move left, if on 30, will not move, same below for right
//                 if(currentShooterIndex % width !== 0) currentShhoterIndex -=1
//                 break
//             case 39:
//                 if(currentShooterIndex % width < width -1) currentShooterIndex +=1
//                 break
//         }
//         squares[currentShooterIndex].classList.add('shooter')
//     }
//     document.addEventListener('keydown', moveShooter)

//     //move the alien invaders
//     function moveInvaders() {
//         const leftEdge = alienInvaders[0] % width === 0
//         const rightEdge = alienInvaders[alienInvaders.length -1] % width === width -1

//         if((leftEdge && direction === -1) ||(rightEdge && direction === 1)) {
//             direction = width
//         } else if (direction === width) {
//             if (leftEdge) direction = 1
//             else direction = -1
//         }
//         for (let i = 0; i <= alienInvaders.length-1; i++) {
//             squares[alienInvaders[i]].classList.remove('invader')
//         }
//         for (let i = 0; i <= alienInvaders.length -1; i++) {
//             alienInvaders[i] += direction
//         }
//         for (let i = 0; i <= alienInvaders.length -1; i++) {
//             if (!alienInvadersTakenDown.includes(i)) {
//              squares[alienInvaders[i]].classList.add('invader')   
//             } 
//         }

//         //decide a game over
//         if(sqaures[currentShooterIndex].classList.contains('invader', 'shooter')) {
//             resultDisplay.textContent = "Game Over"
//             squares[currentShoterIndex]/classList.add('boom')
//             clearInterval(invaderId)
//         }
    
//         for (let i = 0; i <= alienInvaders.length -1; i++){
//             if(alienInvaders[i] > (squares.length - (width-1))) {
//                 resultDisplay.textContent = 'Game Over'
//                 clearInterval(invaderId)
//             }
//         }

//         //declare a win
//         if(alienInvadersTakenDown.length === alienInvaders.length) {
//             resultDisplay.textContent = 'You Win!'
//             clearInterval(invaderId)
//         }
//     }

//     invaderId= setInterval(moveInvaders, 500)

//     //shoot at aliens
//     function shoot(e) {
//         let laserId
//         let currentLaserIndex = currentShooterIndex
//         //move the laser from shooter to alien invader
//         function moveLaser() {
//             squares[currentLaserIndex].classList.remove('laser')
//             currentLaserIndex -= width
//             squares[currentLaserIndex].classList.add('laser')
//             if(squares[currentLaserIndex].contains('invader')) {
//                 squares[currentLaserIndex].classList.remove('laser')
//                 squares[currentLaserIndex].classList.remove('invader')
//                 squares[currentLAserIndex].classList.add('boom')

//                 setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 250)
//                 clearInterval(laserId)

//                 const alienTakenDown = alienInvaders.indexOf(currentLaserIndex)
//                 alienInvadersTakenDown.push(alienTakenDown)
//                 result++
//                 resultDisplay.textContent = result
//             }

//             if(currentLaserIndex < width) {
//                 clearInterval(laserId)
//                 setTimeout(() => squares[currentLaserIndex].classList.remove('laser'), 100)
//             }
//         }
        
//         document.addEventListener('keyup', e => {
//             if (e.keyCode === 32) {
//                 laserId = setInterval(moveLaser, 100)
//             }
//         })
//     }

//     document.addEventListener('keyup', shoot)

// })


//updated code

const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('.results')
let currentShooterIndex = 202
let width = 15
let direction = 1
let invadersId
let goingRight = true
let aliensRemoved = []
let results = 0

for (let i = 0; i < 225; i++) {
  const square = document.createElement('div')
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if(!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('invader')
    }
  }
}

draw()

function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove('invader')
  }
}

squares[currentShooterIndex].classList.add('shooter')


function moveShooter(e) {
  squares[currentShooterIndex].classList.remove('shooter')
  switch(e.key) {
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0) currentShooterIndex -=1
      break
    case 'ArrowRight' :
      if (currentShooterIndex % width < width -1) currentShooterIndex +=1
      break
  }
  squares[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keydown', moveShooter)

function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
  remove()

  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width +1
      direction = -1
      goingRight = false
    }
  }

  if(leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width -1
      direction = 1
      goingRight = true
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction
  }

  draw()

  if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
    resultsDisplay.innerHTML = 'GAME OVER'
    clearInterval(invadersId)
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    if(alienInvaders[i] > (squares.length)) {
      resultsDisplay.innerHTML = 'GAME OVER'
      clearInterval(invadersId)
    }
  }
  if (aliensRemoved.length === alienInvaders.length) {
    resultsDisplay.innerHTML = 'YOU WIN'
    clearInterval(invadersId)
  }
}
invadersId = setInterval(moveInvaders, 600)

function shoot(e) {
  let laserId
  let currentLaserIndex = currentShooterIndex
  function moveLaser() {
    squares[currentLaserIndex].classList.remove('laser')
    currentLaserIndex -= width
    squares[currentLaserIndex].classList.add('laser')

    if (squares[currentLaserIndex].classList.contains('invader')) {
      squares[currentLaserIndex].classList.remove('laser')
      squares[currentLaserIndex].classList.remove('invader')
      squares[currentLaserIndex].classList.add('boom')

      setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
      clearInterval(laserId)

      const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
      aliensRemoved.push(alienRemoved)
      results++
      resultsDisplay.innerHTML = results
      console.log(aliensRemoved)

    }

  }
  switch(e.key) {
    case 'ArrowUp':
      laserId = setInterval(moveLaser, 100)
  }
}

document.addEventListener('keydown', shoot)