/*fungsi untuk cara 1 & cara 2*/
function tambah(a, b) {		/* a, b adalah parameter */
	return a + b;
}

/*fungsi diatas + fungsi ini untuk cara 3*/
function kali (a, b) {
	return a * b;
}


/*
	CARA 1 - Langsung isi angka pada argument
*/
/*var hasil = tambah(2, 3);*/	/* 2, 3 adalah argument */

/*
	CARA 2 - Argument dalam variabel dan diisi oleh user
*/
/*var a = parseInt(prompt('Masukkan nilai 1 : '));
var b = parseInt(prompt('Masukkan nilai 2 : '));*/
/*CARA 2.1*/
/*var hasil = tambah(a, b);*/
/*CARA 2.2*/
/*var hasil = tambah(a*2, b*2);*/

/*
	CARA 3 - Argument berisi argument lain
*/
var hasil =  kali(tambah(1, 2), tambah(3, 4));

console.log(hasil);

/*
	MATERI SELANJUTNYA

	Jika parameter lebih sedikit dari argument, maka argument kelebihannya 
	akan diabaikan
	Contoh :

		function tambah(a, b) {
			return a + b;
		}

		var coba = tambah(5, 10, 20);	------ Nilai 20 akan diabaikan


	Jika parameter lebih banyak dari argument, maka parameter kelebihannya 
	akan diisi dengan nilai undefined	
	Contoh :

		function tambah(a, b, c) {
			return a + b;
		}

		var coba = tambah(5, 10);		------ Nilai dari parameter c adalah undefined


	- Arguments
		array yang berisi nilai yang dikirimkan saat fungsi dipanggil.

		Contoh :

			function tambah(a, b) {
				return a + b;
			}

			var coba = tambah(5, 10, 20, "hi", false);

								|
					ditampung terlebih dahulu di
								|

			arguments = [5,10,20,"hi",false]; 		----- [] atau array

		Contoh 2 :

			function tambah() {
				return arguments;
			}

			var coba = tambah(5, 10, 20, "hi", false);
			console.log(coba);
*/

console.log('\nMATERI 2 - ARGUMENTS');
function tambahDua() {
	var hasil = 0;
	for (var i = 0; i < arguments.length; i++) {  /*arguments.length digunakan untuk menghitung jumlah array didalam arguments*/
		hasil += arguments[i];
	}
	return hasil;
}

var coba = tambahDua(1, 2, 3, 4, 5);
console.log(coba);