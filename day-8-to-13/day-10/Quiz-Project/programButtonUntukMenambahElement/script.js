
// Akses Element

const btnKlik = document.getElementById('btn-klik');
let ul = document.getElementById('main-list');

const prosesTambah = () => {
    // Buat elemen <li> baru
    const li = document.createElement('li');
    li.setAttribute('class', 'item-list');
    li.innerText = `Item ${ul.children.length + 1}`; // Dinamis berdasarkan jumlah item saat ini
    ul.appendChild(li); // Tambahkan ke dalam <ul>
};



btnKlik.addEventListener('click', prosesTambah);
