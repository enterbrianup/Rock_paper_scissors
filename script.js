// console.log("I am connected")
// let mydata= doc

// const getComputerChoice= () =>{
//    const getComputerChoice= Math.floor(Math.random()*signdata.length);
// //    console.log(getComputerChoice);
//    return signdata[getComputerChoice];
// }
//   signdata=['Rock', 'Paper', 'Scissors'];
//  console.log(getComputerChoice(signdata)

// here we are  getting the random number from the computer 
const resultDiv = document.getElementById('result')
const handsDiv = document.getElementById('hands')
const playerScoreDiv = document.getElementById('player-score')


const totalScore = { computerScore: 0, playerScore: 0 }

const getComputerChoice = () => {
    const rpsChoice = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber)

    return rpsChoice[randomNumber];
}

// console.log(getComputerChoice());

// After getting the random no from the computer we have to compare the result
// of getComputerChoice and Result
//  If returns 1 = human wins
// if return 0 = Match draw
// If returns -1 = human losses;
const getResult = (playerChoice, computerChoice) => {
    let score;

    if (playerChoice == computerChoice) {
        return 0;
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissor') {
        return 1;
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        return 1;
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        return 1;
    }
    else {
        return -1;
    }
    return score;
}

const PlayGame = () => {
    //uses queryselector to select all the rpsbuttons
    const rpsButtons = document.querySelectorAll('.rpsButton');
    // console.log(rpsButtons);
    // loop through every Buttons
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onclickRPS(rpsButton.value)//calling the onclickRPS function
        // everytime someone clicks on it

    });
}
function ShowResult(score, playerChoice, computerChoice) {
    
    if (score == -1) {
        resultDiv.innerText = " you lose!";
    }
    else if (score == 0) {
        resultDiv.innerText = "It's draw!";
    }
    else {
        resultDiv.innerText = "you won!"
    }

    handsDiv.innerText=`🧑 ${playerChoice} vs 🤖 ${computerChoice}`
    playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']
}`

}

// calculate who won and show it on screen

const onclickRPS = (playerChoice) => {
    console.log({ playerChoice });
    const computerChoice = getComputerChoice();
    // console.log({ computerChoice });
    const score = getResult(playerChoice, computerChoice);
    totalScore['playerScore'] += score;
    console.log({ score });
    console.log({ totalScore });
    console.log(ShowResult);
    ShowResult(score, playerChoice, computerChoice);

}

   let endGameButton = document.getElementById('endGameButton');
   endGameButton.onclick=()=>endGame();

   const endGame =()=>{
    playerScoreDiv.innerText='';
    resultDiv.innerText='';
    handsDiv.innerText='';

   }

PlayGame();

