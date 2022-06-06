let tinggi = 5;
let panjangAlas = 7;

function pyramid(tinggi, panjangAlas) {

    let penampung = "";
    
    for (let a = 1; a <= tinggi; a++) {
        for (var b = 0; b <= tinggi - a; b++) {
            penampung += " ";
        }
        for (var c = 1; c <= ((panjangAlas+2)-(b*2)); c++) {
            penampung += "x";
        }
        penampung += "\n";
    }
    return penampung;
}

console.log(pyramid(tinggi, panjangAlas));