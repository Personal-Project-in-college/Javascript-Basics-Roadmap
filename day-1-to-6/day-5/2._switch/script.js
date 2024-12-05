// ! Switch digunakan sebagai alternatif dari pernyataan if..else yang memberi Anda kode lebih mudah dibaca, terutama ketika Anda memiliki banyak kondisi berbeda untuk dinilai.

    // * Contoh 1
    let age = 15;
    switch (age) {
        case 10: // Todo : Nilai case langsung diikuti oleh titik dua (:) untuk menandai dimulainya blok case
            console.log("Age is 10");
        break;
        case 20:
            console.log("Age is 20");
        break;
        default:
        console.log("Age is neither 10 or 20");
    }

    // * Contoh 2
    // Todo : Jika Anda ingin mencocokkan string, maka Anda perlu memasukkan string. Pernyataan switch tidak akan melakukan pemaksaan tipe ketika Anda memiliki number sebagai argumen tetapi meletakkan string 
    switch (1) {
        case "1":
            console.log("Hello World!");
            break;
    }

    // * Contoh 3
    switch (0) {
        case true:
            console.log("Hello True!");
        break;
        case false:
            console.log("Bonjour False!");
        break;
        default:
            console.log("No matching case");
    }

    // ? Struktur Switch
        // * 1. Kata kunci "case" untuk memulai blok kasus
        // * 1. Kata kunci "break" untuk menghentikan pernyataan switch agar tidak menjalankan case berikutnya
        // * 1. Kata kunci "default" Kata kunci default untuk menjalankan sepotong kode ketika tidak ditemukan case yang cocok

    // * Contoh 4
    switch (0) {
        case 1:
            console.log("Value is one");
        case 0:
            console.log("Value is zero");
        default:
            console.log("No matching case");
    }
        // Output  "Value is zero" dan "No matching case", karena case tersebut tidak diberikan break, sehingga program nya masih berjalan

    // * Contoh 5
    switch (20) {
        case 10 + 10:
            console.log("value is twenty");
            break;
    }

    // ! : Salah satu kesalahan paling umum saat menggunakan pernyataan switch adalah orang menganggap nilai case dievaluasi sebagai true atau false

    /* 
    ! Blok "if" akan dieksekusi ketika kondisi pengujian bernilai true
    ! Blok "case" akan dieksekusi ketika kondisi pengujian sama persis dengan argumen switch yang diberikan
    */

    // * Contoh 6
    let weekdayNumber = 1;

    switch (weekdayNumber) {
        case 0:
            console.log("Sunday");
        break;
        case 1:
            console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
        break;
        case 3:
            console.log("Wednesday");
        break;
        case 4:
            console.log("Thursday");
        break;
        case 5:
            console.log("Friday");
        break;
        case 6:
            console.log("Saturday");
        break;
        default:
            console.log("The weekday number is invalid");
    }

    // ! Switch Dengan beberapa case

    // * Contoh 7
    let myFood = "Banana";

    switch (myFood) {
        case "Banana":
        case "Apple":
            console.log("Eat fruits everyday to keep you healthy.");
        break;
        case "Chocolate Cake":
            console.log("Enjoy the sweet treat.");
        break;
    }