class Game {
    constructor() {
        var computer = new Player('Computer', 'src/computer.png', 'Computer icon', 0);
        var astronaut = new Player('AstroKitty', 'src/cat astronaut.png', 'Astronaut kitty icon', 0);
        this.players = [astronaut, computer];
    }
    startNewGame() {
        for (var i = 0; i < this.players.length; i++) {
            this.players[i].wins = 0;
        }
    }
}

// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)