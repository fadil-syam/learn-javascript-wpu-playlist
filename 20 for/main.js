let noAngkot = 1;
let angkotBeroperasi = 9;
let jumlahAngkot = 10;

while(noAngkot <= angkotBeroperasi){
    console.log(`angko no ${noAngkot} sedang beroperasi`);
    noAngkot++;
} 

//              poin
for( noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++ ) {
    console.log(`angko no ${noAngkot} sedang rusak`);
}