// Constructor
function Mahasiswa (nama, umur, jurusan) {
    // ketika menggunakan contructor anggap saja kita menggunakan
    // let this = {}; dan
    this.nama = nama,
    this.umur = umur,
    this.jurusan = jurusan
    // return this
}
let mhsCtr = new Mahasiswa('udin', '29','fik')


// function declaration
function buatDataMhs (nama, umur, jurusan) {
    let dataMhs = {};
    dataMhs.nama = nama;
    dataMhs.umur = umur;
    dataMhs.jurusan = jurusan;
    return dataMhs;
}
let data2 = buatDataMhs('fadil', '18', 'ti');
let data3 = buatDataMhs('syam', '20', 'si');


// object literal
let mhs = {
    // properti
    nama : 'fadil',
    umur : 18,
    ips : [290, 300, 350],
    // method
    alamat : {
        jalan : 'kp.nangewer',
        kota : 'garut',
        provinsi : 'jawa barat'
    }
}

