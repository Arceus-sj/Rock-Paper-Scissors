let totalWin = 0;
let totalTie = 0;
let totalLose = 0;
let restart = document.querySelector('#restart-btn');

let humanDisplay = document.querySelector('#human');
let computerDisplay = document.querySelector('#computer');
let numberOfWin = document.querySelector('.win-el');
let numberOfTie = document.querySelector('.tie-el');
let numberOfLose = document.querySelector('.lose-el');
let declareStatus = document.querySelector('.declare');




function computerPlay () {
    let option = ['rock', 'paper', 'scissors'];

    let random_sign = Math.floor(Math.random() * option.length);

    return option[random_sign];
}

function humanPlay (sign) {
    let human_option_choose;
    if (`${sign}` === '✊')
        human_option_choose = 'rock';
    else if (`${sign}` === '🖐️')
        human_option_choose = 'paper';
    else if (`${sign}` === '✌️')
        human_option_choose = 'scissors';

    return human_option_choose;
}

function checkSign (sign) {

    if (sign === 'rock')
        return '✊';
    else if (sign === 'paper')
        return '🖐️';
    else if (sign === 'scissors')
        return '✌️';
}


for(let i = 0; i < 3; i++) {
    let sign_btn = document.querySelectorAll('button')[i];

    sign_btn.addEventListener('click', function () {
        
        let computer_choose = computerPlay();

        let human_choose = humanPlay(sign_btn.innerHTML);

        
        // display
        humanDisplay.innerHTML = checkSign(human_choose);
        computerDisplay.innerHTML = checkSign(computer_choose);


        // play game:
        if (human_choose === computer_choose) {
            totalTie++;
            numberOfTie.textContent = totalTie;
            declareStatus.innerHTML = "Tie!";

        }
        else if((human_choose === 'rock' && computer_choose === 'paper') || (human_choose === 'scissors' && computer_choose === 'rock') || (human_choose === 'paper' && computer_choose === 'scissors')) {
            totalLose++;
            numberOfLose.textContent = totalLose;
            declareStatus.innerHTML = "Lose!";
        }
        else {
            totalWin++;
            numberOfWin.textContent = totalWin;
            declareStatus.innerHTML = "Win!"
        }

    });
}


restart.addEventListener('click', function () {
    totalWin = 0;
    totalTie = 0;
    totalLose = 0;
    declareStatus.innerHTML = "Play Again! 🤠";
    humanDisplay.innerHTML = '🎁';
    computerDisplay.innerHTML = '🎁';
    numberOfWin.innerHTML = 0;
    numberOfLose.innerHTML = 0;
    numberOfTie.innerHTML = 0;

});

