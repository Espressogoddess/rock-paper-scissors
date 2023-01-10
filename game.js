class Game {
    constructor() {
        var computer = new Player('computer', '💻', 0);
        new astronaut = Player('astronaut', '👩🏻‍🚀', 0);
        this.players = [computer, astronaut];
    }
    startNewGame() {
        for (var i = 0; i < this.players.length; i++) {
            this.player[i].wins = 0;
        }
    }
}

// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)