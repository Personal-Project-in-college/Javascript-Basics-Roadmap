// DOM Manipulation
const changeColorBTN = document.getElementById('change-color-btn');
const colorBox = document.getElementById('color-box');

// Array berisi warna yang akan digunakan
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan'];
let currentColorIndex = 0; // Untuk melacak warna saat ini

// Fungsi untuk mengganti warna kotak
const changeColor = () => {
    colorBox.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Pindah ke warna berikutnya
};

// Event Listener untuk tombol
changeColorBTN.addEventListener('click', changeColor);
