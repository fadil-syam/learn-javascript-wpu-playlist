// object prototype

// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     },
//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat bermain`);
//     },
//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`halo ${this.nama}, selamat tidur`);
//     }
// };
// function Mahasiswa(nama, energi) {
//     let mhs = Object.create(methodMahasiswa);
//     mhs.nama = nama;
//     mhs.energi = energi;
    
//     return mhs;
// }
// let fadil = Mahasiswa('fadil', 20);
// let syam = Mahasiswa('syam', 10);

// 1 versi object dengan protitype inheritence

function Mahasiswa(nama, energi) {
    // ketika kita mengunakan this maka yang terjadi komputer -
    // akan membuatkan variable dan return secara otomatis
    // contoh yang terjadi,  
    // let this = Object.create(Mahasiswa.prototype);

    this.nama = nama;
    this.energi = energi;
    
    // return this;
}

// object prototype yang dikelola object nya hanya satu kita melanjutkannya

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `halo ${this.nama}, selamat makan`;
}
Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `halo ${this.nama}, selamat main`;
}
Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return `halo ${this.nama}, selamat tidur`;
}

let fadil = new Mahasiswa('fadil', 10)


// 2 versi class 

class Siswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    minum (liter) {
        this.energi += liter;
        return `halo ${this.nama}, selamat minum`;
    }
    game (jam) {
        this.energi -= jam;
        return `halo ${this.nama}, selamat main game`;
    }
    shalat (jam) {
        this.energi += jam * 2;
        return `halo ${this.nama}, selamat beribadah`;
    }
}
let syam = new Siswa('syam', 10);