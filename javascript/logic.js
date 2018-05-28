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
    document.getElementById('valueAdd').innerHTML = '';
    document.getElementById('score').innerHTML = '0';
    document.getElementById('goal').innerHTML = goal;

}

//Click events in DOM
var gemOneClick = function() {
    console.log(gemOne);
    document.getElementById('valueAdd').innerHTML = gemOne;
    userTotal = userTotal + gemOne;
    document.getElementById('score').innerHTML = userTotal;
    winCheck();
}
var gemTwoClick = function() {
    console.log(gemTwo);
    document.getElementById('valueAdd').innerHTML = gemTwo;
    userTotal = userTotal + gemTwo;
    document.getElementById('score').innerHTML = userTotal;
    winCheck();
}
var gemThreeClick = function() {
    console.log(gemThree);
    document.getElementById('valueAdd').innerHTML = gemThree;
    userTotal = userTotal + gemThree;
    document.getElementById('score').innerHTML = userTotal;
    winCheck();
}
var gemFourClick = function() {
    console.log(gemFour);
    document.getElementById('valueAdd').innerHTML = gemFour;
    userTotal = userTotal + gemFour;
    document.getElementById('score').innerHTML = userTotal;
    winCheck();
}

var winCheck = function() {

    if (userTotal === goal) {
        alert('You Win!');
        wins = wins + 1;
        document.getElementById('wins').innerHTML = wins;
        resetGame();
    }
    if (userTotal > goal) {
        alert('You lose!')
        losses = losses + 1;
        document.getElementById('losses').innerHTML = losses;
        resetGame();
}
}