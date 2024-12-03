// Test 1
console.log(2 + 2); // Output 4

// Test 2
console.log(2 + "ABC"); // * Output 2ABC

// ? Menambahkan angka dan huruf bersama-sama akan menyebabkan JavaScript untuk menggabungkan atau menggabungkan nilai-nilai bersama-sama.

// TODO "String"
    // Contoh 1 (Standard)
    let message = "Hello, Sunshine!";
    console.log(message); // * Output Hello, Sunshine!

    // Contoh 2 (Operator In Inisialisation Value)
    let messageWithOperator = "Hello " + "and " + "Goodbye!";
    console.log(messageWithOperator); // * Output: Hello and Goodbye!

    // Contoh 3 (Operator In Parameters Console Log)
    let messageWithOperatorInConsole = "Hello, Dave!";
    console.log("The message is: " + messageWithOperatorInConsole); // * Output: The message is: Hello, Dave!

    // Contoh 4 (Variable + String)
    let name = "John";
    let topic = "JavaScript";

    console.log(name + " is learning " + topic + " today"); // * Output: John is learning JavaScript today
        // Isi Parameter console bisa juga di tuliskan menggunakan backtick
    console.log(`${name} is learning ${topic} today`);

    // Contoh 5
    let score = "10" + "30";
    console.log(score); // * Output: 1030
        /* 
        ? Ketika Anda menggabungkan dua nomor string dengan + simbol, 
        ? JavaScript akan bergabung dengan dua angka alih-alih melakukan penambahan aritmatika. 
        */