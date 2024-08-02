const body = document.querySelector("body")
const gameBtn = document.querySelector("#gameBtn")
const buttons = document.querySelectorAll("button")
const results = document.querySelector("#results")
const options = document.querySelector(".options")
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

const allBtn = document.querySelectorAll("button")


const roundWinner = document.createElement("p");
const humanSelection = document.createElement("p");
const computerSelection = document.createElement("p");
const scorePara = document.createElement("p");
const overallWinner = document.createElement("h3");

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



function playRound(humanChoice, computerChoice){
    if((humanChoice=="rock" && computerChoice=="scissors") ||
        (humanChoice=="paper" && computerChoice=="rock") ||
        (humanChoice=="scissors" && computerChoice=="paper")){
            humanScore++
            humanSelection.textContent = `You picked ${humanChoice}`
            computerSelection.textContent = `Computer picks ${computerChoice}`
            roundWinner.textContent = `You won! ${humanChoice} beats ${computerChoice}`
            
        }
    else if((computerChoice =="rock" && humanChoice=="scissors") ||
    (computerChoice=="paper" && humanChoice=="rock") ||
    (computerChoice=="scissors" && humanChoice=="paper")){
        computerScore++
        humanSelection.textContent = `You picked ${humanChoice}`
        computerSelection.textContent = `Computer picks ${computerChoice}`
        roundWinner.textContent = `You Lose! ${computerChoice} beat ${humanChoice}`
        
    }
    else if(humanChoice==computerChoice){
        humanSelection.textContent = `You picked ${humanChoice}`
        computerSelection.textContent = `Computer picks ${computerChoice}`
        roundWinner.textContent = "It's a tie"
        
    }
    scorePara.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
    results.appendChild(humanSelection);
    results.appendChild(computerSelection)
    results.appendChild(roundWinner)
    results.appendChild(scorePara)
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
    playGame()
})



function playGame(){
    
    if(humanScore == 5){
        overallWinner.textContent = `Congratulations You are the overall winner won!`
        humanScore = 0;
        computerScore= 0;
    }
    else if(computerScore == 5){
        overallWinner.textContent = `computer won all the rounds`
        humanScore = 0;
        computerScore= 0;
    }
    results.appendChild(overallWinner)
}

// styles

body.setAttribute("style", 
    "text-align:center; background-image: url(images/pexels-pixabay-235985.jpg); color:white; ")

options.setAttribute("style", "font-size:30px" )
rockBtn.setAttribute("style", "font-size:30px")

buttons.forEach((button) =>{
    button.setAttribute("style",
         "font-size:25px; border-radius:12px; width:110px; background-color: grey; color: white")
})

results.setAttribute("style",
    "font-size:20px"
)