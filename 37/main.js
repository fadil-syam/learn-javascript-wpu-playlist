//forEach tidak mengembalikan array
let angka = [1,2,3,4,5,6,7,8,9];
angka.forEach(function(e) {
    // console.log(e);
})

let nama = ['fadil', 'syam', 'ddil'];
nama.forEach(function(e, a) {
    console.log(`nama ke-${a+1} adalah ${e}`)
})

console.log('');

//map mengembalikan array
let angka2 = [1,2,3,4,5,4];
let angkaMap = angka2.map(function(e) {
    return e * 2;
});
console.log(angkaMap.join(' - '));

console.log('');

//sort mengurut rapih
let angkaAcak = [9,6,8,4,5,3,2,7,1,20,10] //angka 
angkaAcak.sort();
console.log(angkaAcak.join(' - '));

console.log('');

//sort mengurut rapih dengan paling bener
let angkaAcak2 = [9,6,8,4,5,3,2,7,1,20,10] //angka 
angkaAcak2.sort(function(a,b) {
    return a-b;
});
console.log(angkaAcak2.join(' - '));