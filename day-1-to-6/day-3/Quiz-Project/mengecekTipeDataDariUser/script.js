const BTNKIRIM = document.getElementById("kirim");
const DATAINPUT = document.getElementById("dataNilai");

function cekTipeData() {
    const inputValue = DATAINPUT.value.trim(); // Menghapus spasi kosong
    let parsedValue;
    let tipeData;

    // Cek apakah input kosong (undefined/null)
    if (!inputValue) {
        parsedValue = undefined;
        tipeData = "undefined";
    } else if (inputValue.toLowerCase() === "true" || inputValue.toLowerCase() === "false") {
        // Cek apakah boolean
        parsedValue = inputValue.toLowerCase() === "true";
        tipeData = "boolean";
    } else if (!isNaN(inputValue)) {
        // Cek apakah angka (number atau float)
        parsedValue = Number(inputValue);
        if (Number.isInteger(parsedValue)) {
            console.log(parsedValue % 2 === 0 ? "genap" : "ganjil"); // Ganjil atau genap
            tipeData = "number (integer)";
        } else {
            tipeData = "number (float)";
        }
    } else {
        // Jika tipe lain (anggap string)
        parsedValue = inputValue;
        tipeData = "string";
    }

    console.log(`Nilai: ${parsedValue}, Tipe Data: ${tipeData}`);

    const para = document.createElement("p");
    para.textContent = `Nilai: ${parsedValue}, Tipe Datanya Adalah ${tipeData}`;
    document.body.appendChild(para);
}

BTNKIRIM.addEventListener("click", cekTipeData);
