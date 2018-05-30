//global variables
var wins = 0;
var losses = 0;
var userTotal = 0;

//generation of random number to beat
var goal = Math.floor(Math.random()*(120-19+1) + 19);

//generation of random gem value
var gemValue = function() {
    return Math.floor(Math.random()*(12) + 1)
}

//gem values set
var gemOne = 0;
var gemTwo = 0;
var gemThree = 0;
var gemFour = 0;

//reset function
var resetGame = function() {
    userTotal = 0;
    goal = Math.floor(Math.random()*(120-19+1) + 19);
    console.log(goal);
    gemOne = gemValue();
    console.log(gemOne);
    gemTwo = gemValue();
    console.log(gemTwo);
    gemThree = gemValue();
    console.log(gemThree);
    gemFour = gemValue();
    console.log(gemFour);
    $('#valueAdd').text('');
    $('#score').text('0');
    $('#goal').text(goal);

}

//Click events in DOM
var gemOneClick = function() {
    console.log(gemOne);
    $('#valueAdd').text(gemOne);
    userTotal = userTotal + gemOne;
    $('#score').text(userTotal);
    winCheck();
}
var gemTwoClick = function() {
    console.log(gemTwo);
    $('#valueAdd').text(gemTwo);
    userTotal = userTotal + gemTwo;
    $('#score').text(userTotal);
    winCheck();
}
var gemThreeClick = function() {
    console.log(gemThree);
    $('#valueAdd').text(gemThree);
    userTotal = userTotal + gemThree;
    $('#score').text(userTotal);
    winCheck();
}
var gemFourClick = function() {
    console.log(gemFour);
    $('#valueAdd').text(gemFour);
    userTotal = userTotal + gemFour;
    $('#score').text(userTotal);
    winCheck();
}

var winCheck = function() {

    if (userTotal === goal) {
        alert('You Win!');
        wins = wins + 1;
        $('#wins').text(wins);
        resetGame();
    }
    if (userTotal > goal) {
        alert('You lose!')
        losses = losses + 1;
        $('#losses').text(losses);
        resetGame();
}
}