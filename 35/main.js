///1. lenght
let arr = ['fadil', 'syam', 'ddil', 'uhuy'];
for (let i = 0; i < arr.length; i++) {
    console.log(`Mahasiswa ke-${i+1} : ${arr[i]}`);
}

// 2 join 
let arra = ['fadil', 'syam', 'ddil', 'uhuy'];
// console.log(arra.join(' - '));

//push & pop = mengerjakan elemen terakhir
arra.push('doddy');     //menambah
arra.pop();             //menghapus

//unshift & shift = mengerjakan elemen terakhir
arra.unshift('ddil');   //memindahkan jadi paling pertama
arra.shift();           //menghapus nilai paling pertama

console.log(arra.join());