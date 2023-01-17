/*--------------Data Model--------------*/
var currentGame = new Game;

/*--------------DOM Elements--------------*/
var astroName = document.querySelector('#astro-name');
var compName = document.querySelector('#comp-name');
var astroWins = document.querySelector('#astro-wins');
var compWins = document.querySelector('#comp-wins');
var astroToken = document.querySelector('#astro-icon');
var compToken = document.querySelector('#comp-icon');
var changeGameButton = document.querySelector('#change-game-button');
var classicGame = document.querySelector('#classic-game');
var spaceGame = document.querySelector('#space-game');
var chooseGame = document.querySelector('#choose-game-section');
var chooseFighterSection = document.querySelector('#choose-fighter-section')
var classicFighters = document.querySelector('#classic-fighter-section');
var spaceFighters = document.querySelector('#space-fighter-section');
var choiceIcons = document.querySelectorAll('.choice');
var resultSection = document.querySelector('#result-section');
var timerID1;
var timerID2;

/*----------------Event Listeners-----------------*/
window.addEventListener('load', function () {
    renderPlayerInfo(currentGame);
})


classicGame.addEventListener('click', function () {
    setGameType('classic');
})

spaceGame.addEventListener('click', function () {
    setGameType('space');
})

changeGameButton.addEventListener('click', function () {
    currentGame.startNewGame(null);
    hideElement(chooseFighterSection);
    showElement(chooseGame);
    hideElement(resultSection);
    clearTimeout(timerID1);
    clearTimeout(timerID2);
})

classicFighters.addEventListener('click', function (event) {
    var fighterName = event.target.dataset.classicFighter;
    processResults(fighterName, currentGame.classicFighters, 'classic');
})

spaceFighters.addEventListener('click', function (event) {
    var fighterName = event.target.dataset.spaceFighter;
    processResults(fighterName, currentGame.spaceFighters, 'space');
})

/*------------------------Functions-----------------------*/
function renderPlayerInfo(currentGame) {
    astroName.innerText = currentGame.players[0].name;
    astroWins.innerText = currentGame.players[0].wins;
    astroToken.src = currentGame.players[0].tokenSource;
    astroToken.alt = currentGame.players[0].altText;
    compName.innerText = currentGame.players[1].name;
    compWins.innerText = currentGame.players[1].wins;
    compToken.src = currentGame.players[1].tokenSource;
    compToken.alt = currentGame.players[1].altText;
}

function setGameType(gameType) {
    currentGame.startNewGame(gameType);
    if (gameType === 'classic') {
        showElement(classicFighters);
        hideElement(spaceFighters);
    } else {
        showElement(spaceFighters);
        hideElement(classicFighters);
    }
    hideElement(chooseGame);
    showElement(chooseFighterSection);
    showElement(changeGameButton);
    renderPlayerFighterToken();
}

function renderPlayerFighterToken() {
    for (var i = 0; i < choiceIcons.length; i++) {
        if (currentGame.players[0].currentFighter) {
            var currentFighter = currentGame.players[0].currentFighter.name;
            var isClassicChoice = choiceIcons[i].dataset.classicChoiceIcon === currentFighter;
            var isSpaceChoice = choiceIcons[i].dataset.spaceChoiceIcon === currentFighter;
            if (currentFighter && (isClassicChoice || isSpaceChoice)) {
                choiceIcons[i].src = currentGame.players[0].tokenSource
                choiceIcons[i].style.opacity = "1";
            }
        } else {
            choiceIcons[i].style.opacity = '0'
        }
    }
}

function processResults(fighterName, fighters, gameType) {
    if (!fighterName) {
        return;
    }
    currentGame.players[0].takeTurn(fighterName, fighters);
    currentGame.players[1].takeTurn(null, fighters);
    renderPlayerFighterToken();
    currentGame.determineWinner();
    renderPlayerInfo(currentGame);
    timerID1 = setTimeout(function () {
        hideElement(chooseFighterSection);
        renderResultsSection()
    }, 400);
    timerID2 = setTimeout(function () {
        hideElement(resultSection);
        currentGame.startNewGame(gameType);
        renderPlayerFighterToken();
        showElement(chooseFighterSection);
    }, 2000);
}

function renderResultsSection() {
    var winnerTitle;
    if (currentGame.winner === 'draw') {
        winnerTitle = 'Draw!'
    } else {
        winnerTitle = `${currentGame.winner} wins this round!`;
    }
    var player0 = currentGame.players[0]
    var player1 = currentGame.players[1]
    var player0class = '';
    var player1class = '';
    if (currentGame.winner === 'Computer') {
        player0class = 'fighter-loser';
    } else if (currentGame.winner === 'AstroKitty') {
        player1class = 'fighter-loser';
    }
    resultSection.innerHTML = `
        <h2>${winnerTitle}</h2>
        <div class="fighter-result">
            <img class="large-icon ${player0class}" alt="${player0.currentFighter.altText}" src="${player0.currentFighter.imageSource}">
            <img class="large-icon ${player1class}" alt="${player1.currentFighter.altText}" src="${player1.currentFighter.imageSource}">
        </div>
        <div class="choice-icon-container-2 d-flex">
            <img class="small-icon" alt="${player0.altText}" src="${player0.tokenSource}">
            <img class="small-icon" alt="${player1.altText}" src="${player1.tokenSource}">
        </div>
    `;
    showElement(resultSection);
}

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {
    element.classList.remove('hidden');
}