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

const getComputerChoice =()=>{
    const rpsChoice = ['Rock', 'Paper', 'Scissors'];
    const randomNumber=Math.floor(Math.random() * 3);
    console.log(randomNumber)
    
    return rpsChoice[randomNumber];    
}

// console.log(getComputerChoice());

// After getting the random no from the computer we have to compare the result
// of getComputerChoice and Result

const getResult=(playChoice, computerChoice)=>{
let score;
    
    if (playChoice == computerChoice) {
        return 0;
    }
    else if(playChoice =='Rock' && computerChoice == 'Scissor'){
        return 1;
    }
    else if (playChoice == 'Paper' && computerChoice == 'Rock') {
        return 1;
    }
    else if (playChoice == 'Scissors' && computerChoice == 'Paper') {
        return 1;
    }
    else{
        return -1;
    }
    return score;
}