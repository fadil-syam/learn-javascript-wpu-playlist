// execution context, hoisting & scope 

// creation phase pada global content 
// nama var = undefined
// nama function = fn() 
// hoisting
// window = global Object
// this = window

// execution phase

function satu() {
    let nama = 'fadil';
    console.log(nama);
}

function dua() {
    console.log(dua);
}

console.log(nama);
let nama = 'syam';
satu();
dua('ddil');
console.log(nama);