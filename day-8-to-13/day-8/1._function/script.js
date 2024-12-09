// ! Membuat fungsi dimulai dengan mengetikkan kata kunci function diikuti dengan nama fungsi, sepasang tanda kurung bulat, dan kemudian sepasang tanda kurung keriting.

    // ? Contoh Penulisannya
    function greet() {
        // function body here
        console.log("Hello!");
    }

    greet(); // * Output Hello

    // TODO : Fungsi dengan Parameter
    // * Contoh berikut menunjukkan fungsi yang memiliki satu parameter bernama name:
    function sayHello(name, weather) {
        console.log(`Hello ${name}`);
        console.log(`Nice ${weather} today !`);
    }
    
    sayHello("Farhan", "Sunny"); 

    // TODO : Fungsi dengan Parameter default
    // * Contoh berikut menunjukkan fungsi yang memiliki satu parameter bernama name dengan default:
    function sayHelloWithParam(name = "Nathan") {
        console.log(`Hello, ${name}!`);
        console.log("Nice weather today, right?");
    }

    sayHelloWithParam();
    sayHelloWithParam("Jack");

    function weatherNoDefault(weather, name = "Nathan") {
        console.log(`Hello, ${name}!`);
        console.log(`It's ${weather} today, right?`);
    }
    
    weatherNoDefault("sunny");

        // ! Jika Anda menempatkan parameter non-default setelah parameter default, maka Anda perlu meneruskan nilai ke parameter name untuk mendapatkan parameter weather

        function greetWithUndefined(name = "Nathan", weather) {
            console.log(`Hello, ${name}!`);
            console.log(`It's ${weather} today, right?`);
        }          
        greetWithUndefined(undefined, "sunny");
            // ! Untuk meneruskan argumen ke parameter weather, kita perlu meneruskan undefined atau nilai apa pun untuk parameter name terlebih dahulu.
            // * Inilah sebabnya mengapa lebih baik menentukan parameter non-default di depan parameter default.


    // TODO : Parameter Default dan Null
    // * Perbedaan antara undefined sebagai nilai kosong "default" dan null sebagai nilai kosong "yang disengaja".
    // * Saat Anda meneruskan undefined ke fungsi yang memiliki parameter default, parameter default akan digunakan:
        function greetUndefined(name = "John"){
            console.log(name);
        }      
        greetUndefined(undefined); // John
    
        // ! Namun saat Anda meneruskan null ke fungsi tersebut, parameter default akan diabaikan:

        function greetNull(name = "John"){
            console.log(name);
        }
        greetNull(null); // null
    
    // TODO : Fungsi dengan return
    // ! Pernyataan return digunakan untuk mengembalikan nilai ke pemanggil.
    function sum(a, b) {
        return a + b;
    }
    
    let result = sum(3, 2);
      console.log(result); // 5
      // * Nilai yang dikembalikan oleh suatu fungsi dapat ditugaskan ke variabel untuk operasi lebih lanjut. Anda dapat menambahkan pernyataan return di mana saja di dalam fungsi.


        // * Contoh 2
        function checkAge(age) {
            if (age > 18) {
                return "You may get a car license";
            }
            return "You may not get a car license yet";
        }
        
        console.log(checkAge(20));
        console.log(checkAge(15));
        // ! Saat JavaScript mencapai pernyataan return, JavaScript akan melewatkan kode lebih lanjut yang ditulis di dalam blok fungsi

        function greetrReturn() {
            console.log("Hello!");
            return;
            console.log("Good bye!");
        }
        // * juga dapat menghentikan eksekusi fungsi dan kembali ke pemanggil dengan menentukan pernyataan return tanpa nilai apa pun:
        greetrReturn()

    // TODO : Variabel yang dideklarasikan di dalam suatu fungsi hanya dapat diakses dari fungsi tersebut. Hal ini karena variabel tersebut memiliki cakupan lokal.
    // TODO : Di sisi lain, variabel yang dideklarasikan di luar blok mana pun dikenal sebagai variabel global karena cakupannya yang global.

    // * Contoh Fungsi dengan return variabel
    let myString = "Hello World!";

    function greetVariableReturn() {
        console.log(myString);
    }

    greetVariableReturn(); // Hello World!

    let myStringChange = "Hello World!";
    function greetChangeValueVariable() {
        let myStringChange = "Morning!";
        console.log(myStringChange);
    }

    greetChangeValueVariable();  // Morning!
    console.log(myStringChange); // Hello World!
        // ! Selanjutnya, Anda juga dapat mendefinisikan variabel lokal dengan nama yang sama dengan variabel global tanpa menimpanya.

    // ! The rest parameter
    // * Parameter sisanya adalah parameter yang dapat menerima sejumlah data sebagai argumennya. Argumen akan disimpan sebagai array.
    function printArguments(...args){
        console.log(args);
    }
    printArguments("A", "B", "C"); 
    // [ 'A', 'B', 'C' ]
    printArguments(1, 2, 3, 4, 5);
    // [ 1, 2, 3, 4, 5 ]

        // * Contoh 1
        function contohParameterBiasaDenganParameterSisa(a, b, ...args) {
            console.log(a);    // Argumen pertama
            console.log(b);    // Argumen kedua
            console.log(args); // Sisanya jadi array
        }
        
        contohParameterBiasaDenganParameterSisa(1, 2, 3, 4, 5);
        // Output:
        // 1
        // 2
        // [3, 4, 5]
        

    // ! Arrow function
    // ! Sintaks fungsi panah JavaScript memungkinkan Anda menulis fungsi JavaScript dengan sintaksis yang lebih pendek dan ringkas.
    // * Standar Penulisan Function Yang Kita Ketahui
    function greetings(name) {
        console.log(`Hello, ${name}!`);
    }
    
    greetings("John"); // Hello, John!

    // * Sekarang Menggunakan Arrow Function
    const greetings2 = (name) => {
        console.log(`Hello, ${name}!`);
    };
    
    greetings2("John"); // Hello, John!
    // ! Saat Anda membuat fungsi menggunakan sintaks fungsi panah, Anda perlu menetapkan ekspresi ke variabel agar fungsi tersebut memiliki nama.
    // ! Pada dasarnya, sintaks fungsi panah terlihat sebagai berikut:
    const fun = (param1, param2, ...args) => {
        // function body
    }
        /*
        ? Penjelasan
        * fun adalah variabel yang menyimpan fungsi tersebut. Anda dapat memanggil fungsi tersebut sebagai fun() nanti di kode Anda.
        * (param1, param2, ...) adalah parameter fungsi. Anda dapat menentukan parameter sebanyak yang diperlukan oleh fungsi tersebut.
        * Kemudian Anda memiliki panah => untuk menunjukkan awal fungsi.
        */
    
        // ! Single arrow functions
        // * Fungsi panah memberi Anda cara untuk menulis fungsi garis tunggal dengan sisi kiri panah => dikembalikan ke sisi kanan.
        // * Contoh Default Penulisan Function
        function plusTwo(numberDefaults) {
            
            return numberDefaults + 2;
        }

        // * Dengan Arrow Function
        const plusTwoArrow = (numberArrow) => numberArrow + 2;
        // * Tanpa tanda kurung kurawal, JavaScript akan mengevaluasi ekspresi di sisi kanan sintaks panah dan mengembalikannya ke pemanggil.

        plusTwo(5)
        console.log(plusTwoArrow(7));
        
        // * Contoh lain
        // * Sintaks fungsi panah juga berfungsi untuk fungsi yang tidak return nilai seperti yang ditunjukkan di bawah ini
        const greetingsNoReturn = () => console.log("Hello World!");
    
        // ! Multiline Arrow Functions
        // * Saat menggunakan sintaks fungsi panah, tanda kurung kurawal diperlukan hanya jika Anda memiliki isi fungsi multibaris:
        const greetingsMulti = () => {
            console.log("Hello World!");
            console.log("How are you?");
        };

        // ! Fungsi panah tanpa tanda kurung bulat
        // * Saat Anda menggunakan kata kunci function, tanda kurung bulat selalu diperlukan:
        function plusThreeDefault(num) {
            return num + 3;
        }

        // * Namun
        // TODO : Di sisi lain, fungsi panah memungkinkan Anda menghilangkan tanda kurung bulat ketika Anda memiliki tepat satu parameter untuk fungsi tersebut:
        const plusThree = num => num + 3;
        // * Namun Anda tetap memerlukan tanda kurung bulat untuk dua kondisi:
        // * 1 Ketika fungsi tidak memiliki parameter
        const greetingsNoParam = () => console.log("Hello World!");

        // * 2 Ketika suatu fungsi mempunyai lebih dari satu parameter
        const greetingsWithParam = (name, age) => console.log("Hello World!");


        // ! Fungsi panah tidak memiliki argumen yang mengikat
        // * Saat menggunakan kata kunci function untuk mendefinisikan suatu fungsi, Anda dapat mengakses argumen yang Anda teruskan ke fungsi tersebut menggunakan kata kunci arguments seperti ini:
        const printArgs = function () {
            console.log(arguments);
        };
        
        printArgs(1, 2, 3);
          // [Arguments] { '0': 1, '1': 2, '2': 3 }
          //  * Kata kunci arguments pada kode di atas mengacu pada objek yang menyimpan semua argumen yang Anda masukkan ke dalam fungsi.

        // * Sebaliknya, fungsi panah tidak memiliki objek arguments dan akan menimbulkan kesalahan saat Anda mencoba mengaksesnya:
        const printArgsArrow = () => console.log(arguments);

        printArgsArrow(1, 2, 3);
        //Uncaught ReferenceError: arguments is not defined

        // TODO : Maka Anda dapat menggunakan sintaksis penyebaran JavaScript untuk meniru pengikatan arguments sebagai berikut:
        const printArgsArrowTrue = (...arguments) => console.log(arguments);
        // * Perhatikan bahwa Anda memerlukan tanda kurung bulat meskipun Anda hanya meneruskan satu argumen ke fungsi tersebut.
        printArgsArrowTrue(1, 2, 3);
        // [1, 2, 3]
        
// ! Cara mengubah fungsi normal menjadi fungsi panah dengan mudah
// * 1. Ganti kata kunci function dengan kata kunci variabel let atau const
// * 2. Tambahkan simbol = setelah nama fungsi dan sebelum tanda kurung bulat
// * 3. Tambahkan simbol => setelah tanda kurung bulat
    
    /*
    function plusTwo(num) {
        return num + 2;
    }

    step 1: replace function with let / const
    const plusTwo(num) {
        return num + 2;
    }

    step 2: add = after the function name
    const plusTwo = (num) {
        return num + 2;
    }

    step 3: add => after the round brackets
    const plusTwo = (num) => {
        return num + 2;
    }
    
    step 4. if single line function
    const plusTwo = num => num + 2;

    step 5. if parameter just one, can remove the round brackets
    const plusTwo = num => num + 2;
    */
