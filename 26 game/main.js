let tanya = true;
while (tanya) {

    //menangkap pilihan user
    let p = prompt(`pilih: gajah, semut, orang`);

    //menangkap pilihan computer
    //membangkitkan bilangan random
    let comp = Math.random();

    if(comp < 0.34 ) {
        comp = 'gajah'
    } else if ( comp >= 0.34 && comp < 0.67 ) {
        comp = `orang`
    } else {
        comp = `semut`
    }
    console.log(comp)

    let hasil = '';
    //menampilkan rules
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        // if (comp == `orang`) {
        //     hasil = `menang!`;
        // } else {
        //     hasil = `kalah`;
        // }
        hasil = (comp == 'orang' ) ? 'menang' : 'kalah';

    } else if (p == 'orang') {
        hasil = ( comp == 'gajah' ) ? 'kalah' : 'menang';

    } else if (p == 'semut') {
        hasil = ( comp == 'orang' ) ? 'kalah' : 'menang';

    } else {
        hasil = 'yang bener atuh'
    }

    //tampilkan hasilnya
    alert(`kamu memilih ${p} dan komputer memilih ${comp} \n maka hasilnya kamu ${hasil}`);

    tanya = confirm('lagi?');
}

alert('terimakasih');