// TODO : DOM Manipulation
// Bagian ini tentang manipulasi DOM, seperti cari parent, child, atau sibling node

// TODO : Traverse the DOM
// Traversing artinya menjelajahi DOM, dari parent ke child atau antar sibling

// TODO : Parent Node Traversal
// Bagian ini tentang cara akses parent dari sebuah elemen

    // Ambil elemen <ul>
    // let ul = document.querySelector('ul')

    // Lihat siapa parent dari <ul> (bisa element atau node secara umum)
    // console.log(ul.parentNode); // Semua tipe node
    // console.log(ul.parentElement); // Khusus element node aja

    // Cari parent-nya parent (naik 2 tingkat di DOM tree)
    // console.log(ul.parentNode.parentNode); 
    // console.log(ul.parentElement.parentElement);

    // Contoh akses parent dari <html> (level teratas)
    // const html = document.documentElement;

    // console.log(html.parentNode); // Parent-nya <html> adalah document
    // console.log(html.parentElement); // null, karena document bukan elemen

// TODO : Child Node Traversal
// Bagian ini tentang akses ke child node (anak) dari sebuah elemen

let ul = document.querySelector('ul'); // Ambil elemen <ul>

// Semua child node (termasuk teks kosong atau spasi)
console.log(ul.childNodes);

// Akses child pertama dan terakhir (termasuk text node kalau ada)
console.log(ul.firstChild);
console.log(ul.lastChild);

// Ubah warna teks elemen kedua dalam childNodes ke hijau
ul.childNodes[1].style.color = 'green';

// Kalau mau akses elemen anak aja, pakai children
console.log(ul.children);

// Akses elemen anak pertama dan terakhir
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// TODO : Sibling Node Traversal
// Bagian ini tentang akses elemen saudara (sebelah kiri/kanan)

    // Ambil elemen <ul> dan <div> untuk contoh
    // let ul = document.querySelector('ul')
    // const div = document.querySelector('div')

    // Semua child node dalam div (termasuk text node)
    // console.log(div.childNodes);

    // Akses node sebelum dan sesudah elemen <ul>
    // console.log(ul.previousSibling); // Bisa teks atau spasi
    // console.log(ul.nextSibling);

    // Kalau cuma mau elemen sebelahnya (bukan teks)
    // console.log(ul.previousElementSibling); // Elemen sebelah kiri
    // console.log(ul.nextElementSibling); // Elemen sebelah kanan
