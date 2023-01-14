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
var resultSection = document.querySelector('#result-section');


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
    hideElement(resultSection);
})

classicFighters.addEventListener('click', function(event) {
    var currentFighter = event.target.dataset.classicFighter;
    if(!currentFighter) {
        return;
    }
    currentGame.players[0].takeTurn(currentFighter, null);
    currentGame.players[1].takeTurn(null, currentGame.classicFighters);
    renderPlayerFighterToken();
    setTimeout(hideElement, 400, chooseFighterSection);
    currentGame.determineWinner();
    displayPlayerInfo(currentGame);
    setTimeout(renderResultsSection, 400);
    // setTimeout(hideElement, 2000, resultSection);
})

spaceFighters.addEventListener('click', function(event) {
    var currentFighter = event.target.dataset.spaceFighter;
    if(!currentFighter) {
        return;
    }
    currentGame.players[0].takeTurn(currentFighter, null);
    currentGame.players[1].takeTurn(null, currentGame.spaceFighters);
    renderPlayerFighterToken();
    setTimeout(hideElement, 400, chooseFighterSection);
    currentGame.determineWinner();
    displayPlayerInfo(currentGame);
    setTimeout(renderResultsSection, 400);
    // setTimeout(hideElement, 2000, resultSection);
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

function renderResultsSection() {
    resultSection.innerHTML ='';
    var winnerTitle;
    if (currentGame.winner === 'draw') {
        winnerTitle = 'Draw!'
    } else {
        winnerTitle = `${currentGame.winner} wins this round!`;
    }
    resultSection.innerHTML = `
    <h2 id="won-this-round">${winnerTitle}</h2>
      <div class="fighter-result">
        <img class="large-icon" id="fighter1" src="${getFighterImage(currentGame.players[0].currentFighter)}">
        <img class="large-icon" id="fighter2" src="${getFighterImage(currentGame.players[1].currentFighter)}">
      </div>
      <div class="choice-icon-container-2">
          <img class="small-icon" alt="${currentGame.players[0].altText}" src="${currentGame.players[0].tokenSource}">
          <img class="small-icon" alt="${currentGame.players[1].altText}" src="${currentGame.players[1].tokenSource}">
        </div>
        <button class="new-round" type="button" id="new-round-button">Start new round</button>
          `
      showElement(resultSection);
      var newRoundButton = document.querySelector('#new-round-button');
      newRoundButton.addEventListener('click', function() {
        currentGame.players[0].currentFighter = null;
        currentGame.players[1].currentFighter = null;
        hideElement(resultSection);
        showElement(chooseFighterHeader);
        showElement(chooseFighterSection);
        renderPlayerFighterToken();
        if (currentGame.type === 'classic') {
            showElement(classicFighters);
        } else if (currentGame.type === 'space') {
            showElement(spaceFighters);
        }

      })
}

function getFighterImage(fighter) {
    if (fighter === 'alien') {
        return 'src/alien.png';
    } else if (fighter === 'laser') {
        return 'src/laser gun.png';
    } else if (fighter === 'rock') {
        return 'src/rock.png';
    } else if (fighter === 'paper') {
        return 'src/paper.png';
    } else if (fighter === 'scissors') {
        return 'src/scissors.png';
    }
}

//add alt text err'where