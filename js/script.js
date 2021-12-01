// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.







const second = 1000;

const maxRandomNumber = 5;

const arrayOfNumber = [];

while (arrayOfNumber.length < maxRandomNumber) {
    let generateRandom = getRndInteger(1,10);
    
    if (!arrayOfNumber.includes(generateRandom)) {
        alert ('Numero generato = ' + generateRandom)
        arrayOfNumber.push(generateRandom);
        console.log(generateRandom);
    }
}

const userNumbers = []
const verifyArray = []

const timer = setTimeout(function() {
    while (userNumbers.length < maxRandomNumber) {
        let numbers = parseInt(prompt('Inserisci il numero che hai memorizzato:'))
        userNumbers.push(numbers);
    }

    userNumbers.forEach((element, index, array) => {
        if (arrayOfNumber.includes(element)) {
            verifyArray.push(element)
        }
    })
    
    if (verifyArray.length === 0) {
        alert('Peccato non hai indovinato nessun numero!')
    }else if (verifyArray.length === 1) {
        alert('Hai indovinato: ' + verifyArray.length + ' numero')
    }else{
        alert('Hai indovinato: ' + verifyArray.length + ' numeri')
    }

}, 30 * second);

// console.log(userNumbers);


// console.log(verifyArray);    



// funzione per generare numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }