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
        }
    }
}
class MoonRock {
    name = 'moonRock';
    altText = 'a floating chunk of lunar rock';
    imageSource = "src/moon-rock.png";
    beatsFighter(opponent) {
        if (opponent === 'moonRock') {
            return null;
        } else if (opponent === 'planet') {
            return false;
        } else if (opponent === 'mantaRay') {
            return true;
        } else if (opponent === 'alien') {
            return false;
        } else if (opponent === 'probe') {
            return true;
        }
    }
}

class Planet {
    name = 'planet';
    altText = 'a green luminescent satellite complete with ring';
    imageSource = 'src/planet.png';
    beatsFighter(opponent) {
        if (opponent === 'moonRock') {
            return true;
        } else if (opponent === 'planet') {
            return null;
        } else if (opponent === 'mantaRay') {
            return false;
        } else if (opponent === 'alien') {
            return true;
        } else if (opponent === 'probe') {
            return false;
        }
    }
}

class MantaRay {
    name = 'mantaRay';
    altText = 'a purple mysterious astral-aqueous being';
    imageSource = 'src/manta-ray.png';
    beatsFighter(opponent) {
        if (opponent === 'moonRock') {
            return false;
        } else if (opponent === 'planet') {
            return true;
        } else if (opponent === 'mantaRay') {
            return null;
        } else if (opponent === 'alien') {
            return false;
        } else if (opponent === 'probe') {
            return true;
        }
    }
}

class Probe {
    name = 'probe';
    altText = 'a sleek device searching for perimeter weaknesses';
    imageSource = 'src/probe.png';
    beatsFighter(opponent) {
        if (opponent === 'moonRock') {
            return false;
        } else if (opponent === 'planet') {
            return true;
        } else if (opponent === 'mantaRay') {
            return false;
        } else if (opponent === 'alien') {
            return true;
        } else if (opponent === 'probe') {
            return null;
        }
    }
}

class Alien {
    name = 'alien';
    altText = 'an alien inside a space ship';
    imageSource = 'src/alien.png';
    beatsFighter(opponent) {
        if (opponent === 'moonRock') {
            return true;
        } else if (opponent === 'planet') {
            return false;
        } else if (opponent === 'mantaRay') {
            return true;
        } else if (opponent === 'alien') {
            return null;
        } else if (opponent === 'probe') {
            return false;
        }
    }
}