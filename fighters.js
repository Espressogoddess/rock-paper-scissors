class Rock {
    name = 'rock';
    altText = 'a brown rock with greenery poking up from behind';
    imageSource = "src/rock.png";
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return null;
        } else if (opponent === 'paper') {
            return false;
        } else if (opponent === 'scissors') {
            return true;
        } else if (opponent === 'alien') {
            return false;
        } else if (opponent === 'laser') {
            return true;
        }
    }
}

class Paper {
    name = 'paper';
    altText = 'three stacked pieces of yellow, green, and red paper';
    imageSource = 'src/paper.png';
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return true;
        } else if (opponent === 'paper') {
            return null;
        } else if (opponent === 'scissors') {
            return false;
        } else if (opponent === 'alien') {
            return true;
        } else if (opponent === 'laser') {
            return false;
        }
    }
}

class Scissors {
    name = 'scissors';
    altText = 'a pair of scissors with orange handles that are halfway open';
    imageSource = 'src/scissors.png';
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return false;
        } else if (opponent === 'paper') {
            return true;
        } else if (opponent === 'scissors') {
            return null;
        } else if (opponent === 'alien') {
            return false;
        } else if (opponent === 'laser') {
            return true;
        }
    }
}

class Laser {
    name = 'laser';
    altText = 'a cartoon looking laser gun';
    imageSource = 'src/laser gun.png';
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return false;
        } else if (opponent === 'paper') {
            return true;
        } else if (opponent === 'scissors') {
            return false;
        } else if (opponent === 'alien') {
            return true;
        } else if (opponent === 'laser') {
            return null;
        }
    }
}

class Alien {
    name = 'alien';
    altText = 'an alien inside a space ship';
    imageSource = 'src/alien.png';
    beatsFighter(opponent) {
        if (opponent === 'rock') {
            return true;
        } else if (opponent === 'paper') {
            return false;
        } else if (opponent === 'scissors') {
            return true;
        } else if (opponent === 'alien') {
            return null;
        } else if (opponent === 'laser') {
            return false;
        }
    }
}