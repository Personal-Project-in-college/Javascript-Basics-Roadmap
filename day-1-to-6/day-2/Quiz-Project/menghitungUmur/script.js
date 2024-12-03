
const nama = document.getElementById("nama");
const tahun = document.getElementById("tahun");
const bulan = document.getElementById("bulan");
const tanggal = document.getElementById("tanggal");

const kirim = document.getElementById("kirim");

function hitungUmur(tahunLahir, bulanLahir, tanggalLahir) {
    const sekarang = new Date(); // Tanggal sekarang
    const tahunSekarang = sekarang.getFullYear();
    const bulanSekarang = sekarang.getMonth() + 1; // Bulan dimulai dari 0
    const tanggalSekarang = sekarang.getDate();

    // Hitung umur awal
    let umurTahun = tahunSekarang - tahunLahir;
    let umurBulan = bulanSekarang - bulanLahir;
    let umurTanggal = tanggalSekarang - tanggalLahir;

    if (umurTahun < 0) {
        alert("Tahun Yang Dimasukkan Tidak Sesuai")
        return
    }
    
    // Penyesuaian jika bulan atau tanggal belum lewat
    if (umurBulan < 0) {
        umurTahun--;
        umurBulan += 12;
    }
    
    if (umurTanggal < 0) {
        umurBulan--;
        umurTanggal += new Date(tahunSekarang, bulanSekarang, 0).getDate(); // Hari di bulan sebelumnya
    }

    return {
        tahun: umurTahun,
        bulan: umurBulan,
        tanggal: umurTanggal,
    };
}

function tampilHasil() {
    // Ambil nilai input
    const namaPengguna = nama.value;
    const tahunLahir = parseInt(tahun.value);
    const bulanLahir = parseInt(bulan.value);
    const tanggalLahir = parseInt(tanggal.value);

    if (!namaPengguna || !tahunLahir || !bulanLahir || !tanggalLahir) {
        alert("Harap isi semua data dengan benar!");
        return;
    }

    // Hitung umur
    const umur = hitungUmur(tahunLahir, bulanLahir, tanggalLahir);

    // Buat elemen paragraf baru
    const para = document.createElement("p");
    para.textContent = `Halo ${namaPengguna}, umur Anda ${umur.tahun} tahun, ${umur.bulan} bulan, dan ${umur.tanggal} hari.`;
    document.body.appendChild(para);
}

kirim.addEventListener("click", tampilHasil);