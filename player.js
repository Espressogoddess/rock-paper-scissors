class Player {
    constructor(name, token, altText, wins) {
        this.name = name;
        this.tokenSource = token;
        this.altText = altText
        this.wins = wins;
        this.currentFighter;
    }
    takeTurn(fighterName, fighters) {
        if (fighterName) {
            for (var i = 0; i < fighters.length; i++) {
                if (fighterName === fighters[i].name) {
                    this.currentFighter = fighters[i];
                }
            }
        }
        else if (!fighterName && fighters) {
            this.currentFighter = fighters[Math.floor(Math.random() * fighters.length)];
        }
    }
}
