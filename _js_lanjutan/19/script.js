// rest parameter

function myFunc(...myArgs) {
    return myArgs[6];
}
console.log(myFunc(1, 2, 3, 4, 5, 6, 7));



function jumlahkan(...angka) {
    // let total = 0;
    // for (const a of arguments) {
    //     total += a;
    // }
    // return total;
    return angka.reduce((a, b) => a + b);
}
console.log(jumlahkan(1, 2, 3, 4, 5))


// array destructing
const kelompok1 = ['fadil', 'syam', 'ddil', 'sandi', 'andi', 'cobra'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);


// object destructing
const team = {
    pm: 'fadil', 
    frondEnd: 'syam', 
    backEnd: 'ddil', 
    ux: 'sandi', 
    devOps: 'andi', 
};
const {pm, ...myTeam}  = team;
console.log(myTeam);


// filter
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('boolean', 1, 2, 'fadil', false, 10, true, 'syam'));