class Player {
    constructor(name, token, altText, wins) {
        this.name = name;
        this.tokenSource = token;
        this.altText = altText
        this.wins = wins;
        this.currentFighter;
    }
    takeTurn(currentFighter, fighters) {
        if (currentFighter) {
            this.currentFighter = currentFighter;
        }
        else if (fighters) {
            this.currentFighter = fighters[Math.floor(Math.random() * fighters.length)];
        }
    }
}

//move fighters to game class