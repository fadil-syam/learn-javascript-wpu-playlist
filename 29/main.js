 function tambah() {

    let hasil = 0;
    for(let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];   
    }

    return hasil;
 }


// function tambah(a, b) {
//     return a + b;
// }
// a = parseInt(prompt('masukan angka 1'));
// b = parseInt(prompt('masukan angka 2'));

let coba = tambah(9, 10, 10);

console.log(coba);


// alert(hasil);