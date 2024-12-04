const DATASATU = document.getElementById("dataSatu");
const DATADUA = document.getElementById("dataDua");
const DATAOPERATOR = document.getElementById("dataOperator");
const KIRIM = document.getElementById("kirim");

function cekOperator() {
    const dataSatu = Number(DATASATU.value);
    const dataDua = Number(DATADUA.value);
    let hasil;

    if (DATAOPERATOR.value == "+") {
        hasil = dataSatu + dataDua;
    } else if (DATAOPERATOR.value == "-") {
        hasil = dataSatu - dataDua;
    } else if (DATAOPERATOR.value == "*") {
        hasil = dataSatu * dataDua;
    } else if (DATAOPERATOR.value == "**") {
        hasil = dataSatu ** dataDua;
    } else if (DATAOPERATOR.value == "/") {
        hasil = dataSatu / dataDua;
    } else if (DATAOPERATOR.value == "%") {
        hasil = dataSatu % dataDua;
    } else if (DATAOPERATOR.value == "==") {
        hasil = dataSatu == dataDua;
    } else if (DATAOPERATOR.value == "!=") {
        hasil = dataSatu != dataDua;
    } else if (DATAOPERATOR.value == "===") {
        hasil = dataSatu === dataDua;
    } else if (DATAOPERATOR.value == "!==") {
        hasil = dataSatu !== dataDua;
    } else if (DATAOPERATOR.value == ">") {
        hasil = dataSatu > dataDua;
    } else if (DATAOPERATOR.value == ">=") {
        hasil = dataSatu >= dataDua;
    } else if (DATAOPERATOR.value == "<") {
        hasil = dataSatu < dataDua;
    } else if (DATAOPERATOR.value == "<=") {
        hasil = dataSatu <= dataDua;
    } else {
        hasil = "Operator tidak valid!";
    }

    console.log("🚀 ~ hasil:", hasil);
    return hasil; // Kembalikan hasil
}

function tampilHasil() {
    const hasilAkhir = cekOperator(); // Panggil cekOperator untuk mendapatkan hasil

    // Tampilkan hasil ke halaman
    const para = document.createElement("p");
    para.textContent = `Hasilnya adalah: ${hasilAkhir}`;
    document.body.appendChild(para);
}

    // Tambahkan event listener ke tombol
KIRIM.addEventListener("click", tampilHasil);
