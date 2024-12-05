// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//SENZA FUNZIONE
//1- Chiedere all'utente di scegliere pari o dispari
// const userChoice = prompt("Pari o dispari?").toLowerCase()

//2- Chiedere all'utente di inserire un numero da 1 a 5
// const userNumber = Number(prompt("Scegli un numero da 1 a 5"))

//3- Validazione
// if((userChoice !== "pari" && userChoice !== "dispari") || isNaN(userNumber) || userNumber < 1 || userNumber > 5){
//     alert("Non valido, ricarica la pagina e prova di nuovo")
// } else{

//     //4- Generare un numero random per il computer
//     const cpuNumber = Math.floor(Math.random() * 5) + 1;
//     alert(`Il numero del tuo avversario è ${cpuNumber}`)

//     //5- Somma dei due numeri
//     const sum = userNumber + cpuNumber;
//     alert(`La somma dei due numeri è ${sum}`)

//     //6- Stabiliamo se la somma dei due numeri è pari o dispari
//     let result;

//     if(sum % 2 === 0){
//     result = "pari"
//     } else{
//     result = "dispari"
//     }
    
//     //7- Dichiariamo chi ha vinto
//     if(result === userChoice){
//         alert("Il vincitore sei tu")
//     } else{
//         alert("Il vincitore è il computer")
//     }
// }


//CON FUNZIONE
let userChoice;
do{
    userChoice = prompt("Pari o dispari?").toLowerCase();
} while(userChoice !== "pari" && userChoice !== "dispari")
    
let userNumber;
do{
    userNumber = Number(prompt("Scegli un numero da 1 a 5"))
} while(isNaN(userNumber) || userNumber < 1 || userNumber > 5)

    function getRandomNumber() {
        return Math.floor(Math.random() * 5) + 1;
    }

    const cpuNumber = getRandomNumber();
    alert(`Il numero del tuo avversario è ${getRandomNumber()}`)

    const sum = userNumber + cpuNumber;
    alert(`La somma dei due numeri è ${sum}`);

    function isEven(sum) {
        return sum % 2 === 0
    }

    const result = isEven(sum);

    if (result === userChoice) {
        alert("Il vincitore sei tu");
    } else {
        alert("Il vincitore è il computer");
    }


