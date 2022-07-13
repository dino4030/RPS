var userChoices = [
    choice1 = "Rock",
    choice2 = "Paper",
    choice3 = "Scissor"
]
var userChoice = rockFunction() || paperFunction() || scissorFunction();

function computerFunction() {
    var computerChoice = Math.floor(Math.random() * userChoices.length);
    document.getElementById("computer").innerHTML = userChoices[computerChoice];
}

function rockFunction() {
    document.getElementById('user').innerHTML = choice1;
}

function paperFunction() {
    document.getElementById('user').innerHTML = choice2;
}

function scissorFunction() {
    document.getElementById('user').innerHTML = choice3;
}

function checkWinner() {
    choice1 > choice3
    choice1 < choice2
    choice2 > choice1
    choice2 < choice3
    choice3 < choice1
    choice3 > choice2
}
if(userChoice > computerChoice){
    document.getElementById("result").innerText = "User win!"
} else if (userChoice < computerChoice){
    document.getElementById("result").innerText = "Computer Win!"
} else {
    document.getElementById("result").innerText = "Draw!"
}



