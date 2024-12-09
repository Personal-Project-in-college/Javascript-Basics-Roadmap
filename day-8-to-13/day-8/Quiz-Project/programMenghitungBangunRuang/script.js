

const hitungPersegi = side => {
    let keliling = 4 * side
    let luas = side * side
    
    // ! Return dua variable bisa menggunakan array
    // return [keliling, luas]

    // ! Atau dalam bentuk object
    return {side, keliling, luas}
    
}
const hasilPersegi = hitungPersegi(8)

console.log(`The Square side is ${hasilPersegi.side}`);
console.log(`The area of the square is ${hasilPersegi.luas}`);
console.log(`The perimeter of the square is ${hasilPersegi.keliling}`);


const hitungSegitiga = (alas, tinggi) => {
    let luas = (alas * tinggi) * 0.5

    return {luas}
}

const hasilSegitga = hitungSegitiga(10, 6)

console.log(`Luas Segitiga : ${hasilSegitga.luas}`);
