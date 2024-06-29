// ...

// spread operator
// MEMECAH iterables menjadi single element

// macam-macam iterable object :
// String
// Array
// argumenst / NodeList
// TypedArray
// Map
// Set
// user-defined iterables


const mhs = ['fadil', 'syam', 'ddil'];
const dosen = ['ali', 'sri', 'nanda'];

// menggabungkan dua array
const orang = [...mhs, ...dosen];
console.log(orang);

// mengcopy array
// const mhs1 = mhs;
// mhs1[0] = 'akbar'; // kode asli mhs kebawa berubah jadi tidak benar2 tidak mengcopy
const mhs1 = [...mhs];
mhs1[0] = 'akbar';
console.log(mhs)
console.log(mhs1)


const liMhs = document.querySelectorAll('li');
// console.log(liMhs[0].textContent);
// const mhs2 = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs2.push(liMhs[i].textContent);
// }
// cara lebih modern
const mhs2 = [...liMhs].map(m => m.textContent);
console.log(mhs2);



const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;
console.log(huruf);