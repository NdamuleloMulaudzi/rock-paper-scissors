const gameBtn = document.querySelector("#gameBtn")
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors")

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

gameBtn.addEventListener("click", (e)=>{
    let target = e.target;

    switch(target.id){
        case "rock":
            playRound("rock", getComputerChoice())
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors",getComputerChoice());
            break;
    }
})



// function playGame(){
//     for(let i = 0; i<5; i++ ){
//         let humanSelection = getHumanChoise()
//         let computerSelection = getComputerChoice()
//         console.log(`You picked ${humanSelection}`);
//         console.log(`Computer picks ${computerSelection}`);
//         playRound(humanSelection, computerSelection);

//         console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
//         console.log("");
//     }
//     if(humanScore > computerScore){
//     console.log(`You are the overall winner won!`)
//     }
//     else if(computerScore > humanScore){
//         console.log(`computer won all the round`)
//     }
//     else{
//         console.log("It's a tie")
//     }
// }

// playGame();