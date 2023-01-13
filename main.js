var currentGame = new Game;

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
var chooseFighterHeader = document.querySelector('#choose-fighter-header');
var choiceIcons = document.querySelectorAll('.choice');



window.addEventListener('load', function () {
    displayPlayerInfo(currentGame);
})

classicGame.addEventListener('click', function() {
    currentGame.startNewGame('classic');
    hideElement(chooseGame);
    showElement(chooseFighterSection);
    showElement(classicFighters);
    hideElement(spaceFighters);
    showElement(changeGameButton);
    renderPlayerFighterToken();
})

spaceGame.addEventListener('click', function() {
    currentGame.startNewGame('space');
    hideElement(chooseGame);
    showElement(chooseFighterSection);
    showElement(spaceFighters);
    hideElement(classicFighters);
    showElement(changeGameButton);
    renderPlayerFighterToken();

})

changeGameButton.addEventListener('click', function() {
    currentGame.startNewGame(null);
    hideElement(chooseFighterSection);
    showElement(chooseGame);

})

classicFighters.addEventListener('click', function(event) {
    var currentFighter = event.target.dataset.classicFighter;
    if(!currentFighter) {
        return;
    }
    currentGame.players[0].takeTurn(currentFighter, null);
    currentGame.players[1].takeTurn(null, currentGame.classicFighters);
    renderPlayerFighterToken();
    setTimeout(hideElement, 400, classicFighters);
    setTimeout(hideElement, 400, chooseFighterHeader);
    currentGame.determineWinner();
})

spaceFighters.addEventListener('click', function(event) {
    var currentFighter = event.target.dataset.spaceFighter;
    if(!currentFighter) {
        return;
    }
    currentGame.players[0].takeTurn(currentFighter, null);
    currentGame.players[1].takeTurn(null, currentGame.classicFighters);
    renderPlayerFighterToken();
    setTimeout(hideElement, 400, spaceFighters);
    setTimeout(hideElement, 400, chooseFighterHeader);
})

function displayPlayerInfo(currentGame) {
    astroName.innerText = currentGame.players[0].name;
    astroWins.innerText = currentGame.players[0].wins;
    astroToken.src = currentGame.players[0].tokenSource;
    astroToken.alt = currentGame.players[0].altText;
    compName.innerText = currentGame.players[1].name;
    compWins.innerText = currentGame.players[1].wins;
    compToken.src = currentGame.players[1].tokenSource;
    compToken.alt = currentGame.players[1].altText;
}

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {
    element.classList.remove('hidden');
}


function renderPlayerFighterToken() {
    var currentFighter = currentGame.players[0].currentFighter;
    for (var i = 0; i < choiceIcons.length; i++) {
        var isClassicChoice = choiceIcons[i].dataset.classicChoiceIcon === currentFighter;
        var isSpaceChoice = choiceIcons[i].dataset.spaceChoiceIcon === currentFighter;
        if (currentFighter && (isClassicChoice || isSpaceChoice)) {
            choiceIcons[i].src = currentGame.players[0].tokenSource
            choiceIcons[i].style.opacity = "100";
        }
        else {
            choiceIcons[i].style.opacity = '0'
        }
    }
}