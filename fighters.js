class Rock {
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return null;
        } else if (opponent === 'paper') {
            return false;
        } else if (opponent === 'scissors') {
            return true;
        }
    }
}

class Paper {
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return true;
        } else if (opponent === 'paper') {
            return null;
        } else if (opponent === 'scissors') {
            return false;
        }
    }
}

class Scissors {
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return false;
        }
        else if (opponent === 'paper') {
            return true;
        }
        else if (opponent === 'scissors') {
            return null;
        }
    }
}