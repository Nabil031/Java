function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`Het getal ${num} is even.`);
    } else {
        console.log(`Het getal ${num} is oneven.`);
    }
}

let userInput = prompt("Voer een getal in:");
checkEvenOdd(Number(userInput));


let numbers = [10, 23, 44, 15, 8];

for (let n of numbers) {
    checkEvenOdd(n);
}

