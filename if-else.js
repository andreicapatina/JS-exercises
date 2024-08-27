// Ex1. Creeați o variabilă "temperature". Folosiți instrucțiuni if/else pentru a verifica dacă temperatura este 
// sub 0 (îngheț), între 0 și 10 (frig), între 11 și 25 (moderat), sau peste 25 (cald). Afișați categoria de temperatură corespunzătoare.
let temperature = 5;

if (temperature < 0) {
    console.log("Inghet")
} else if (temperature >= 0 && temperature <= 10) {
    console.log("Frig")
} else if (temperature >= 11 && temperature <= 25) {
    console.log("Moderat")
} else {
    console.log("Cald")
}

// Ex2. Creeați o variabilă "day" cu o valoare de la 1 la 7, unde 1 reprezintă Luni și 7 reprezintă Duminică. 
// Folosiți instrucțiuni if/else pentru a afișa numele zilei. De exemplu, dacă day este 1, afișați "Luni"; dacă day este 5, afișați "Vineri".
let day = 8;

if (day === 1) {
    console.log("Luni");
} else if (day === 2) {
    console.log("Marti");
} else if (day === 3) {
    console.log("Miercuri");
} else if (day === 4) {
    console.log("Joi");
} else if (day === 5) {
    console.log("Vineri");
} else if (day === 6) {
    console.log("Sambata");
} else if (day === 7) {
    console.log("Duminica");
} else {
    console.log("Numărul introdus nu corespunde unei zile a săptămânii");
}

// Ex3. Având o variabilă "number", folosiți instrucțiuni if/else pentru a determina dacă numărul este par sau impar. 
// Afișați "Par" dacă numărul este par și "Impar" dacă este impar.
let number = 1;

if (number % 2 === 0) {
    console.log("Par");
} else {
    console.log("Impar")
}

/*
4. Creeați o variabilă "purchaseAmount" și determinați costul total după aplicarea unei reduceri și adăugarea impozitului:
      - Dacă purchaseAmount este mai mare sau egal cu 100, aplicăm o reducere de 10%.
      - Pentru toate sumele, adaugăm un impozit de 5% la totalul după reducere (la necesitate).
Afișați suma finală de plătit.
*/

let purchaseAmount = 100;
let finalPrice;

if (purchaseAmount >= 100) {
  finalPrice = purchaseAmount * 0.9;
} else {
  finalPrice = purchaseAmount;
}

finalPrice += finalPrice * 0.05;

console.log(finalPrice);

/*
5. Creeați o variabilă password și folosiți instrucțiuni if/else pentru a verifica complexitatea parolei:
-    Dacă password are cel puțin 12 caractere și conține atât litere mari, litere mici, cât și cifre, afișați "Parolă foarte sigură".
-    Dacă password are cel puțin 8 caractere și conține litere mari și litere mici, afișați "Parolă sigură".
-    Dacă password are cel puțin 6 caractere și conține doar litere, afișați "Parolă slabă".
-    Altminteri, afișați "Parolă nesigură".
*/

let password = "megaPass21231"; 

if (password.length >= 12 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
    console.log("Parolă foarte sigură");
} else if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
    console.log("Parolă sigură");
} else if (password.length >= 6 && /^[a-zA-Z]+$/.test(password)) {
    console.log("Parolă slabă");
} else {
    console.log("Parolă nesigură");
}


/*
6. Scrieți un program JavaScript pentru a verifica dacă un număr dat este un număr prim. 
Un număr prim este un număr mai mare decât 1 care nu are alți divizori pozitivi în afară de 1 și de el însuși.
*/

const num = 9; 
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

console.log(`Numărul ${num} este prim: ${isPrime(num)}`);

/*
Ex7. Suma lungimilor a două laturi ale unui triunghi trebuie să fie mai mare decât lungimea celei de-a treia laturi. 
De exemplu, numerele 3, 4 și 5 pot forma un triunghi pentru că 3+4>5, 4+5>3 și 5+3>4. În contrast, numerele 1, 2 și 5 nu pot forma un triunghi pentru că 1+2<5. 
Astfel, dacă sunt date trei numere întregi, puteți determina dacă acestea ar putea forma un triunghi sau nu aplicând această regulă generală.
Având 3 numere, determinați dacă ele pot forma un triunghi folosind regula de mai sus. De asemenea, testați dacă triunghiul rezultat ar fi un triunghi dreptunghic folosind teorema lui Pitagora.
*/

const a = 3;
const b = 4;
const c = 5;

const isTriangle = (a, b, c) => {
    return (a + b > c && a + c > b && b + c > a) ? true : false;
}

const isRightTriangle = (a, b, c) => {
    const hypotenuse = Math.max(a, b, c);

    let side1, side2;
    
    if (hypotenuse === a) {
        side1 = b;
        side2 = c;
    } else if (hypotenuse === b) {
        side1 = a;
        side2 = c;
    } else {
        side1 = a;
        side2 = b;
    }
    
    return hypotenuse ** 2 === side1 ** 2 + side2 ** 2;
}

console.log(`Laturile a = ${a}, b = ${b}, c = ${c} formeaza: \nun triunghi: ${isTriangle(a, b, c)} \nun triunghi dreptunghic: ${isRightTriangle(a, b, c)}`);