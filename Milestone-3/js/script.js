// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        document.querySelector('.container').innerHTML += `<div class="box fizzbuzz">FizzBuzz</div>`;
    }
    else if (i % 3 === 0 && i !==3) {
        document.querySelector('.container').innerHTML += `<div class="box fizz">Fizz</div>`;
    } 
    else if (i % 5 === 0 && i !== 5) {
        document.querySelector('.container').innerHTML += `<div class="box buzz">Buzz</div>`;
    }  
    else {
        document.querySelector('.container').innerHTML += `<div class="box">${i}</div>`;
    }
}




