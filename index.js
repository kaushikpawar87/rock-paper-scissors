
function getComputerChoice() {
    
    let choice = Math.floor(Math.random() * 3)

    if(choice === 0) {
        return 'Rock'
    }
    else if(choice === 1) {
        return 'Paper'
    }
    return 'Scissors'

}

console.log(getComputerChoice());

const playerSelection = window.prompt("Type Rock, Paper or Scissors", "");

