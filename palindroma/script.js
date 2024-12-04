// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//SENZA FUNZIONE
//1- Chiedere all’utente di inserire una parola
// const word = prompt("Inserisci una parola");

//2- Capovolgere la parola
// let reverseWord = "";

// for(let i = word.length - 1; i >= 0; i--){
//     reverseWord += word[i]
// }

//3- Confrontare la parola inserita dall'utente con quella capovolta 
//   -SE la parola capovolta risulta uguale a quella inserita allora la parola è palindroma
// if(word === reverseWord){
//     alert("Questa parola è palindroma")
// } else{
//     alert("Questa parola non è palindroma")
// }


//CON FUNZIONE
const word = prompt("Inserisci una parola");

function reverseWord(word) {
    let reverseWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i]
    }

    return reverseWord;
}

if (word === reverseWord(word)) {
    alert("Questa parola è palindroma")
} else {
    alert("Questa parola non è palindroma")
}