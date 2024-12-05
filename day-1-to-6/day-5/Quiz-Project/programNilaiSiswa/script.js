const BTNKIRIM = document.getElementById("kirim");
const FORMDATA1 = document.getElementById('dataNilai')

function cekNilaiSiswa() {
    let dataNilai= FORMDATA1.value;
    let message;

    if (!dataNilai) {
        alert("Masukkan Nilai Siswa")
        
    }
    else {
        switch (dataNilai) {
            case dataNilai = "A" :
            case dataNilai = "a" :
                message = "Mendapat Cokelat";
                break;
            case dataNilai = "B" :
            case dataNilai = "b" :
                message = "Mendapat Cookie";
                break;
            case dataNilai = "C" :
            case dataNilai = "c" :
                message = "Mendapat Permen";
                break;
            default:
                message = "Tidak ada hadiah untuk diberikan"
                break;
        }
    
        return {
            message
        }
    }
    
}

function tampilHasil() {
    const FINALHASIL = cekNilaiSiswa()

    const para = document.createElement("p");
    para.textContent = `Hasilnya adalah ${FINALHASIL.message}`;
    document.body.appendChild(para);
}

BTNKIRIM.addEventListener("click", tampilHasil)