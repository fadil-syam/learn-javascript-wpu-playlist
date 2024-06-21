// let card = document.querySelectorAll('.card')
// let hapus = card.querySelectorAll('.close')

// hapus.addEventListener('click', function() {
//     card.style.display = 'none'
//     // hapus.removeChild(card);
//     // console.log('ber')
// }) 
// let card = document.querySelectorAll('.card');
// let card = document.parentElement('.card');
const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) { 
//         // alert(`kamu mencet ${i}`)
//         // close[i].parentElement.style.display = 'none';
//         // kode dibawaha sama saja dengan kode dibawah tapi lebih efisien
//         e.target.parentElement.style.display = 'none';
//     })
// }
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';

    })
});

let nama = document.querySelector('.nama');
console.log(nama.parentElement.parentElement)
console.log(nama.parentElement);
console.log(nama.nextElementSibling);
console.log(nama.previousElementSibling);