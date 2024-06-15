// dom selection 

// document.getElementById() -> element
let judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'fadil syam';

// document.getElementsByTagName() -> HTMLCollections
let p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}
let h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollections
let p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini adlah javascript';