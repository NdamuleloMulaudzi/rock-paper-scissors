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

function playRound(humanChoice, computerChoice){
    if((humanChoice =="Rock" && computerChoice=="Scissors") ||
        (humanChoice=="Paper" && computerChoice=="Rock") ||
        (humanChoice=="Scissors" && computerChoice=="Paper")){
            return `You won! ${humanChoice} beats ${computerChoice}`
            console.log(humanScore++)
        }
    else if((computerChoice =="Rock" && humanChoice=="Scissors") ||
    (computerChoice=="Paper" && humanChoice=="Rock") ||
    (computerChoice=="Scissors" && humanChoice=="Paper")){
        return `You Lose! ${computerChoice} beat ${humanChoice}`
        computerScore++
    }
}

let humanSelection = getHumanChoise();
let computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection))