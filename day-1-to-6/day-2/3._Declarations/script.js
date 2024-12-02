//! Deklarasi

if (true) {
    var x = 5;
}
console.log(x);

if (true) {
    let y = 10;
}
console.log(y); // Error karena let dideklarasikan di dalam scope atau blok kode

if (true) {
    const z = 15;
}
console.log(z); // Sama akan Error karena const dideklarasikan di dalam scope atau blok kode

// jadi ini lah perbedaan deklarasi menggunakan var, let dan const, karena masing masing memiliki karakter unik