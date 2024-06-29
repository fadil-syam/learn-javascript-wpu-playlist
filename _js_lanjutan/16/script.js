// 1 Destructuring function (return)

// Destructuring ketika valuenya array

function kalkulasi1(a, b) {
    // return [a + b, a - b, a * b, a / b];
    return [a + b, a - b, a * b];
}

// const jumlah = kalkulasi(2, 3)[0];
// const kali = kalkulasi(2, 3)[1];

// cara yang laen
// const [jumlah, kali] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);

// cara yang lebih moderen di bawah 
// kekurangannya adalah urutan harus lebih diperhatikan dan sesuai
const [tambah1, kurang1, kali1, bagi1 = 'tidak ada'] = kalkulasi1(2, 3);
console.log(bagi1)


// Destructuring ketika valuenya object
// kelebihan object urutan tidak berpengaruh
function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b,
    }
};

const {tambah, kurang, kali, bagi} = kalkulasi(2, 3);
console.log(kurang)




// 2 Destructuring function (argumen)
const mhs = {
    nama: 'al fadil',
    umur: 19,
    email: 'alfadil@gamil.com',
    nilai: {
        tugas: 80,
        uts: 95,
        uas: 67,
    }
}

// CARA tidak menggunakan Destructuring

// function cetakMhs(nama, umur) {
//     return `halo, saya ${nama}, dan saya berumur ${umur}`;
// }
// console.log(cetakMhs(mhs.nama, mhs.umur));

// cara tidak Destructuring dengan mengirimkan object
// function cetakMhs(mhs) {
//     return `halo, saya ${mhs.nama}, dan saya berumur ${mhs.umur}`;
// }
// console.log(cetakMhs(mhs));


// CARA menggunakan Destructuring

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas} }) {
    return `halo, saya ${nama}, dan saya berumur ${umur} tahun
    dan nilai uas saya ${uas}`;
}

console.log(cetakMhs(mhs));
