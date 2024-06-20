function getCompChoice() {
    let comp = Math.random();
    if (comp < 0.34 ) return 'gajah';
    if (comp >= 0.34 && comp <= 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if ( player == comp ) return 'seri';
    if ( player == 'gajah') return ( comp == 'orang' ) ? 'menang' : 'kalah';
    if ( player == 'orang') return ( comp == 'gajah' ) ? 'kalah' : 'menang';
    if ( player == 'semut') return ( comp == 'orang' ) ? 'kalah' : 'menang';
}

function putar () {
    let imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png'); 
        if( i == gambar.length ) i = 0;
    }, 100)
}

let choice = document.querySelectorAll('ul img');
choice.forEach(function(pil) {
    pil.addEventListener('click', function(){
        let compChoice = getCompChoice();
        let playerChoice = pil.className;
        let hasil = getHasil(compChoice, playerChoice);

        putar();

        setTimeout(function() {
            let imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/' + compChoice + '.png')
    
            let info = document.querySelector('.info');
            info.innerHTML = hasil;

        }, 1000)

    })
})
// let pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     let compChoice = getCompChoice();
//     let playerChoice = pGajah.className;
//     let hasil = getHasil(compChoice, playerChoice);

//     let imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + compChoice + '.png')

//     let info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// let pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     let compChoice = getCompChoice();
//     let playerChoice = pOrang.className;
//     let hasil = getHasil(compChoice, playerChoice);

//     let imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + compChoice + '.png')

//     let info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// let pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     let compChoice = getCompChoice();
//     let playerChoice = pSemut.className;
//     let hasil = getHasil(compChoice, playerChoice);

//     let imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + compChoice + '.png')

//     let info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });







// let ul = document.querySelector('.area-player ul');
// let element = {
//     gajah: ul.querySelector('.gajah'),
//     orang: ul.querySelector('.orang'),
//     semut: ul.querySelector('.semut')
// }

// element.orang.addEventListener('click', function () {
//     orang = 'orang';
//     console.log(orang)
// });
// element.semut.addEventListener('click', function () {
//     semut = 'semut';
//     console.log(semut)
// });

// var tanya = true;
// while( tanya ) {
//     // menangkap pilihan player
//     var p = prompt('pilih : gajah, semut, orang');

//     // menangkap pilihan computer
//     // membangkitkan bilangan random
//     var comp = Math.random();

//     if( comp < 0.34 ) {
//         comp = 'gajah';
//     } else if( comp >= 0.34 && comp < 0.67 ) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     // menentukan rules
//     var hasil = '';
//     if( p == comp ) {
//         hasil = 'SERI!';
//     } else if( p == 'gajah' ) {
//         hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
//     } else if( p == 'orang' ) {
//         hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
//     } else if( p == 'semut' ) {
//         hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
//     } else {
//         hasil = 'memasukkan pilihan yang salah!';
//     }

//     // tampilkan hasilnya
//     alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');
