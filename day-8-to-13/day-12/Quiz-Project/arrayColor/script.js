
// // Kasus 1
//     let mainColor = ['merah', 'hijau', 'biru']

//     // Menambahkan warna hitam ke akhir array
//     mainColor.push('hitam')
//     console.log("🚀 ~ mainColor:", mainColor)

// Kasus 2
    // let mainColor = ['merah', 'hijau', 'biru']

    // mainColor.shift(); // Hapus 'red'
    // mainColor.reverse(); // Tukar 'green' dan 'blue'
    // ! Ada Cara Lain : [mainColor[0], mainColor[1]] = [mainColor[1], mainColor[0]]
    // mainColor.push('hitam')
    // console.log("🚀 ~ mainColor:", mainColor)

// Kasus 3
    let mainColor = ['merah', 'hijau', 'biru']
    mainColor.shift(); // Hapus 'red'
    mainColor.reverse(); // Tukar 'green' dan 'blue'
    mainColor.unshift('yellow')
    mainColor.push('hitam')
    console.log("🚀 ~ mainColor:", mainColor)
