// dom manipulatin

// *    buat elemen baru     *
// document.createElement()
// document.createTextNode()
// node.appendChild
// node.insertBefore
// parentNode.remomeChild()
// parentNode.replaceChild()


// node.appendChild
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');
// simpan tulisan kedalam paragraf /menyatukan yang di atas
pBaru.appendChild(teksPBaru);
// tampilkan pBaru di akhir section a
const sectionA = document.getElementById('a');
//
sectionA.appendChild(pBaru);


// node.insertBefore
let liBaru = document.createElement('li');
let teksLIBaru = document.createTextNode('item baru');
//
liBaru.appendChild(teksLIBaru);
//
let ul = document.querySelector('section#b ul');
let li2 = ul.querySelector('li:nth-child(2)');
//
ul.insertBefore(liBaru, li2);


// parentNode.remomeChild()
let sectionA2 = document.getElementById('a');
let link = sectionA2.querySelector('a');
sectionA2.removeChild(link);


// parentNode.replaceChild()
let sectionB = document.getElementById('b');
let p = sectionB.querySelector('p');

let h2 = document.createElement('h2');
let textH2 = document.createTextNode('judul baru');

h2.appendChild(textH2);

sectionB.replaceChild(h2, p);


// part baru
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2.style.backgroundColor = 'lightgreen';