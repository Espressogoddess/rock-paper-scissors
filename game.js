class Game {
    constructor() {
        var astroKitty = new Player('AstroKitty', 'src/cat astronaut.png', 'Astronaut kitty icon', 0,);
        var computer = new Player('Computer', 'src/computer.png', 'Computer icon', 0);
        this.players = [astroKitty, computer];
        this.type;
        this.classicFighters = ['rock', 'paper', 'scissors'];
        this.spaceFighters = ['rock', 'paper', 'scissors', 'alien', 'laser'];
    }
    startNewGame(gameType) {
        this.type = gameType;
    }

}

// A way to keep track of the data for the game board
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// Do I want to pass in an param/arg in constructor to determine what the fighters are? Then I can dynamically pull from this.fighters to populate on the page.