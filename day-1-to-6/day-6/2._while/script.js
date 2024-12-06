// ! Pernyataan while atau perulangan while digunakan untuk menjalankan blok kode selama kondisi bernilai true

    /* While
?    while (condition) {
?       statement;
?    }
    */

    // * Contoh 1 
    let i = 0;

    while (i < 6) {
        console.log(`The value of i = ${i}`);
        i++;
    }

    // TODO : Cara mudah untuk mengetahui kapan Anda harus menggunakan while adalah ketika Anda tidak tahu berapa kali Anda perlu mengeksekusi kode

    // * Contoh 2 
    let flips = 0;
    let isHeads = false;

    while (!isHeads) {
        flips++;
        isHeads = Math.random() < 0.5;
    }

    console.log(`It took ${flips} flips to land on heads.`);