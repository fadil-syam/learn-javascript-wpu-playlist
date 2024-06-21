// const close = document.querySelectorAll('.close');

// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         // menghentikan aksi default dengan preventDefault()
//         // dlam kasus ini menghentikan aksi default a href
//         e.preventDefault();
//         // eventBubling
//         // untuk menghentikan supaya tombol card tidak ikut ikutan
//         e.stopPropagation();
//     })
// });


// let card = document.querySelectorAll('.card');
// card.forEach(function(al) {
//     al.addEventListener('click', function(a) {
//         alert('ak')
//     })
// })

// code paling efektif dari semua yang di atas
let containers = document.querySelector('.container');
containers.addEventListener('click', function(e) {
    if( e.target.className == 'close') {
        e.target.parentElement.style.display = 'none'
    }
})