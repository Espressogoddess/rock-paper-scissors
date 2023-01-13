class Rock {
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return null;
        } else if (opponent === 'paper') {
            return false;
        } else if (opponent === 'scissors') {
            return true;
        }
        else if (opponent === 'alien') {
            return false;
        }
        else if (opponent === 'laser') {
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
        else if (opponent === 'alien') {
            return true;
        }
        else if (opponent === 'laser') {
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
        else if (opponent === 'alien') {
            return false;
        }
        else if (opponent === 'laser') {
            return true;
        }
    }
}

class Laser {
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return false;
        }
        else if (opponent === 'paper') {
            return true;
        }
        else if (opponent === 'scissors') {
            return false;
        }
        else if (opponent === 'alien') {
            return true;
        }
        else if (opponent === 'laser') {
            return null;
        }
    }
}

class Alien { 
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return true;
        }
        else if (opponent === 'paper') {
            return false;
        }
        else if (opponent === 'scissors') {
            return true;
        }
        else if (opponent === 'alien') {
            return null;
        }
        else if (opponent === 'laser') {
            return false;
        }
    }
}
