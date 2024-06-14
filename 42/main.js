function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if( this.penumpang.lenght === 0 ) {
            alert('angkot kosong');
            return false;
        }

        for( let i = 0; i < this.penumpang.lenght; i++) {
            if( this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

let Angkot1 = new Angkot('fadil', ['suci', 'jaa raga'], [], 0);
let Angkot2 = new Angkot('syam', ['suka padang', 'pedes'], [], 0);