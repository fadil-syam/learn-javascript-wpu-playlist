// // togged/tag templates


// const nama = 'fadil syamsudin';
// const umur = 19;

// function coba(string, ...values) {
//     // let result = '' ;
//     // string.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return string.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// };

// const str = coba`halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);



// highlight
const nama = 'fadil syamsudin';
const umur = 19;
const email = '@gmail.com';

function hghlght(string, ...values) {
    return string.reduce((result, str, i) => `${result}${str}<span class='hl'>${values[i] || ''}</span>`, '');
};

const str = hghlght`halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalh ${email}`;

document.body.innerHTML = str;