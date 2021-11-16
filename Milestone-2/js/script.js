// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.


for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        document.querySelector('.container ul').innerHTML += "<li>FizzBuzz</li>"
    }
    else if (i % 3 === 0 && i !==3) {
        document.querySelector('.container ul').innerHTML += "<li>Fizz</li>"
    } 
    else if (i % 5 === 0 && i !== 5) {
        document.querySelector('.container ul').innerHTML += "<li>Buzz</li>";
    }  
    else {
        document.querySelector('.container ul').innerHTML += `<li>${i}</li>`;
    }
    
    
}




