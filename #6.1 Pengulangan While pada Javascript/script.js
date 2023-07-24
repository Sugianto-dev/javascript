/*console.log('Hello World!');*/


/*
	BENTUK UMUM WHILE :

	while(kondisi){
		aksi
	}
*/

/*
	- PENGULANGAN TANPA BATAS / infinite loop :

	while(true){
		console.log('Hello World!');
	}


	- PENGULANGAN TIDAK DIJALANKAN :

	while(false){
		console.log('Hello World!');
	}


	Note : while akan terus berjalan ketika kondisi = true
*/


/*
	- PENGULANGAN TERKONTROL / ditentukan user atau program :

	nilai awal
	while(kondisi terminasi){
		
		aksi

		increment / decrement
	}	
*/

/*CONTOH 1 : Berhenti oleh user*/

/*
var ulang = true;
while(ulang === true){				Bisa diganti dengan while(ulang) saja
	console.log('Hello World!');
	ulang = confirm('lagi?');
}
*/

/*CONTOH 2 : Berhenti oleh program*/
var nilaiAwal = 1;
while(nilaiAwal <= 10){
	console.log('Hello World ' + nilaiAwal + 'x');

	nilaiAwal++;
}