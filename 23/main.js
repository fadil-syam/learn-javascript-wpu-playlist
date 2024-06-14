let jumlahAngkot = 10;
let angkotBeropasi = 6;
// let angkotLembur = 8;

for(let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeropasi && noAngkot !== 5 ) {
        console.log(`angkot ${noAngkot} sedang beroperasi`);
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log(`angkot ${noAngkot} sedang lembur`);
    } else {
        console.log(`angkot ${noAngkot} sedang rusak`);
    }
}

