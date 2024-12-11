// TODO: Styling elements

// Mengubah warna teks dari elemen dengan id 'main-heading'
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);

// Mengubah ukuran font untuk semua elemen dengan class 'list-items'
// const listItem = document.querySelectorAll('.list-items');
// for (let i = 0; i < listItem.length; i++) {
//     listItem[i].style.fontSize = '2rem';
// }
// console.log(listItem);

// TODO: Creating elements

// Membuat elemen baru <li>
const ul = document.querySelector('ul');
const li = document.createElement('li');

// TODO: Adding elements

// Menambahkan elemen <li> baru ke dalam elemen <ul>
ul.append(li);

// TODO: To get value text from element

// Mengambil teks dari elemen pertama dengan class 'list-items'
// const firstItemList = document.querySelector('.list-items');
// console.log(firstItemList.innerText); // Mendapatkan teks tanpa format atau elemen tersembunyi
// console.log(firstItemList.textContent); // Mendapatkan teks termasuk elemen tersembunyi
// console.log(firstItemList.innerHTML); // Mendapatkan teks dan markup HTML di dalam elemen

// TODO: Modifying element

// Menambahkan teks "X-Men" ke dalam elemen <li> baru
li.innerText = 'X-Men';

// TODO: Modifying Attributes & Classes

// Mengubah atribut id dan class elemen <li>
// li.setAttribute('id', 'main-heading'); // Menambahkan atau mengubah atribut id
// li.setAttribute('class', 'list-items'); // Menambahkan atau mengubah atribut class

// Menghapus atribut id dari elemen <li>
// li.removeAttribute('id');

// Mengambil nilai atribut id dari elemen dengan id 'main-heading'
// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

// Menambahkan atau menghapus class dari elemen <li>
li.classList.add('list-items'); // Menambahkan class 'list-items'
li.classList.remove('list-items'); // Menghapus class 'list-items'
console.log(li.classList.contains('list-items')); // Mengecek apakah class 'list-items' ada

// TODO: Remove Elements

// Menghapus elemen <li> dari DOM
li.remove();
