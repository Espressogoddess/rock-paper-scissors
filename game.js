class Game {
    constructor() {
        var astroKitty = new Player('AstroKitty', 'src/cat astronaut.png', 'Astronaut kitty icon', 0,);
        var computer = new Player('Computer', 'src/computer.png', 'Computer icon', 0);
        this.players = [astroKitty, computer];
        this.type;
        this.winner;
        this.classicFighters = ['rock', 'paper', 'scissors'];
        this.spaceFighters = ['rock', 'paper', 'scissors', 'alien', 'laser'];
    }
    startNewGame(gameType) {
        this.type = gameType;
        this.players[0].currentFighter = null;
        this.players[1].currentFighter = null;
    }
    determineWinner() {
        var player1Choice = this.players[0].currentFighter;
        var player2Choice = this.players[1].currentFighter;
        if (this.type === 'classic') {
            this.determineClassicWinner(player1Choice, player2Choice);
        }
        else {
            this.determineSpaceWinner(player1Choice, player2Choice);
        }
    }
    determineClassicWinner(choice1, choice2) {
        var choice1Fighter;
        if (choice1 === 'rock') {
            choice1Fighter = new Rock;
        }
        if (choice1 === 'paper') {
            choice1Fighter = new Paper;
        }
        if (choice1 === 'scissors') {
            choice1Fighter = new Scissors;
        }

        if (choice1Fighter.beatsFighter(choice2)) {
            this.winner = choice1
            this.players[0].wins++;
        } 
        else if (choice1Fighter.beatsFighter(choice2) === false) {
            this.winner = choice2;
            this.players[1].wins++;
        }
        else {
            this.winner = 'draw';
        }
    }
}

// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)



