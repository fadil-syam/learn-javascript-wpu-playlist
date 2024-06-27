const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
//  for
//  let newAngka = [];
//  for(let i = 0; i < angka.length; i++) {
//     if( angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka)

// filter
// pilih angka yang lebih besar dari 3
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });
const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);

// map
// kalikan semua angka dengan map
const newAngka2 = angka.map(a => a * 2);
console.log(newAngka2);

// reduce
// jumlahkan seluruh elemen pada array
// reduce harus mempunyai dua argumen
//                                 hasil    indexs loopnya                              nilai defauult 0 dan bisa diubah
const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(newAngka3)
// yang terjadi
// nilai defauult 0 dan bisa diubah
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9


// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a >= 5) // 8, 9, 9
    .map(a => a * 3)                    // 24, 27, 27
    .reduce((acc, cur) => acc + cur);   // 78
console.log(hasil);