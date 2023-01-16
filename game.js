class Game {
    constructor() {
        var astroKitty = new Player('AstroKitty', 'src/cat-astronaut.png', 'Astronaut kitty icon', 0, );
        var computer = new Player('Computer', 'src/computer.png', 'Computer icon', 0);
        var rock = new Rock;
        var paper = new Paper;
        var scissors = new Scissors;
        var moonRock = new MoonRock;
        var mantaRay = new MantaRay;
        var planet = new Planet;
        var probe = new Probe;
        var alien = new Alien;
        this.players = [astroKitty, computer];
        this.classicFighters = [rock, paper, scissors];
        this.spaceFighters = [moonRock, planet, mantaRay, probe, alien];
        this.type;
        this.winner;
    }
    startNewGame(gameType) {
        this.type = gameType;
        this.players[0].currentFighter = null;
        this.players[1].currentFighter = null;
        this.winner = null;
    }
    determineWinner() {
        var fighter0 = this.players[0].currentFighter;
        var fighter1 = this.players[1].currentFighter;
        if (fighter0.beatsFighter(fighter1.name)) {
            this.winner = this.players[0].name;
            this.players[0].wins++;
        } else if (fighter1.beatsFighter(fighter0.name)) {
            this.winner = this.players[1].name;
            this.players[1].wins++;
        } else {
            this.winner = 'draw';
        }
    }
}