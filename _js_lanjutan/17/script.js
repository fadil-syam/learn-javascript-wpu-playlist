// for..of
// for..in


// 1 melooping array
const mhs = ['fadil', 'syam', 'ddil'];

// loop
// for( let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// forEach adalah for pada array
mhs.forEach(m => console.log(m));

// for..of tugas mwlooping array
for(const m of mhs) {
    console.log(m);
}


// 2 melooping string
// for..in tugas mwlooping string
const nama = 'alfadil';
for (let n of nama) {
    console.log(n);
}



mhs.forEach((m, i) => {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
});
for (const [i, m] of mhs.entries()) {
    console.log(`${m} adlah mahasiswa ke ${i}`)
}


// nodelist
const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));

// for (n of liNama) {
//     console.log(n.innerHTML);
// }


// arguments
function jumlahkanAngka() {
    // return arguments.reduce((a, i) => a + i);        // tidak jalan
    // arguments.forEach(element => jumlah += element );   // tidak jalan
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// for in
const stdn = {
    nama: 'fadil',
    umur: 19,
    email: 'fadil@gmail.com'
}
for (s in stdn) {
    console.log(s)
    // console.log(stdn[s])
}



// kesimpulan 
// jika mau looping properti dari object gunakan for in
// jika mau mengulang isi array dan iterables object lain gunakan for of