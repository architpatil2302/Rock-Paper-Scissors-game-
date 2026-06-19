let userScore = 0;
let compScore = 0;
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin == true)
    {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose.   ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    let userWin = true;
    console.log("User choice ",userChoice);
    const compChoice = getCompChoice();
    console.log("Computer choice ",compChoice);
    if(userChoice === compChoice)
        {
        msg.innerText = "Game was draw.Play again";
        return;
        }
    else
        {
        
            if(userChoice === "rock")
            {
                userWin = compChoice === "paper" ? false : true;
            }
            else if (userChoice === "scissors")
            {
                userWin = compChoice === "rock" ? false : true;
            }
            else
            {
                userWin = compChoice === "scissors" ? false : true;
            }
        }
    showWinner(userWin,userChoice,compChoice);
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
    console.log("Choice was clicked");
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);    }
    )
}
)