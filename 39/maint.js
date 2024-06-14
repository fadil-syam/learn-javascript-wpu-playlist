let siswa = ['fadil', undefined, 'syam'];

let tambahSiswa = function(namaSiswa, siswa) {

    //jika angkot kosong
      // tambah siswa di awal array
      // kembalikan isi array & keluar dari function
    
      // telusuri seluruh kursi dari awal
          // jika ada kursi kosong
              // tambah siswa di kursi tersebut |
              // kembalikan isi array & keluar dari function
              
          // jika sudah ada nama yang sama
              // tampilkan pesan kesalahannya
              // kembalikan isi arra & keluar dari function
          
          // jika seluruh kursi terisi
              // tambah siswa di akhir array
              // kembalikan isi array & keluar dari function   

    if (siswa.length == 0) {
      siswa.push(namaSiswa);
      return siswa;
    } 
    // else {
    //   for(let i = 0; i < siswa.length; i++) {
    //     if (siswa[i] == undefined) {
    //       siswa[i] = namaSiswa;
    //       return siswa;
    //     } else if (siswa[i] == namaSiswa) {
    //       console.log(`${namaSiswa} sudah ada di kelas`);
    //       return siswa;
    //     }
    //     else if (i == siswa.length -1) {
    //       siswa.push(namaSiswa);
    //       return siswa;
    //     }
    //   }
    // }

}

let hapusPenumpang = function(namaPenumpang, penumpang) {
  // jika angkot kosong
      // tampilkan pesan bahwa angkot kosong, dan
      // tidak mungkin ada penumpang turun
      // kembalikan isi array & keluar dari function
  // else
      // telusuri seluruh kursi dari awal 
          // jika nama penumpang sesuai 
              // hapus penumpang dengan mengubah namanya,
              // menjadi undefined
              // kembalikan isi array & keluar dari function
          // jika tidak ada nama yang sesuai 
              // tampilkan pesan kesalahannya
              // kembalikan isi array & keluar dari function
}