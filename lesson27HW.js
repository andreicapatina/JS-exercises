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


/*----------------------- Exerciţiul: Ana’s calculator v.3 ------------------*/

/*
Să îmbunătățim și mai mult calculatorul de bacșișuri al Anei, de data aceasta folosind cicluri!
    1. Creați un array „facturi” care să conțină toate cele 10 valori ale facturilor de testare
    2. Creați 2 array-uri goale pentru “tips” și “totals”
    3. Utilizați funcția „calcTip” pe care am scris-o înainte (nu este nevoie să repetați) pentru a calcula bacșișurile și valorile totale 
(factură + bacșiș) pentru fiecare valoare din array-ul de facturi. Utilizați ciclul for pentru a efectua cele 10 calcule!
DATE TESTARE: 22, 295, 176, 440, 37, 105, 10, 1100, 86 și 52
SFAT: Apelați calcTip în ciclu și utilizați metoda push pentru a adăuga valori in array-urile tips si totals.
4. Scrieți o funcție „calcAverage” care ia ca argument un array numit „arr”. Această funcție calculează media tuturor numerelor din array-ul primit. Apelați funcția cu array-ul „totals”.
*/

const facturi = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;
}

function calcAverage(arr) {
    return arr.reduce((a, b) => (a + b)) / arr.length;
}

for (let i = 0, len = facturi.length; i < len; i++) {
   tips.push(calcTip(facturi[i]));
   totals.push(tips[i] + facturi[i]);
}

console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);
console.log(`Media tuturor facturilor este ${calcAverage(totals)}`);


/*----------------- Calcularea economiilor și a dobânzii compuse ------------------- */

/*
- Funcția calculateInterest(principal, rate, years): 
    Această funcție primește o sumă principală, o rată a dobânzii și un număr de ani. 
    Ea va calcula suma acumulată în cont în urma aplicării dobânzii compuse anuale. Utilizați un ciclu "for" pentru a actualiza suma în fiecare an.
- Funcția calculateMonthlyContribution(contribution, rate, years): 
    Această funcție primește o contribuție lunară, o rată a dobânzii și un număr de ani. 
    Ea va calcula suma acumulată în cont dacă s-a făcut o contribuție lunară, aplicând dobânda compusă în fiecare lună. Utilizați un ciclu "for" pentru a actualiza suma în fiecare lună.
- Funcția printSavings(name, principal, rate, years, contribution): 
    Această funcție apelează celelalte două funcții și afișează în consolă suma totală de bani economisiți în cont după un anumit număr de ani, luând în considerare suma inițială, dobânda anuală și contribuțiile lunare.
- Funcția printSavings ar trebui să afișeze un mesaj precum: "Ioana, suma totală pe care o vei avea în cont după x ani este [Suma]."

Exemplu de apelare a funcției printSavings: printSavings('Ioana', 1000, 5, 10, 50)
În acest exemplu, 'Ioana' începe cu 1000 lei în cont, adaugă 50 lei lunar și are o rată a dobânzii de 5% pe an. Funcția ar trebui să calculeze suma totală de bani pe care Ioana o va avea în cont după 10 ani.
*/

function calculateInterest(principal, rate, years) {
    let sum = principal;
    for (let i = 0; i < years; i++) {
        sum += sum * (rate / 100);
    }
    return sum;
}

function calculateMonthlyContribution(contribution, rate, years) {
    let sum = 0;
    let months = years * 12;
    let monthlyRate = rate / 100 / 12;

    for (let i = 0; i < months; i++) {
        sum = (sum + contribution) * (1 + monthlyRate);
    }

    return sum;
}

function printSavings(name, principal, rate, years, contribution) {
    let totalInterest = calculateInterest(principal, rate, years);
    let monthlyContributionSum = calculateMonthlyContribution(contribution, rate, years);

    console.log(`${name}, suma totală pe care o vei avea în cont după ${years} ani este ${totalInterest + monthlyContributionSum}`);
}

printSavings("Ioana", 1000, 5, 10, 50);