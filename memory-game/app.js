document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [{
            name: 'food1',
            img: 'images/food1.jpg'
        },
        {
            name: 'food1',
            img: 'images/food1.jpg'
        },
        {
            name: 'food2',
            img: 'images/food2.jpg'
        },
        {
            name: 'food2',
            img: 'images/food2.jpg'
        },
        {
            name: 'food3',
            img: 'images/food3.jpg'
        },
        {
            name: 'food3',
            img: 'images/food3.jpg'
        },
        {
            name: 'food4',
            img: 'images/food4.jpg'
        },
        {
            name: 'food4',
            img: 'images/food4.jpg'
        },
        {
            name: 'food5',
            img: 'images/food5.jpg'
        },
        {
            name: 'food5',
            img: 'images/food5.jpg'
        }, {
            name: 'food6',
            img: 'images/food6.jpg'
        }, {
            name: 'food6',
            img: 'images/food6.jpg'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosen[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
            alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congraulations! You found them all!"
        }
    }

    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosenId.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})