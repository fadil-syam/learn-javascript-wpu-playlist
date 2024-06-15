// #b p { color: green; }
// section#b ul li:nth-child(2) { background-color: orange;}

// document.querySelector(); -> elements
let p4 = document.querySelector('#b p');
p4.style.color = 'orange';
p4.style.fontSize = '30px';

let li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// hanya merubah satu elemnt yang paling pertama di temui
// let p = document.querySelector('p');
// p.innerHTML = 'ini diubah melalui java script';


// document.querySelectorAll() -> NodeList
let p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue'
}
