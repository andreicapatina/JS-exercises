/*
Scrieți o funcție cu numele plural care să:
Accepte 2 argumente: un substantiv și un număr.
Întoarcă o propoziție ce conține numărul și substantivul la plural (dacă e cazul), ex: “I have 5 cats” sau “I have 1 dog”. 
Chemați funcția cu datele: “6 pig”, “0 hamster”, “1 parrot”.
Bonus: includem şi exceptiile "sheep" (“I have 1 sheep”, “I have 4 sheep”) şi "geese" (“I have 1 goose”, “I have 9 geese”)
*/

function plural(number, noun) {
    const exceptions = {
        "sheep": "sheep",
        "goose": "geese"
    };
    
    if (noun in exceptions) {
        noun = (number === 1) ? noun : exceptions[noun];
    } else if (number !== 1) {
        noun += "s";
    }
    
    return "I have " + number + " " + noun;
}

console.log(plural(6, "pig"));      
console.log(plural(0, "hamster"));  
console.log(plural(1, "parrot"));  
console.log(plural(1, "sheep"));    
console.log(plural(4, "sheep"));    
console.log(plural(1, "goose"));    
console.log(plural(9, "goose"));   


/*
Creați o programă care are definite 3 variabile numele, anulNasterii şi isF (boolean).
Creați o funcție care calculează vârsta persoanei.
Creați o funcţie care acceptă o valoare booleană isF și întoarce vârsta de pensionare (folosiți ternaryOperator  - 67 bărbați, 64 femei);
Creați o funcție care află dacă persoana este deja la pensie, peste câți ani se va pensiona, şi dacă nu este minoră.
Afișați în consolă numele și mesajul de pensionare după exemplu: “Vasile mai are 26 de ani până la pensionare”. Chemați numai o funcție cu datele.
Date: Sergiu, 1979. Anastasia, 1963. Andreea, 2010.
*/

let nume = "Sergiu";
let anulNasterii = 1979;
let isF = false; 

function calculeazaVarsta(anulNasterii) {
    const anCurent = new Date().getFullYear();
    return anCurent - anulNasterii;
}

function varstaPensionare(isF) {
    return isF ? 64 : 67;
}

function detaliiPensionare(nume, anulNasterii, isF) {
    const varsta = calculeazaVarsta(anulNasterii);
    const varstaPens = varstaPensionare(isF);
    
    if (varsta >= varstaPens) {
        console.log(`${nume} este deja la pensie.`);
    } else if (varsta < 18) {
        console.log(`${nume} este minor(ă).`);
    } else {
        console.log(`${nume} mai are ${varstaPens - varsta} ani până la pensionare.`);
    }
}

detaliiPensionare("Sergiu", 1979, false);
detaliiPensionare("Anastasia", 1963, true);
detaliiPensionare("Andreea", 2010, true);


// Rock Paper Scissors

const CHOICES = ["rock", "paper", "scissors"];
const WINNING_PAIRS = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (CHOICES.includes(userInput)) {
    return userInput;
  } else if (userInput === "bomba") {
    return userInput;
  } else {
    return `Invalid choice "${userInput}". Please choose "rock", "paper", or "scissors".`;
  }
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "No winner! It's a tie!";
  }

  if (WINNING_PAIRS[userChoice] === computerChoice) {
    return "You won!";
  } else {
    return "You lost: the computer won!";
  }
}

function playGame() {
  const userInput = "bomba"; // Use "rock", "paper", "scissors" or "bomba" (cheat mode)

  let userChoice = getUserChoice(userInput);
  if (userChoice.startsWith("Invalid choice")) {
    console.log(userChoice);
    return;
  }

  let computerChoice;

  if (userChoice === "bomba") {
    const randomPair = Object.entries(WINNING_PAIRS)[Math.floor(Math.random() * CHOICES.length)];
    userChoice = randomPair[0];
    computerChoice = randomPair[1];
  } else {
    computerChoice = getComputerChoice();
  }

  console.log(`You threw: ${userChoice}.`);
  console.log(`The computer threw: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();




