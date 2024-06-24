// cara unutuk membuat object oada javascript
// 4. object.create

// 2. function declaration
// PROBLEM : tetap sama dengan objk literal yaitu menduplikasi setiap object yang ada
// function Mahasiswa(nama, energi) {
//     let mhs = {};
//     mhs.nama = nama;
//     mhs.energi = energi;

//     mhs.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     mhs.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }

//     return mhs;
// }  

// yang lebih efektif mrthod object dibuat di luar
// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     },
//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     }
// }
// function Mahasiswa(nama, energi) {
//     let mhs = {};
//     mhs.nama = nama;
//     mhs.energi = energi;
//     mhs.makan = methodMahasiswa.makan;
//     mhs.main = methodMahasiswa.main;
//     return mhs;
// }
// let fadil = Mahasiswa('fadil', 20);
// let syam = Mahasiswa('syam', 10);

const methodMahasiswa = {
    makan : function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    },
    main : function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    },
    tidur : function (jam) {
        this.energi += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur`);
    }
};
function Mahasiswa(nama, energi) {
    let mhs = Object.create(methodMahasiswa);
    mhs.nama = nama;
    mhs.energi = energi;
    
    return mhs;
}
let fadil = Mahasiswa('fadil', 20);
let syam = Mahasiswa('syam', 10);

// 4. object.create

