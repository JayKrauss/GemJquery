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
    gemOne = gemValue();
    gemTwo = gemValue();
    gemThree = gemValue();
    gemFour = gemValue();
    $('#valueAdd').text('');
    $('#score').text('0');
    $('#goal').text(goal);
    $('#start').trigger('play');
}

//Click events in DOM
var gemOneClick = function() {
    $('#valueAdd').text(gemOne);
    userTotal = userTotal + gemOne;
    $('#score').text(userTotal);
    winCheck();
    $('#gem1').trigger('play');
}
var gemTwoClick = function() {
    $('#valueAdd').text(gemTwo);
    userTotal = userTotal + gemTwo;
    $('#score').text(userTotal);
    winCheck();
    $('#gem2').trigger('play');
}
var gemThreeClick = function() {
    $('#valueAdd').text(gemThree);
    userTotal = userTotal + gemThree;
    $('#score').text(userTotal);
    winCheck();
    $('#gem3').trigger('play');
}
var gemFourClick = function() {
    $('#valueAdd').text(gemFour);
    userTotal = userTotal + gemFour;
    $('#score').text(userTotal);
    winCheck();
    $('#gem4').trigger('play');
}

//Checks for a win/loss condition
var winCheck = function() {

    if (userTotal === goal) {
        $('#score').text('You Win!')
        $('#goal').text('Play Again!')
        $('#applause').trigger('play');
        wins = wins + 1;
        $('#wins').text(wins);
    }
    if (userTotal > goal) {
        $('#score').text('You Lose!')
        $('#goal').text('Try Again!')
        $('#laugh').trigger('play');
        losses = losses + 1;
        $('#losses').text(losses);
}
}


