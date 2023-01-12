class Player {
    constructor(name, token, altText, wins) {
        this.name = name;
        this.tokenSource = token;
        this.altText = altText
        this.wins = wins;
        this.fighter;
    }
    takeTurn(fighter) {
        this.fighter = fighter;
    }
}