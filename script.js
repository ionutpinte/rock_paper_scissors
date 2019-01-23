// 0 - rock
// 1 - paper
// 2 - scissors

function  startGame(){

    let playerOption;
    $("#winnerText").text("Game in progress...");

    $("#playerScore").text("0");
    $("#computerScore").text("0");

    $("#optionRock").click(function () {

            $("#playerChosenOption").attr("src", "Images/rock.png");
            playerOption = 0;
            computerOption = getComputerOption();
            $("#computerChosenOption").attr("src", `Images/${ computerOption == 0 ? "rock" : computerOption == 1 ? "paper" : "scissors"}.png`);
            updateScore(playerOption, computerOption);
    })

    $("#optionPaper").click(function () {

            $("#playerChosenOption").attr("src", "Images/paper.png");
            playerOption = 1;
            computerOption = getComputerOption();
            $("#computerChosenOption").attr("src", `Images/${ computerOption == 0 ? "rock" : computerOption == 1 ? "paper" : "scissors"}.png`);
            updateScore(playerOption, computerOption);
    })

    $("#optionScissors").click(function () {

            $("#playerChosenOption").attr("src", "Images/scissors.png");
            playerOption = 2;
            computerOption = getComputerOption();
            $("#computerChosenOption").attr("src", `Images/${ computerOption == 0 ? "rock" : computerOption == 1 ? "paper" : "scissors"}.png`);
            updateScore(playerOption, computerOption);
    })

}

function updateScore(player, computer){

    playerActualScore = parseInt($("#playerScore").text());
    computerActualScore = parseInt($("#computerScore").text());

    if(player == computer){
        console.log("Tie");
        playerActualScore++;
        computerActualScore++;
        $("#playerScore").text(playerActualScore);
        $("#computerScore").text(computerActualScore);
    }
    else if( (player == 0 && computer == 2) ||  (player == 1 && computer == 0) || (player == 2 && computer == 1) ){
        console.log("Player wins");
        playerActualScore++;
        $("#playerScore").text(playerActualScore);
    }
    else{
        computerActualScore++;
        $("#computerScore").text(computerActualScore);
    }
    // 0 - tie
    // 1 - winner: player 
    // 2 - winner: computer
    if(playerActualScore == 5 && computerActualScore == 5){
        resetGame(0);
    }
    else if(playerActualScore == 5){
        resetGame(1);
    }
    else if(computerActualScore == 5){
        resetGame(2);
    }
}

function resetGame(winner){

    switch(winner){
        case 0: $("#winnerText").text("TIE!"); break;
        case 1: $("#winnerText").text("Player won!"); break;
        case 2: $("#winnerText").text("Computer won!"); break;
    }
    alert("New game?");
    startGame();

}

function getComputerOption(){
    return Math.floor(Math.random()*3);
}


$(document).ready(function () {
    startGame();
});