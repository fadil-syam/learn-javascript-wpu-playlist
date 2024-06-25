// 3 Arrow Function (Fungsi Panah)
const namaFungsi1 = (parameter1, parameter2) => {
    // kode yang akan dijalankan
    return hasil;
};
// Jika fungsi hanya memiliki satu baris kode, 
// kita dapat menghilangkan kurung kurawal {} dan return:
const namaFungsi = (parameter1, parameter2) => hasil;

// Contoh:
const kurang = (a, b) => a - b;

console.log(kurang(5, 3)); // Output: 2



let mahasiswa = ['fadil syam', 'ddil syam', 'sri'];

// array
let jumlahHuruf = mahasiswa.map (nama => nama.length);
// abject
let jumlahHurufObject = mahasiswa.map (nama => ({nama: nama, jmlhHuruf: nama.length}));

console.log(jumlahHuruf);
console.log(jumlahHurufObject);
// lebih rapih
console.table(jumlahHurufObject);