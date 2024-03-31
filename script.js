let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userPoint = document.querySelector("#user-points");
const compPoint = document.querySelector("#comp-points");
const resultText = document.querySelector("#result-text");
const result = document.querySelector(".result");
const newBtn = document.querySelector(".new-btn");

//Reset Game 
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userPoint.innerText = `${userScore}`;
    compPoint.innerText = `${compScore}`;
    // userPoint.innerText = 0;
    // compPoint.innerText = 0;
    resultText.innerText = `Play your move.`;
    result.style.backgroundColor = "azure";
    result.style.color = "black";
}

newBtn.addEventListener("click", () => {
    resetGame();
})

//Get computer choice
const gencompChoice = () => {
    let array = ["rock","paper","scissor"];
    let index = Math.floor(Math.random() * 3);
    return array[index];
}

const gameDraw = () => {
    resultText.innerText = `Game Draw, play again.`;
    result.style.backgroundColor = "brown";
    result.style.color = "white";
}

const gameResult = (userWin,userChoice,compChoice) => {
    if (userWin === true){
        userScore++;
        userPoint.innerText = `${userScore}`;
        resultText.innerText = `You Win, your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        result.style.color = "white";
    }else{
        compScore++;
        compPoint.innerText = `${compScore}`;
        resultText.innerText = `You Lost, ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor = "red";
        result.style.color = "white";
    }
}

//game logic
const playGame = (userChoice) => {
    const compChoice = gencompChoice();
    if (userChoice === compChoice) {
        gameDraw();
    }else{
        let userWin = true;
        //paper and scissor
        if (userChoice === "rock") {
            //paper and scissor
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock and scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock and paper
            userWin = compChoice === "rock" ? false : true;
        }
        gameResult(userWin,userChoice,compChoice);
    }
};

//Get user choice 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
