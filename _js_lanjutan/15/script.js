// Destructuring Assignment


// Destructuring array
// const perkenalan = ['halo', 'nama', 'saya', 'alfadil'];
// teknik biasa
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);

// // teknik Destructuring
// const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan;   // skipping items
// console.log(nama);


// // swip items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// // return value pada functions
// function coba() {
//     return [1, 2];
// };
// const [a, b] = coba();
// console.log(a);


// // rest parameter
// const [a, ...values] = [1, 2, 3, 4];
// console.log(a);
// console.log(values);


// Destructuring object
// const mhs = {
//     nama: 'fadil',
//     umur: 10,
// }
// const { nama, umur } = mhs;
// console.log(nama)


// assignment tanpa deklarasi object
// ({ nama, umur } = { nama: 'fadil', umur: 10 });
// console.log(nama);


// // assignment ke variable baru
// const mhs = {
//     nama: 'fadil',
//     umur: 10,
// }
// const { nama: n, umur: u } = mhs;
// console.log(u)


// // memberikan default value
// const mhs = {
//     nama: 'fadil',
//     umur: 10,
//     email: 'syam@gmail.com'
// }
// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(email)


// // memberikan default value + assignment ke variable baru
// const mhs = {
//     nama: 'fadil',
//     umur: 10,
//     email: 'syam@gmail.com'
// }
// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e)


// // rest parameter
// const mhs = {
//     nama: 'fadil',
//     umur: 10,
//     email: 'syam@gmail.com'
// }
// const { nama, ...values} = mhs;
// console.log(nama)
// console.log(values)


// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'fadil',
    umur: 10,
    email: 'syam@gmail.com'
}
function getIdMhs({id, nama}) {
    return nama;
}
console.log(getIdMhs(mhs));