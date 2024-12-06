

// TODO : Perulangan For
function perulanganFor(nama, jumlahPerulangan) {
    for (let index = 0; index < jumlahPerulangan; index++) {
        console.log(nama);
    }
}

// TODO : Perulangan Whille
function perulanganWhile(nama, jumlahPerulangan) {
    
    let i = 0
    while (i < jumlahPerulangan) {
        console.log(nama);
        i++
    }
}




const nama = String(prompt("Masukkan Nama : "));
const jumlahPerulangan = parseInt(prompt("Masukkan jumlah Loop: "));

perulanganFor(nama, jumlahPerulangan)
perulanganWhile(nama, jumlahPerulangan)