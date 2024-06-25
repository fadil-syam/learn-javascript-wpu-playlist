// function init() {
//     // let nama = 'fadil';
//     return function (nama) {
//          console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('syam');
// panggilNama('fadil')

// victori function
// function ucapSalam(waktu) {
//     return function (nama) {
//         console.log(`halo ${nama}, selamat ${waktu}, semoga harimu indah`);
//     }
// }

// let selamatPagi = ucapSalam('Pagi');
// let selamatSiang = ucapSalam('Siang');
// let selamatMalam = ucapSalam('Malam');

// console.dir(selamatMalam('fadil'));


// problem
// let counter = 0;
// let add = function () {
//     return ++counter;
// }
// // jika ada gangguan code seperti di bawah ini maka counter, mulsi di 100 bukan lagi di 0
// counter = 100;

// console.log(add());
// console.log(add());
// console.log(add());

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
 
