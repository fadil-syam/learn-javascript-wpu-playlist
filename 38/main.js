// find hanya menampilkan 1 nilai
// filter untuk mencari banyak nilai

let angka = [1,2,10,5,20,3,6,8,4];

// find tolong carikan saya angka yang lebih besar dari 5 tapi cuma 1 nilai
let angka1 = angka.find(function(x) {
    return x > 5;
});
console.log(angka1);

// filter tolong carikan saya SEMUA angka yang lebih besar dari 7
let angka2 = angka.filter(function(x) {
    return x > 7;
});
console.log(angka2.join(' - '));