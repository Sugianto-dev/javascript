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
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];
// var arr2 = arr.slice(1, 3);

// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// ----------------- LANJUTAN MATERI (Foreach & Map) -----------------

// 6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Sandhika", "Galih", "Nofa"];
// for(var i = 0; i < angka.length; i++){
// 	 console.log(angka[i]);
// }
// DIGANTIKAN DENGAN :
// angka.forEach(function(e) {
//	 console.log(e);
// });
// nama.forEach(function(e, i) {
//	console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

// 7. map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//	 return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1,2,10,5,20,3,6,8,4];
// console.log(angka.join(' - '));
// angka.sort();
// angka.sort(function(a,b) {
//	return a - b;
// });
// console.log(angka.join(' - '));

// ----------------- LANJUTAN MATERI (Filter & Find) -----------------

// 9. filter
// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.filter(function(x) {
// //	return x == 5;
// 	return x > 5;
// });
// console.log(angka2.join(' - '));

// 10. find
// var angka3 = angka.find(function(x) {
// //	return x == 5;
// 	return x > 5;
// });
// console.log(angka3);

// 11. Membuat Program Pengelolaan Penumpang Angkot
var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
	if ( penumpang.length == 0 ) {
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			// jika ada kursi kosong
			if ( penumpang[i] == undefined ) {
				// tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika sudah ada nama yang sama
			else if ( penumpang[i] == namaPenumpang ) {
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + ' sudah ada di dalam angkot.');
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika seluruh kursi terisi
			else if ( i == penumpang.length - 1 ) {
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
	if ( penumpang.length == 0 ) {
		// tampilkan pesan bahwa angkot kosong, dan
		// tidak mungkin ada penumpang turun
		console.log('Angkot masih kosong.');
		// kembalikan isi array & keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			// jika nama penumpang sesuai
			if ( penumpang[i] == namaPenumpang ) {
				// hapus penumpang dengan mengubah namanya,
				// menjadi undefined
				penumpang[i] = undefined;
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika tidak ada nama yang sesuai 
			else if ( i == penumpang.length - 1 ){
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + ' tidak ada di dalam Angkot.');
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}

/*
	Note : pop & shift benar-benar menghilangkan elemennya bukan merubahnya menjadi undefined
*/