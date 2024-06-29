// const mhs = 
// {
//     nama: 'alfadil',
//     umur: 19,
//     nrp: 12333445454656,
//     email: 'alfadil@gmail.com',
// };
// let el = `<div class="mhs">
//             <h2>${mhs.nama}</h2>
//             <span class="nrp">${mhs.nrp}</span>
//         </div>`;


// 2. looping
// const mhs = [
//     {
//         nama: 'alfadil',
//         email: 'alfadil@gmail.com',
//     },
//     {
//         nama: 'syam',
//         email: 'syam@gmail.com',
//     }
// ];
// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//         </ul>`).join('')}
//     </div>`;


// 3. conditionals 
// ternary
// const lagu = {
//     judul: 'kau adlah',
//     penyanyi: 'isyana saraswati',
//     feat: 'rayi putra',
// }

// const el = `<div class="lagu">
//         <ul>
//             <li>${lagu.penyanyi}</li>
//                 <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//         </ul>
//     </div>`;



// 4. nested
// html frogments bersarang
const mhs = {
    nama: 'alfadil',
    semester: 2,
    mataKuliah: [
        'rekayasa web',
        'analisis dan perancangan sistem informasi',
        'pemrograman sistem interaktif',
        'perancangan sistem berorientasi object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `
}

const el = `<div class="mhs">
        <h2>${mhs.nama}</h2>            
        <span class="semester">semester : ${mhs.semester}</span>
        <h4>mata kuliah</h4> 
        ${cetakMataKuliah(mhs.mataKuliah)}
    </div>`;

document.body.innerHTML = el;