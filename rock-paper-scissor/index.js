'use strict'

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const result = document.getElementById('result');

const possibleChoices = document.querySelectorAll('.button');
console.log(possibleChoices);

let userChoice;
for(let i = 0; i<possibleChoices.length; i++){
    // in this function, we are selecting either a rock, paper, or a scissor using a button
    possibleChoices[i].addEventListener('click', function(event){
        userChoice = event.target.id;
        userChoiceDisplay.innerHTML = userChoice;
    })

}

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * 3); // or possibleChoices.length
    return randomNumber;
}