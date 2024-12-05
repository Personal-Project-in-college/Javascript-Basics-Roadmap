
const BTNKIRIM = document.getElementById("kirim");
const FORMDATA1 = document.getElementById('dataNilai')

function cekData() {
    let data1 = Number(FORMDATA1.value)
    let message ;
    if (!data1) {
        alert("Masukan Bilangan !")
    }
    
    
    if (data1 % 2 === 0) {
        message = "Bilangan Yang di masukkan adalah genap"
    }
    else if (data1 % 2 === 1) {
        message = "Bilangan Yang di masukkan adalah ganjil"
    }
    
    return {
        message,
        data1,
    }
    
    
    
}

function tampilHasil() {
    const FINALHASIL = cekData()

    const para = document.createElement("p");
    para.textContent = `Bilangan yang di masukkan = ${FINALHASIL.data1} Jawabannya : ${FINALHASIL.message} `;
    document.body.appendChild(para);
}
    

BTNKIRIM.addEventListener('click', tampilHasil);
