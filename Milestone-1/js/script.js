// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0) {
        i = "Fizz";
        console.log(i);
    } else if (i % 5 === 0) {
        i = "Buzz";
        console.log(i);
    } else if (i % 3 === 0 && i % 5 === 0) {
        i = "FizzBuzz";
        console.log(i);
    } 

    console.log(i);

}


// MILESTONE 1
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.

