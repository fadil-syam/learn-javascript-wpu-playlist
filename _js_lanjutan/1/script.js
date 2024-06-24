// cara unutuk membuat object oada javascript
// 1. object literal
// 2. function declaration
// 3. construktor function
// 4. object.create


// 1. object literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'fadil',
//     energi: 10,
//     //method    //properties
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`hallo ${this.nama}, selamat makan`)
//     }
// }


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
// let fadil = Mahasiswa('fadil', 20);
// let syam = Mahasiswa('syam', 10);


// 3. construktor function
function Siswa(nama, energi) {
   
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }

}
let ddil = new Siswa('fadilsan', 20);


// 4. object.create
// eps selanjutnya