/*
1. Afiseaza toate numerele de la 1 la 10 folosind for loop.
2. Afisati numerele impare pana la 100
3. Afisati tabla inmultirii la 7
4. Calculati si afisati suma numerelor de la 1 la 10 (folosind metoda .reduce())
5. Calculati si afisati suma numerelor pare intre 10 si 30 (folosind metoda .reduce())
6. Calculati si afisati media tuturor numerelor dintr-un array (folosind metoda .reduce()).
*/

// Ex1. Afiseaza toate numerele de la 1 la 10 folosind for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ex2. Afisati numerele impare pana la 100
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Ex3. Afisati tabla inmultirii la 7
for (let i = 1; i < 10; i++) {
    console.log(`${i} * 7 = ${i * 7}`);
}

// Ex4. Calculati si afisati suma numerelor de la 1 la 10 (folosind metoda .reduce())
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const suma = numbers.reduce((a, b) => a + b, 0);
console.log(`Suma este ${suma}`);

// Ex5. Calculati si afisati suma numerelor pare intre 10 si 30 (folosind metoda .reduce())
const myNumbers = [];
for (let i = 10; i <= 30; i++) {
    myNumbers.push(i);
}
console.log(`Suma numerelor pare intre 10 si 30 este: ${myNumbers.reduce((a, b) => b % 2 === 0 ? a + b : a, 0)}
`);

// Ex6. Calculati si afisati media tuturor numerelor dintr-un array (folosind metoda .reduce()).
console.log(myNumbers.reduce((a, b) => a + b, 0) / myNumbers.length);

/* -------------------------------WHILE LOOPS-----------------------------------------------*/

// 1. Generarea unui șir Fibonacci. Scrieți un program care generează șirul Fibonacci până când cel mai mare număr nu depășește 1000. 
// Utilizați un ciclu while pentru această sarcină.

let fib = [1, 1];
let num = 1;
let count = 0;

while (num < 1000) {
    num += fib[count];
    fib.push(num);
    count++;
}

console.log(fib);


// 2. Verificarea parității. Creați un program care cere utilizatorului să introducă numere întregi până când acesta introduce "stop". 
// Programul ar trebui să utilizeze un ciclu while pentru a verifica dacă fiecare număr introdus este par sau impar și să afișeze un mesaj corespunzător.

const userInput = [1, 2 ,3, 6, 124, 51, 214, 5, 12, "stop"];

let i = 0;
while (userInput[i] !== "stop") {
    let response = userInput[i] % 2 === 0 ? "par" : "impar";
    console.log(`${userInput[i]} este ${response}`)
    i++;
}

// 3. Căutarea unui element într-un array. Creați un program care caută un element într-un array folosind un ciclu while. 
// Programul ar trebui să afișeze poziția la care a fost găsit elementul sau un mesaj care spune că elementul nu a fost găsit.

function searchElement(array, element) {
    let i = 0;
    let found = false;

    while (i < array.length) {
        if (array[i] === element) {
            found = true;
            break;
        }
        i++;
    }

    if (found) {
        console.log(`Elementul ${element} a fost găsit la poziția ${i}.`);
    } else {
        console.log(`Elementul ${element} nu a fost găsit în array.`);
    }
}

let nums = [10, 25, 30, 45, 50];
let elementToFind = 30;

searchElement(nums, elementToFind);
