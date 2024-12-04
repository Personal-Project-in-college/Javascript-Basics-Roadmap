// ! Operator berikutnya yang harus dipelajari adalah operator penugasan, yang diwakili oleh tanda sama dengan (=).

    // Assign the string value 'Hello' to the 'message' variable
    let message = "Hello";

    // Assign the Boolean value true to the 'on' variable
    let on = true;
        /// * Operator penugasan (=) tidak digunakan untuk membandingkan apakah suatu angka sama dengan angka lain dalam pemrograman.

    // TODO : Jika Anda ingin melakukan perbandingan semacam itu, maka Anda perlu menggunakan operator sama dengan (==).
    // ? Operator penugasan juga dapat digabungkan dengan operator "aritmatika", sehingga Anda dapat menambahkan atau mengurangi nilai dari "operan kiri".
    

    // 1.  Tugas
    function tugas() {
        let x = 9
        let y = 5
        console.log(x = y) // * Output 5 
    }

    // 2. Penugasan penambahan
    function penugasanPenambahan() {
        let x = 9
        let y = 5
        console.log(x += y); // * Output 14 (Karena : kode tersebut sama seperti ini (x = x + y) )
    }

    // 3. Penugasan pengurangan
    function penugasanPengurangan() {
        let x = 9
        let y = 5
        console.log(x -= y); // * Output 4 (Karena : kode tersebut sama seperti ini (x = x - y) )
    }
    
    // 4. Penugasan perkalian
    function penugasanPerkalian() {
        let x = 9
        let y = 5
        console.log(x *= y); // * Output 45 (Karena : kode tersebut sama seperti ini (x = x * y) )
    }

    // 5. Penugasan pembagian
    function penugasanPembagian() {
        let x = 9
        let y = 5
        console.log(x /= y); // * Output 45 (Karena : kode tersebut sama seperti ini (x = x / y) )
    }

    // 6. Penugasan modulus
    function penugasanModulus() {
        let x = 9
        let y = 5
        console.log(x %= y); // * Output 45 (Karena : kode tersebut sama seperti ini (x = x % y) )
    }
    
    tugas()
    penugasanPenambahan()
    penugasanPengurangan()
    penugasanPerkalian()
    penugasanPembagian()
    penugasanModulus()