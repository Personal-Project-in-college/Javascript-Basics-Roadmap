// * Scope Module
    // TODO Code  1. Global Scope
        let namaGlobal = "Farhan"; // Global
            function halo() {
                console.log(namaGlobal); // Bisa akses
            }
            halo(); // Output: Farhan
            console.log(namaGlobal); // Output: Farhan

    // TODO Code  2. Local Scope
        function haloLocal() {
            let namaLocal = "Ginting"; // Local
            console.log(namaLocal); // Output: Ginting
        }
        haloLocal();
        console.log(namaLocal); // ERROR! Karena 'nama' di sini lokal ke fungsi halo.

    // TODO Code  3. Block Scope
        if (true) {
            let pesan = "Hello"; // Block scope
            console.log(pesan); // Output: Hello
        }
        console.log(pesan); // ERROR! 'pesan' nggak bisa dipakai di luar blok.

    // ! Code 4. Var dan Scope
        if (true) {
            var umur = 20; // Global-like scope
        }
        console.log(umur); // Output: 20 (walaupun dideklarasi di dalam blok)