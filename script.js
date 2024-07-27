let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let computerChoice =Math.floor(Math.random()*3)
    if(computerChoice == 0){
        return "rock"
    }
    else if(computerChoice==1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoise(){
    let humanChoice = prompt("Enter Your Choice: Rock, Paper, Scissors").toLowerCase();
    return humanChoice;
}


function playRound(humanChoice, computerChoice){
    if((humanChoice=="rock" && computerChoice=="scissors") ||
        (humanChoice=="paper" && computerChoice=="rock") ||
        (humanChoice=="scissors" && computerChoice=="paper")){
            humanScore++
            console.log(`You won! ${humanChoice} beats ${computerChoice}`)
            
        }
    else if((computerChoice =="rock" && humanChoice=="scissors") ||
    (computerChoice=="paper" && humanChoice=="rock") ||
    (computerChoice=="scissors" && humanChoice=="paper")){
        computerScore++
        console.log(`You Lose! ${computerChoice} beat ${humanChoice}`)
        
    }
    else if(humanChoice==computerChoice){
        console.log("It's a tie")
        
    }
}



function playGame(){
    for(let i = 0; i<5; i++ ){
        let humanSelection = getHumanChoise()
        let computerSelection = getComputerChoice()
        console.log(`You picked ${humanSelection}`);
        console.log(`Computer picks ${computerSelection}`);
        playRound(humanSelection, computerSelection);

        console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
        console.log("");
    }
    if(humanScore > computerScore){
    console.log(`You are the overall winner won!`)
    }
    else if(computerScore > humanScore){
        console.log(`computer won all the round`)
    }
    else{
        console.log("It's a tie")
    }
}

playGame();