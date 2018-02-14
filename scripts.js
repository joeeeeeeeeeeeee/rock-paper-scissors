function computerPlay(){
    return Math.floor(Math.random()*3);//rock paper scissors are 0,1,2
}
function round(humanPlay,computerPlay){//0 draw, 1 human win 2 computer win
    if(humanPlay === computerPlay){
        return 0;
    }
    else if(humanPlay === 0 && computerPlay === 2 ||
    humanPlay === 1 && computerPlay === 0 ||
    humanPlay === 2 && computerPlay === 1){
        return 1
    }
    else{
        return 2;
    }
}
function game(humanPlay){
    const plays =["Rock","Paper","Scissors"];
    let computerPlayResult =  computerPlay();
    playerMove.textContent = "Player goes " + plays[humanPlay];
    computerMove.textContent = "Computer goes " + plays[computerPlayResult];
    let winner = round(humanPlay,computerPlayResult);
    if(playerScore < 5 && computerScore < 5){
        if(winner === 0){
            result.textContent = "It's a draw";
        }
        else if (winner === 1){
            result.textContent = "Player wins!";
            playerScore++;
            document.querySelector('#player-score').textContent = playerScore;
        }
        else if (winner === 2){
            result.textContent = "Computer Wins";
            computerScore++;
            document.querySelector('#computer-score').textContent = computerScore;
        }
        if(playerScore === 5){
            result.textContent = "Player has won 5 games and has won overall!";
        }
        if(computerScore === 5){
            result.textContent = "Computer has won 5 games and  has won overall!";
        }
    }
    else{
        playerMove.textContent = "Game already finished";
        computerMove.textContent = "please hit reset to play again";
        result.textContent = "";
    }



}

var playerMove = document.querySelector('#player-move');
var computerMove = document.querySelector('#computer-move');
var result =  document.querySelector('#result');
var playerScore = 0;
var computerScore = 0;
document.querySelector('#rock').addEventListener('click', () => game(0));
document.querySelector('#paper').addEventListener('click', () => game(1));
document.querySelector('#scissors').addEventListener('click', () => game(2));
document.querySelector('#reset').addEventListener('click', ()=>{
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#computer-score').textContent = computerScore;
    playerMove.textContent = "";
    computerMove.textContent = "";
    result.textContent = "";
});
