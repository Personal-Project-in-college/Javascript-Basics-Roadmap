// Fungsi: membuat paragraf baru dan menambahkannya ke bagian bawah badan HTML.

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

    /*
    1. Mendapatkan referensi ke semua tombol pada halaman dalam format larik.
    2. Ulangi semua tombol dan tambahkan pendengar peristiwa klik ke setiap tombol.

    Ketika ada tombol yang ditekan, fungsi createParagraph() akan dijalankan.
    */

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}
