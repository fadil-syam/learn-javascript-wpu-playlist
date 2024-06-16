// meanmoilkan warna

// handler
let ubahBg = document.getElementById('uWarna');
ubahBg.onclick = function ubahbackground () {
    // let body = document.getElementsByTagName('body')[0];
    // code di atas sama dengan code dibawah
    document.body.style.backgroundColor = 'lightblue';
};

// addEventListener
let h4 = document.getElementById('uWarna2');
h4.addEventListener('click', function () {
    // let background = document.querySelector('body');
    document.body.style.backgroundColor = 'lightgreen';
});


