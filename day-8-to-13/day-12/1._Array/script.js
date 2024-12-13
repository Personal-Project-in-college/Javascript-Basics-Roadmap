// ! Array JavaScript

// TODO : Deklarasi Array
// * Untuk membuat array, Anda perlu menggunakan tanda kurung siku [] dan memisahkan item menggunakan koma.
let birds = ['Owl', 'Eagle', 'Parrot', 'Falcon'];

// * Atau bisa juga dideklarasikan Array kosong
let flora = [];

// * Dan array bisa memiliki tipe data campuran
let mixedArray = ['Bird', true, 10, 5.17]

// * Posisi indeks array
// Nomor indeks dimulai dari 0
// Untuk mengakses atau mengubah nilai array, Anda perlu menambahkan notasi tanda kurung siku [x] di samping nama array, dengan x adalah nomor indeks elemen tersebut . Berikut ini contohnya:
console.log(birds[0]); // Owl
console.log(birds[1]); // Eagle

// * Anda juga dapat menetapkan nilai baru ke indeks tertentu menggunakan operator penugasan.
birds[2] = 'Vulture';
console.log(birds);
// ['Owl', 'Eagle', 'Vulture', 'Falcon']

// ! Metode khusus untuk manipulasi array
// TODO : metode push() untuk menambahkan item ke akhir array:
let fauna = ['Gajah', 'Badak'];

fauna.push('Banteng');

console.log(fauna);
// ['Owl', 'Eagle', 'Sparrow']

// TODO : pop() dapat digunakan untuk menghapus item dari akhir array:
birds.pop();

console.log(birds);
// ['Owl', 'Eagle']

// TODO : unshift() dapat digunakan untuk menambahkan item dari depan pada indeks 0:
let fishes = ['Salmon', 'Goldfish', 'Tuna'];

fishes.unshift('Sardine');

console.log(fishes);
// ['Sardine', 'Salmon', 'Goldfish', 'Tuna']

// TODO : shift() dapat digunakan untuk menghapus item dari indeks 0:
// let fishes = ['Salmon', 'Goldfish', 'Tuna'];

fishes.shift();

console.log(fishes);
// ['Goldfish', 'Tuna']



// TODO : indexOf() dapat digunakan untuk menemukan dan mengembalikan indeks item dalam array.
// mengembalikan -1 ketika item tidak ditemukan di dalam array
let pos = fishes.indexOf('Tuna');

console.log(pos);
// 3

// TODO : length Untuk mengetahui ukuran array
console.log(fishes.length); // 4