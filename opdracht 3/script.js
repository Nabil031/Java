
let verbodenWoorden = ["stom", "dom", "idioot", "sukkel", "gek"];


function vraagZin() {
    let zin = prompt("Voer een zin in:");
    return zin;
}

function filterZin(zin, lijstWoorden) {
    
    let woorden = zin.split(" ");

   
    for (let i = 0; i < woorden.length; i++) {
        
        for (let j = 0; j < lijstWoorden.length; j++) {
            if (woorden[i].toLowerCase() === lijstWoorden[j].toLowerCase()) {
                
                woorden[i] = "*".repeat(woorden[i].length);
            }
        }
    }

    
    return woorden.join(" ");
}


let origineleZin = vraagZin();
let gefilterdeZin = filterZin(origineleZin, verbodenWoorden);

console.log("Origineel: " + origineleZin);
console.log("Gefilterd: " + gefilterdeZin);
