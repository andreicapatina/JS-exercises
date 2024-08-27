/*
Creează un array numit listaCumparaturi și adaugă câteva produse pe care vrei să le cumperi.
Scrie o funcție numită sorteazaAlfabetic care sortează lista de cumpărături în ordine alfabetică și o afișează.
Scrie o funcție numită cautaProdus care primește un produs ca argument și returnează indicele acestuia în listă sau un mesaj dacă nu este găsit.
Scrie o funcție numită adaugaProdus care primește un produs ca argument și dacă acesta nu este deja în listă îl adaugă la lista de cumpărături.
Scrie o funcție numită eliminaProdus care primește un produs ca argument și îl elimină din lista de cumpărături.
Afișați atât lista inițială și numărul de produse din ea cât și lista finală și numărul de produse din ea.
*/

let listaCumparaturi = ["mere", "paine", "lapte", "oua", "unt"];

function sorteazaAlfabetic() {
    listaCumparaturi.sort();
    console.log("Lista sortată alfabetic: ", listaCumparaturi);
}

function cautaProdus(produs) {
    let index = listaCumparaturi.indexOf(produs);
    if (index !== -1) {
        return `Produsul '${produs}' se află la indicele ${index}.`;
    } else {
        return `Produsul '${produs}' nu a fost găsit în listă.`;
    }
}

function adaugaProdus(produs) {
    if (listaCumparaturi.indexOf(produs) === -1) {
        listaCumparaturi.push(produs);
        console.log(`Produsul '${produs}' a fost adăugat în listă.`);
    } else {
        console.log(`Produsul '${produs}' este deja în listă.`);
    }
}

function eliminaProdus(produs) {
    let index = listaCumparaturi.indexOf(produs);
    if (index !== -1) {
        listaCumparaturi.splice(index, 1);
        console.log(`Produsul '${produs}' a fost eliminat din listă.`);
    } else {
        console.log(`Produsul '${produs}' nu a fost găsit în listă.`);
    }
}

console.log("Lista inițială: ", listaCumparaturi);
console.log("Număr de produse inițial: ", listaCumparaturi.length);

sorteazaAlfabetic();
console.log(cautaProdus("lapte"));
adaugaProdus("zahar");
adaugaProdus("paine"); // Va afișa un mesaj că produsul există deja
eliminaProdus("oua");
eliminaProdus("cafea"); // Va afișa un mesaj că produsul nu există

console.log("Lista finală: ", listaCumparaturi);
console.log("Număr de produse final: ", listaCumparaturi.length);
