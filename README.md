# rock-paper-scissors

## Abstract:
- I built an app that allows users to play rock, paper, scissors against a computer player. There are two modes: classic and space. The classic mode consists of the rock, paper, scissors. The space mode consists of 5 choices: probe, planet, alien, manta ray, and moon rock.
- Users are able to see both their score and the computer's score.
- Users have the ability to switch game types at anytime without affecting the current score.

## Installation Instructions:
1. On your local machine, open the terminal and run `git clone git@github.com:Espressogoddess/rock-paper-scissors.git`. 
    - This clones down the repository to your local machine.
1. In terminal, run `cd rock-paper-scissors` to move into the project directory.
1. In terminal, `open index.html` to launch the application in the web browser.
1. Play the game to your heart's content.

### Or:
Click on this [deployable link](https://espressogoddess.github.io/rock-paper-scissors/).

## Preview of App:
![image](src/app-preview.png)

## Context:
This project took roughly 13 hours to complete during my 5th week of the Turing program.

## Contributors:
[Amber](https://github.com/espressogoddess)

## Learning Goals:
- Solidify and demonstrate my understanding of DRY JavaScript and event delegation to handle similar event listeners.
- Understand the difference between the data model and how the data is displayed on the DOM
- Use my problem solving process to break down large problems, solve things step by step, and trust myself to not rely on an outside “answer” to a logical challenge

## Wins + Challenges:

### Wins:
- A win was populating the _player's_ token underneath the chosen fighter. I utilized placeholder images so that the space for the token _already_ existed and set the opacity to 0 so they were not visible on the page. This made things significantly easier when it came to styling. I did not want to have to deal with things shifting on the page; it felt like it would be confusing for the user.
- It felt great when I got the computer and player choice to display on the screen when the winner was announced.

### Challenges:
- I had a tough time deciphering if I am using the data model as the source of truth _enough_. At one point, after having a functioning website, I questioned if having the space fighters and the classic fighters already exist on the page was using the DM appropriately. I thought that I needed the DM to actually populate everything on the page rather than _determine_ what is shown. I began refactoring my code to dynamically populate the fighters utilizing innerHTML based upon which game was chosen, but met with a mentor who helped me understand that I already was using the DM as the source of truth.
- I was challenged by creating the game rules without having endless amounts of conditionals. I first began writing my code _assuming_ that one fighter was being chosen; for example, I wrote rules assuming that rock was one choice and filled in rules for that specific choice and then it dawned on me that I could use classes to do this. I would also consider this a win.