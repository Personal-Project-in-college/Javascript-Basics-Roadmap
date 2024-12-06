function printPyramid(rows) {
  // Mencetak setengah piramida
    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }

  // Mencetak setengah piramida terbalik
    for (let i = rows; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
    }

// Input jumlah baris
const rows = parseInt(prompt("Masukkan jumlah baris: "));

// Memanggil fungsi untuk mencetak piramida
printPyramid(rows);
