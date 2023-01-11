class Game {
    constructor() {
        var astronaut = new Player('AstroKitty', 'src/cat astronaut.png', 'Astronaut kitty icon', 0,);
        var computer = new Player('Computer', 'src/computer.png', 'Computer icon', 0);
        this.players = [astronaut, computer];
        this.type;
    }
    startNewGame(gameType) {
        this.type = gameType;
    }

}

// A way to keep track of the data for the game board
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)