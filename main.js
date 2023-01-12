var currentGame = new Game;

var astroName = document.querySelector('#astro-name');
var compName = document.querySelector('#comp-name');
var astroWins = document.querySelector('#astro-wins');
var compWins = document.querySelector('#comp-wins');
var astroToken = document.querySelector('#astro-icon');
var compToken = document.querySelector('#comp-icon');

window.addEventListener('load', function () {
    showPlayerInfo(currentGame)
})

function showPlayerInfo(currentGame) {
    astroName.innerText = currentGame.players[0].name;
    astroWins.innerText = currentGame.players[0].wins;
    astroToken.src = currentGame.players[0].tokenSource
    astroToken.alt = currentGame.players[0].altText;
    compToken.src = currentGame.players[1].tokenSource
    compName.innerText = currentGame.players[1].name;
    compWins.innerText = currentGame.players[1].wins;
    compToken.alt = currentGame.players[1].altText;
}