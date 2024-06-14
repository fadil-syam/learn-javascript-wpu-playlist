// membuat game tebak angka

let start = true;

while (start) {

        
    
        let pc = Math.floor(Math.random()*10) + 1;
        

            let hp = 5;
            let jumlah = 10;
            while (hp != 0 || hp != hp) {
                let user = prompt(`Masukkan angka 1 - ${jumlah} \nAnda punya : ${hp} Kesempatan`);
                if (user > jumlah) {
                    alert(`Eiittss...angka tidak boleh lebih dari ${jumlah} atuh...`)
                    continue;
                }
                    let hasil = '';
                    if (pc == user) {
                    hasil = "Tepat sekali 100 buat kamuuu";
                    hp = hp;
                    alert(`Angka yang anda masukkan ${hasil}`);
                    break;                            
                }
                    else if (pc < user) {
                    hasil = " Terlalu besar";
                    hp = hp-1;
                }
                    else if (pc > user) {
                    hasil = "Terlalu kecil"
                    hp = hp-1;
                }


                    else {
                    alert('Tolong jangan masukkan selain angka..')
                    break;
                }

                if (hp == 0 ) {
                    alert(`Kesempatan anda habis angka yang dipilih komputer \nadalah ${pc}.`)
                    break;
                }

                else {alert(`Angka yang anda masukkan ${hasil}`);
                            }


    }
    

    start = confirm('mau main lagi ?')


}
alert ('oke terimakasih ..')

// // let play = parseInt(alert('tebak angaka 1-10 \nanda mempunyai 3 kesempatan'));
 
// let mulai = true;

// while (mulai) {
//     let comp =  Math.floor(Math.random()*10) + 1;

//     let percobaan = 10;
//     percobaan = i;
//     let jumlahAngka = 10

//     while(i != 0 || i != i) {
//         let p = prompt(`masukan angka tebakan anda? dari 1-${i} \nanda mempunyai kesempatan ${percobaan}`);

//         if (p > jumlahAngka) {
//             alert(`angka tidak boleh lebih dari ${jumlahAngka}`)
//             continue;
//         }
//         let hasil = '';
//         if (comp == p) {
//             hasil = 'tebakan anda benar';
//             i = i;
//             alert(`angka yang anda masukan ${hasil}`);
//             break;
//         } else if (comp < p) {
//             hasil = 'terlalu besar';
//             i = i-1;
//         } else if (comp > p) {
//             hasil = 'terlalu kecil';
//             i = i-1;
//         } else {
//             alert('masukan angka yang valid');
//             break;
//         }

//         if (hp == 0 ) {
//             alert(`kesempatan anda habis angka yang dipilih komputer \nadalah ${comp}`)
//         } else {
//             alert(`angka yang anda masukan ${hasil}`)
//         }
//     }
//     start = confirm('mau main lagi ?')
// }
// alert ('oke terimakasih ..')



// // let hasil = '';
// // if(comp == p ) {
// //     alert('jawaban anda benar');
// // } else if (p < comp ) {
// //     alert ('kekecilan')
// // } else if (p > comp ) {
// //     alert ('kegedean')
// // } else {
// //     alert('angaka woy');
// // }
// // // alert(isNaN(play))
// // // console.log(isNaN(play));
// // console.log(comp);
