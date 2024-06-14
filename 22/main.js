let jumlahAngkot = 10;
let angkotBeropasi = 6;
let angkotLembur = 8;

for(let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeropasi) {
        console.log(`angkot ${noAngkot} sedang beroperasi`);
    } else if (noAngkot === angkotLembur) {
        console.log(`angkot ${noAngkot} sedang lembur`);
    } else {
        console.log(`angkot ${noAngkot} sedang rusak`);
    }
}

