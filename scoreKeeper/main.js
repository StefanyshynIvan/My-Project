let btnPlayer1 = document.querySelector('.btnPlayer1'),
    btnPlayer2 = document.querySelector('.btnPlayer2'),
    reset = document.querySelector('.reset'),
    numInput = document.querySelector('input'),
    maxScoreDisplay = document.querySelector('.maxScore'),
    plOneDisplay = document.querySelector('#plOneDisplay'),
    plTwoDisplay = document.querySelector('#plTwoDisplay'),
    plOneScore = 0,
    plTwoScore = 0,
    gameOver = false,
    winningScore = 5;
    



btnPlayer1.addEventListener("click", function(){
    if(!gameOver){
        plOneScore++;
        if(plOneScore === winningScore){
            plOneDisplay.classList.add("winner");
            
            gameOver = true;
        }
        plOneDisplay.textContent = plOneScore;
    }
});

btnPlayer2.addEventListener("click", function(){
    if(!gameOver){
        plTwoScore++;
        if(plTwoScore === winningScore){
            plTwoDisplay.classList.add("winner");
            gameOver = true;
        }
        plTwoDisplay.textContent = plTwoScore;
    }
});


reset.addEventListener('click', function(){
    resetValue();
});

function resetValue(){
    plOneScore = 0;
    plTwoScore = 0;
    plOneDisplay.textContent = 0;
    plTwoDisplay.textContent = 0;
    plOneDisplay.classList.remove('winner');
    plTwoDisplay.classList.remove('winner');
    gameOver = false;
}



numInput.addEventListener('change', function(){
    maxScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    resetValue();
});
