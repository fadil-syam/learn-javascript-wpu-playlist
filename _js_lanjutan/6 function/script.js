// 1 Function Declaration (Deklarasi Fungsi)
function namaFungsi(parameter1, parameter2) {
    // kode yang akan dijalankan
    return hasil;
}
// Contoh:
function tambah(a, b) {
    return a + b;
}

console.log(tambah(2, 3)); // Output: 5



// 2 Function Expression (Ekspresi Fungsi)
const namaFungsi = function(parameter1, parameter2) {
    // kode yang akan dijalankan
    return hasil;
};
// Contoh:
const kali = function(a, b) {
    return a * b;
};

console.log(kali(2, 3)); // Output: 6



// 3 Arrow Function (Fungsi Panah)
const namaFungsi = (parameter1, parameter2) => {
    // kode yang akan dijalankan
    return hasil;
};
// Jika fungsi hanya memiliki satu baris kode, 
// kita dapat menghilangkan kurung kurawal {} dan return:
const namaFungsi = (parameter1, parameter2) => hasil;

// Contoh:
const kurang = (a, b) => a - b;

console.log(kurang(5, 3)); // Output: 2



// 4 IIFE (Immediately Invoked Function Expression)

// IIFE adalah fungsi yang dijalankan segera setelah didefinisikan.
(function() {
    // kode yang akan dijalankan
})();
// Contoh:
(function() {
    console.log("Fungsi ini dijalankan segera!");
})();



// 5 Method Function (Fungsi sebagai Metode Objek)

// Fungsi dapat menjadi metode dari sebuah objek.
const obj1 = {
    namaFungsi: function(parameter1, parameter2) {
        // kode yang akan dijalankan
        return hasil;
    }
};
// Atau menggunakan sintaks ES6:
const obj = {
    namaFungsi(parameter1, parameter2) {
        // kode yang akan dijalankan
        return hasil;
    }
};
// Contoh:
const kalkulator = {
    tambah(a, b) {
        return a + b;
    },
    kurang(a, b) {
        return a - b;
    }
};

console.log(kalkulator.tambah(2, 3)); // Output: 5
console.log(kalkulator.kurang(5, 3)); // Output: 2



// 6 Constructor Function (Fungsi Konstruktor)

// Digunakan untuk membuat objek baru.
function NamaKonstruktor(parameter1, parameter2) {
    this.property1 = parameter1;
    this.property2 = parameter2;
}
// Contoh:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 30
