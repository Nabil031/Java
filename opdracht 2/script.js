function maakRij(aantal, symbool) {
    let rij = "";
    for (let i = 0; i < aantal; i++) {
        rij += symbool;
    }
    return rij;
}

function maakPyramide(hoogte, symbool) {
    let pyramideRijen = [];
    for (let i = 1; i <= hoogte; i++) {
        pyramideRijen.push(maakRij(i, symbool));
    }
    for (let rij of pyramideRijen) {
        console.log(rij);
    }
}

maakPyramide(5, "*");
maakPyramide(7, "⭐");
