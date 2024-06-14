let arr =  ['fadil', 'syam', 'ddil', 'kkk'];

// splice
//indexAwal/start (0), ada yang mau di hapus(2), elemen beru 'ddinda', 'fitri',
arr.splice(2, 2, 'ddinda', 'fitri',);
console.log(arr.join(' - '));

//slice
let arr2 = arr.slice(1,3);
console.log(arr2.join())