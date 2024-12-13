
let transportasi = ['sepeda', 'motor', 'mobil', 'bus', 'perahu', 'pesawat']

for (let i = 0; i < transportasi.length; i++) {
    const element = transportasi[i];
    console.log("🚀 ~ element:", element)
    
}

transportasi.forEach((element, index) => {
    console.log(`Indeks: ${index}, Elemen: ${element}`);
});
