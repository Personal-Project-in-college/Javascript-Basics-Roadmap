// Ambil elemen yang dibutuhkan
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// Variabel untuk menyimpan ekspresi kalkulasi
let currentInput = '';
let resultDisplayed = false;

// Tambahkan event listener ke setiap tombol
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            // Reset semua input
            currentInput = '';
            display.value = '';
            resultDisplayed = false;
        } else if (value === '=') {
            // Hitung hasil
            try {
                currentInput = eval(currentInput.replace('×', '*').replace('÷', '/')); // Hitung
                display.value = currentInput; // Tampilkan hasil
                resultDisplayed = true;
            } catch (error) {
                display.value = 'Error'; // Tampilkan error jika input tidak valid
                currentInput = '';
            }
        } else {
            // Tambahkan angka/operator ke input
            if (resultDisplayed && !isNaN(value)) {
                // Mulai perhitungan baru setelah hasil ditampilkan
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput += value;
            }
            display.value = currentInput; // Tampilkan input saat ini
        }
    });
});
