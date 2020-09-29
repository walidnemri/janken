
let userScore = 0;
let iaScore = 0

const resultPosibility = {
    paper: 'rock',
    rock: 'scissor',
    scissor: 'paper',
}

console.log(resultPosibility);
const buttonChoices = document.querySelectorAll('.choice')

for(let i = 0; i < buttonChoices.length ; i++) {
    buttonChoices[i].addEventListener("click",(e) => {
       takeChoice(e.target.id)
    })
}

const arrayChoice = ['rock','paper','scissor'];

const randomChoice = (arrChoice) => {
    let randomNumber = Math.floor(Math.random() * Math.floor(arrChoice.length));

    return arrChoice[randomNumber];

}
//console.log(randomChoice(arrayChoice))



const takeChoice = (choice) => {
    let userChoice = choice
    console.log(`'./img/${userChoice}.png'`)
    document.querySelector('#userChoice').style.backgroundImage = `url('./img/${userChoice}.png')`

    let iaChoice = randomChoice(arrayChoice);

    document.querySelector('#iaChoice').style.backgroundImage = `url('./img/${iaChoice}.png')`
    calculScore(userChoice,iaChoice)

    if (userScore === 3) win('usser');

    if (iaScore === 3) win('ia');
}

const calculScore = (userChoice,iaChoice) => {
    //console.log(resultPosibility[userChoice] )
    //console.log(iaChoice )

    if (userChoice === iaChoice) return
    if (resultPosibility[userChoice] === iaChoice) {
        userScore++;
        //console.log('user score',userScore)
        return
    }
    iaScore++
    return
    
}

const win = (winner) => {
    document.querySelector('.container').style.display = 'none'

    userScore = 0;
    iaScore = 0;

    let winDiv = document.querySelector('.win')
    winDiv.style.display = 'flex'

    winner === 'user' ? winDiv.innerHTML = "you win": winDiv.innerHTML = "you lose"
    

}