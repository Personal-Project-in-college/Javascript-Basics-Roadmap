// ! Pernyataan loop adalah kategori lain dari pernyataan aliran kontrol yang digunakan untuk mengeksekusi blok kode beberapa kali hingga kondisi tertentu terpenuhi    

    // * 1. Pernyataan For
    for (let x = 0; x < 10; x++) {
        console.log("🚀 ~ x:", x)
    }
        /*  
        ? Penjelasan For
            1. Ekspresi initialization, tempat Anda mendeklarasikan variabel untuk digunakan sebagai sumber kondisi loop. Direpresentasikan sebagai x = 1 dalam contoh
            2. Ekspresi condition, dimana variabel dalam inisialisasi akan dievaluasi untuk kondisi tertentu. Direpresentasikan sebagai x < 10
            3. Ekspresi arithmetic, yang nilai variabelnya bertambah atau berkurang pada akhir setiap loop.
            !  dipisahkan dengan titik koma (;)

                for ( [initialization]; [condition]; [arithmetic expression]) {
                    As long as condition returns true,
                    This block will be executed repeatedly
                }
            
            4. Ekspresi aritmatika dapat berupa ekspresi kenaikan (++) atau penurunan (--).
        */

        // * Contoh 1
            for (let y = 1; y < 20; y += 3) {
                console.log(y);
            }

        // * Contoh Program Koin
        let heads = 0
        let tails = 0

        for (i = 1 ; i <= 10 ; i++){
            if (Math.random() < 0.5){
                tails++;
            }
            else {
                heads++;
            }
            
        }

        console.log("Tossed the coin ten times");
        console.log(`Number of heads: ${heads}`);
        console.log(`Number of tails: ${tails}`);
