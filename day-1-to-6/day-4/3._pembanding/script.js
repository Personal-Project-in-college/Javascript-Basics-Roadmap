// ! Operator perbandingan digunakan untuk membandingkan dua nilai. Operator dalam kategori ini akan mengembalikan nilai Boolean: true atau false.

    let x 
    let y

    // ? 1. Perbandingan Setara (Mengembalikan true jika value sama)
    function setara() {
        x = 10
        y = x
        if (x == y) {
            console.log("Perbandingan setara");
        }
            // Bisa Untuk String juga (Perbandingan string peka huruf besar-kecil)
            console.log("ABC" == "ABC"); // true
            console.log("ABC" == "abc"); // false
            console.log("Z" == "A"); // false

            // JavaScript juga memiliki dua versi untuk setiap operator perbandingan: longgar dan ketat. (Menambahkan satu lagi simbol = yang sama ke operator maka akan membuat perbandingan ketat)
            console.log("9" == 9); // true
            console.log("9" === 9); // false
            console.log(true == 1); // true
            console.log(true === 1); // false
    }

    // ? 2. Perbandingan Tidak Setara (Mengembalikan true jika value tidak sama)
    function tidakSetara() {
        x = 10
        y = 5
        if (x != y) {
            console.log("Perbandingan tidak setara");
        }
    }

    // ? 3. Perbandingan Sangat setara (Mengembalikan true jika value sama dan memiliki tipe yang sama)
    function sangatSetara() {
        x = 10
        y = 10
        if (x === y) {
            console.log("Perbandingan sangat setara");
        }
    }

    // ? 4. Perbandingan Tidak sangat setara (Mengembalikan true jika value tidak sama, atau memiliki tipe yang berbeda)
    function tidakSangatSetara() {
        x = 10
        y = "10"
        if (x !== y) {
            console.log("Perbandingan tidak sangat setara");
        }
    }

    // ? 5. Perbandingan Lebih besar dari (Mengembalikan true jika value kiri lebih besar dari value kanan)
    function lebihBesarDari() {
        x = 15
        y = 10
        if (x > y) {
            console.log("Perbandingan lebih besar dari");
        }
    }

    // ? 6. Perbandingan Lebih besar dari atau sama (Mengembalikan true jika value kiri lebih besar atau sama dengan value kanan)
    function lebihBesarDariSama() {
        x = 10
        y = 10
        if (x >= y) {
            console.log("Perbandingan lebih besar dari atau sama");
        }
    }

    // ? 7. Perbandingan Lebih kecil dari (Mengembalikan true jika value kiri lebih kecil dari value kanan)
    function lebihKecilDari() {
        x = 5
        y = 10
        if (x < y) {
            console.log("Perbandingan lebih kecil dari");
        }
    }

    // ? 8. Perbandingan Lebih kecil dari atau sama (Mengembalikan true jika value kiri lebih kecil atau sama dengan value kanan)
    function lebihKecilDariSama() {
        x = 5
        y = 5
        if (x <= y) {
            console.log("Perbandingan lebih kecil dari atau sama");
        }
    }



    setara()
    tidakSetara()
    sangatSetara()
    tidakSangatSetara()
    lebihBesarDari()
    lebihBesarDariSama()
    lebihKecilDari()
    lebihKecilDariSama()