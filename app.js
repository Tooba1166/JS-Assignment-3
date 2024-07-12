// We want to write a function that adds two numbers.
function addNumbers(a, b) {
    return a + b;
}
let num11 = 6;
let num22 = 19;

let result1 = addNumbers(num11, num22);
console.log(result1); // Output: 25

let result2 = addNumbers(8, 5);
console.log(result2); // Output: 13

// We are going to create a program that will randomly describe an inputted name.
const descriptiveWords = ["brilliant", "amazing", "creative", "kind", "energetic", "talented", "thoughtful", "courageous", "charming", "witty"];

function describeName() {
    const name = prompt("Please enter a name:");
    const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    const randomWord = descriptiveWords[randomIndex];
    console.log(`${name} is ${randomWord}!`);
}

describeName();


let num1 = 7;
let num2 = 4;
let operator = "+";

function basicCalculator(number1, number2, operation = "+") {
    if (operation === "+") {
        return number1 + number2;
    } else if (operation === "-") {
        return number1 - number2;
    } else {
        return number1 + number2; // Default to addition if the operator is invalid
    }
}

console.log(basicCalculator(num1, num2, operator)); // Output: 11

operator = "-";
console.log(basicCalculator(num1, num2, operator)); // Output: 3

console.log(basicCalculator(num1, num2)); // Output: 11

console.log(basicCalculator(num1, num2, "*")); // Output: 11


// Complete Practice exercise 4.5 and Chapter projects
let prize = prompt("Select a number between 0 and 10:");
prize = Number(prize);

let outputMessage = "My Selection: ";
let prizeMessage;

switch(prize) {
    case 0:
    case 1:
        prizeMessage = "You won a small candy!";
        break;
    case 2:
    case 3:
        prizeMessage = "You won a medium candy!";
        break;
    case 4:
    case 5:
        prizeMessage = "You won a large candy!";
        break;
    case 6:
    case 7:
        prizeMessage = "You won a toy!";
        break;
    case 8:
    case 9:
        prizeMessage = "You won a book!";
        break;
    case 10:
        prizeMessage = "You won a big surprise!";
        break;
    default:
        prizeMessage = "Invalid selection. Please choose a number between 0 and 10.";
}

outputMessage += prize + " - " + prizeMessage;
alert(outputMessage);


// Evaluating a number game
const dynamicNumber = 6; // You can set this to any number you'd like

let userNumber = prompt("Enter a number:");
userNumber = Number(userNumber);

let resultMessage;

if (userNumber > dynamicNumber) {
    resultMessage = "Your number is greater than the dynamic number.";
} else if (userNumber === dynamicNumber) {
    resultMessage = "Your number is equal to the dynamic number.";
} else if (userNumber < dynamicNumber) {
    resultMessage = "Your number is less than the dynamic number.";
} else {
    resultMessage = "Invalid input. Please enter a valid number.";
}

alert(resultMessage);


// Friend checker game

let userName = prompt("Enter a name:");
let message;

switch (userName.toLowerCase()) {
    case "kulsoom":
    case "rida":
    case "mizab":
        message = `${userName} is your friend!`;
        break;
    default:
        message = `You don't know ${userName}.`;
}

console.log(message);

// Rock Paper Scissors game

const choices = ["Rock", "Paper", "Scissors"];

const playerChoiceIndex = Math.floor(Math.random() * 3);
const computerChoiceIndex = Math.floor(Math.random() * 3);

const playerChoice = choices[playerChoiceIndex];
const computerChoice = choices[computerChoiceIndex];
let resultMessages;

if (playerChoice === computerChoice) {
    resultMessages = "It's a tie!";
} else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
) {
    resultMessages = "You win!";
} else {
    resultMessages= "Computer wins!";
}

const outputMessages = `Player choice: ${playerChoice}\nComputer choice: ${computerChoice}\nResult: ${resultMessages}`;
console.log(outputMessages);
