// Manipulasi Array
// 1. Menambah elemen pada array
// 2. Menghapus elemen pada array
// 3. Menampilkan seluruh isi array

//-----------------------------------------------------------------

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Sandhika";
// arr[1] = "Galih";
// arr[2] = "Nofa";
// arr[6] = "Doddy";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy"];
// arr[1] = undefined;

// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy"];

// for(var i = 0; i < arr.length; i++) {
//	 console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);
// }

//-----------------------------------------------------------------

// Method pada array
// - length
// - join
// - push, pop, shift, unshift

// 1. join
// var arr = ["Sandhika", "Galih", "Nofa"];
// console.log(arr.join());
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Doddy', 'Fitri');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift();

// console.log(arr.join(' - '));

// ----------------- LANJUTAN MATERI (SLICE & SPLICE) -----------------

// 4. splice
// splice(indexAwal, mauDihapusBerapa(opt), elemenBaru1(opt), elemenBaru2(opt), ...);
// var arr = ["Sandhika", "Galih", "Nofa"];
// arr.splice(2, 0, 'Doddy', 'Fitri');
// arr.splice(1, 2, 'Doddy', 'Fitri');

// console.log(arr.join(' - '));

// 5. slice
// slice(awal, akhir);
var arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];
var arr2 = arr.slice(1, 3);

console.log(arr.join(' - '));
console.log(arr2.join(' - '));


/*
	Note : pop & shift benar-benar menghilangkan elemennya bukan merubahnya menjadi undefined
*/