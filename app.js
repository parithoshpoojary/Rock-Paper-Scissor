let userScore =0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");

function getComputerChoice()
{
    const choices = ['p','r','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function reloadThePage() 
{
    window.location.reload();
}

function convertToWord(letter)
{
    if(letter === 'p') return "Paper";
    if(letter === 'r') return "Rock";
    if(letter === 's') return "Scissor";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice)+ ", you win! ";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow');},500);
}
function loose(userChoice, computerChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice)+ ", you loose! ";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow');},500);
}
function draw(userChoice, computerChoice)
{
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " and " + convertToWord(computerChoice)+ ", draw match! ";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow');},500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
   switch(userChoice+computerChoice)
   {
       case "rs":
       case "sp":
       case "pr":
           win(userChoice, computerChoice);
           break;
       case "rp":
       case "ps":
       case "sr":
           loose(userChoice, computerChoice);
           break;
       case "rr":
       case "pp":
       case "ss":
            draw(userChoice, computerChoice);
            break;
   }
}

function main() {
paper_div.addEventListener('click', function()
{
    game("p");
})
rock_div.addEventListener('click', function()
{
    game("r");
})
scissors_div.addEventListener('click', function()
{
    game("s");
})
}

main();