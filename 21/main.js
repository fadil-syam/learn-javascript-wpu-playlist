let angkotBeroperasi = 6;
let jumlahAngkot = 10;

for(let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    
    if(noAngkot <= angkotBeroperasi) {
        console.log(`angkot ${noAngkot} sedang beroperasi`);
    } else {
        console.log(`angkot ${noAngkot} sedang rusak`);
    }
} 

