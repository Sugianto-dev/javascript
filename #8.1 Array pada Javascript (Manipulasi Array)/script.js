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
var arr = ["Sandhika", "Galih", "Nofa"];
// console.log(arr.join());
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Doddy', 'Fitri');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Doddy');
arr.shift();

console.log(arr.join(' - '));


/*
	Note : pop & shift benar-benar menghilangkan elemennya bukan merubahnya menjadi undefined
*/