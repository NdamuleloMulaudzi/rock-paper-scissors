function getComputerChoice(){
    let computerChoice =Math.floor(Math.random()*3)
    if(computerChoice == 0){
        return "Rock"
    }
    else if(computerChoice==1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

function getHumanChoise(){
    let humanChoice = prompt("Enter Your Choice: Rock, Paper, Scissors");
    return humanChoice;
}

let computerScore = 0;
let humanScore = 0;