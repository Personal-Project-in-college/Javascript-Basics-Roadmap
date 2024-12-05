// ! Aliran kontrol adalah fitur dalam bahasa pemrograman yang memungkinkan Anda menjalankan kode tertentu secara selektif berdasarkan berbagai kondisi


    // ? 1. Pernyataan if...else
        /*
            if (condition) {
                code to execute if condition is true
            }
        */
       // * Contoh 1 
        let balance = 4000
        if (balance > 5000) {
            console.log("You have the money for this trip. Let's go!");
        }
        

            // Todo : Pernyataan "else" digunakan untuk menjalankan kode hanya ketika pernyataan if tidak dipenuhi.
            // Todo : Pernyataan "else if" yang memungkinkan Anda menulis kondisi lain untuk diperiksa jika kondisi pernyataan if tidak terpenuhi

        else if (balance > 3000) {
            console.log("You only have enough money for a staycation");
        } 
        else {
            console.log("Sorry, not enough money. Save more!");
        }
        console.log("The end!");

    // ! Anda mungkin akan menggabungkan beberapa kondisi if menggunakan operator logika AND (&&) atau OR(||)
        // * Contoh
        let myFood = "Banana";
        if (myFood === "Banana" || myFood === "Apple") {
            console.log("Eat fruits everyday to keep you healthy.");
        }
        
        if (myFood === "Chocolate Cake") {
            console.log("Enjoy the sweet treat.");
        }
