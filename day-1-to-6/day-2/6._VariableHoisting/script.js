// * Variable Hoisting
    // TODO 1. Contoh Kasus
        console.log(namaSaya); // Undefined
        var namaSaya = "Farhan";
        console.log(namaSaya); // Farhan
    
        /*
TODO        Penjelasannya
            var namaSaya; // Dideklarasikan di atas (hoisted)
            console.log(namaSaya); // Undefined karena belum diisi nilai
            namaSaya = "Farhan"; // Baru diisi nilainya
            console.log(namaSaya); // Farhan
        */