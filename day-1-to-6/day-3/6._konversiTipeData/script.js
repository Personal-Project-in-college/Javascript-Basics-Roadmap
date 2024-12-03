// ! Memahami Bagaimana Mengkonversi Suatu Tipe Data Di Javascript 

    // ? Kasus 1 ( String dengan Number )
    let x = "7";
    let y = 5;
    console.log(x + y); // * Outputnya 75
        // Jika Anda memiliki salah satu angka sebagai string, JavaScript menggabungkannya bersama-sama alih-alih menambahkan

    // ? 3 Fungsi yang biasa digunakan untuk konversi tipe data. Mengonversi nilai apa pun yang Anda tentukan di dalam tanda kurung ke jenis dengan nama yang sama.
    
    // TODO 1. Number()
    let a = "7";
    let b = 5;
    a = Number(a); // * Convert x to integer
    console.log(a + b); // * Output 12


    // TODO 2. String()
    let kondisiSatu = true;
    let kondisiDua = true;
    kondisiSatu = String(kondisiSatu)
    console.log(typeof kondisiSatu); // * Output string
    console.log(typeof kondisiDua); // * Output boolean
    
    // TODO 3. Boolean()
    let i = 1
    i = Boolean(i)
    console.log(i) // * Output true
    

// ! Type coercion (JavaScript "maksa" atau "mengubah" tipe data satu jadi tipe data lain, biar operasi atau ekspresi bisa jalan.)
    // ? Ada 2 jenis Type Coercion:
        // * 1. Implicit Coercion (otomatis): ❌ Not Recommended 
            //  JavaScript yang ngubah tipe datanya sendiri, tanpa kamu suruh.
            console.log(5 + "5"); // * Output "55" 
                // ! Karena ada angka 5 + string "5", JavaScript maksa angka 5 jadi string "5". Akhirnya dia menggabungkan dua string jadi "55". Dan itulah jenis pemaksaan
    
        // * 2. Explicit Coercion (manual): ✅ Recommended
            //  Kamu yang ngubah tipe data dengan sengaja (pakai fungsi kayak Number(), String(), dll).
            console.log(Number("123")); // Hasil: 123 (string "123" jadi angka)
            console.log(String(456));   // Hasil: "456" (angka 456 jadi string)
            console.log(Boolean(0));    // Hasil: false (angka 0 jadi boolean)

            console.log({ a: 1 } + "1");
            console.log("1" + { a: 1 });
            console.log(true + { a: 1 });
            console.log({ a: 1 } + 1);
    
    // ! Pengetahuan ini penting karena Type Coercion di JavaScript sering bikin hasil yang nggak terduga. Untuk menghindarinya, biasakan eksplisit dalam menulis kode:
        //  * 1. Gunakan String(), Number(), atau Boolean() untuk mengubah tipe data secara manual.
        //  * 2. Gunakan strict equality (===) biar nggak ada coercion otomatis