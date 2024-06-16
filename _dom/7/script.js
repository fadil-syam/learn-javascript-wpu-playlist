// function ubahWarna() {
//     p2.style.backgroundColor = 'lightblue';
// }
// let p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;


// addEventListener
let p = document.querySelector('#b p');
p.addEventListener('click', function() {
    let ul = document.querySelector('#b ul');

    let li = document.createElement('li');
    let liBaru = document.createTextNode('https://developer.mozilla.org/en-US/docs/Web/Events');

    li.appendChild(liBaru)
    ul.appendChild(li)
});

// let p3 = document.querySelector('.p3');
// p3.addEventListener('click', function() {
//     p3.style.backgroundColor = 'lightblue';
// });
// p3.addEventListener('mouseleave', function() {
//     p3.style.backgroundColor = 'white';
// });