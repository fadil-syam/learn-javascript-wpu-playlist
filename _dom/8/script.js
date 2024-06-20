// meanmoilkan warna

// review
// classList.toggle

// handler
let ubahBg = document.getElementById('uWarna');
ubahBg.onclick = function ubahbackground () {
    // let body = document.getElementsByTagName('body')[0];
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    // code di atas sama dengan code dibawah
    document.body.classList.toggle('biru-muda');
};

// // addEventListener
// let h4 = document.getElementById('uWarna2');
// h4.addEventListener('click', function () {
//     // let background = document.querySelector('body');
//     document.body.style.backgroundColor = 'lightgreen';
// });


let butt = document.createElement('button');
let teksTombol = document.createTextNode('hot touch me');
butt.appendChild(teksTombol);
butt.setAttribute('type', 'button');
ubahBg.after(butt);


butt.addEventListener('click', function () {
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // document.body.style.backgroundColor = `rgb(r, g, b)`;
});

let sMerah = document.querySelector('input[name=sMerah]');
let sHijau = document.querySelector('input[name=sHijau]');
let sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
    let r = sMerah.value;
    let g = sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});
sHijau.addEventListener('input', function () {
    let r = sMerah.value;
    let g = sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});
sBiru.addEventListener('input', function () {
    let r = sMerah.value;
    let g = sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});

document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // console.log(event.clientY);
    // console.log(event.clientX);
    // ukuran browser 
    // console.log(window.innerWidth);
    let xPos = Math.round((event.clientX / window.innerWidth) * 255);
    let yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos})`
})