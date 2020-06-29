//input user choice
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'lion' || userInput === 'alien' || userInput === 'old lady') {
        return userInput;
    } else {
        return 'Please enter "Alien, Lion or Old lady!"'
    }
}
//computer random choice
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'lion';
    } else if (randomNumber === 1) {
        return 'alien';
    } else {
        return 'old lady';
    }
}
//find winner
function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (userChoice === 'alien') {
        if (computerChoice === 'lion') {
            return 'You were mauled by a lion, you lose!';
        } else {
            return 'You have disarmed an old lady, you win!';
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'You have been shot by an old lady, you lose!';
        } else {
            return 'You have mauled an alien, you win!';
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'You have been disarmed by an alien, you lose!'
        } else {
            return 'You have shot an alien, you win!';
        }
    }
}
function playGame() {
    var promptUserChoice = prompt("Please choose lion, alien, or old lady");
    var userChoice = getUserChoice(promptUserChoice)
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(ComputerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

