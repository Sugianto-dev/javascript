/*CONTOH perbedaan == & ===*/

/*
var angka = prompt('masukkan angka :');

if (angka === 1) {
	alert('anda memasukkan angka 1');
} else if (angka === 2) {
	alert('anda memasukkan angka 2');
} else if (angka === 3) {
	alert('anda memasukkan angka 3');
} else {
	alert('angka yang anda masukkan salah!');
}*/

/*
	SINTAK diatas tidak benar karena :
	prompt ber tipe data string
	dibandingkan dengan
	1, 2, 3 yang ber tipe data integer

	karena :

	=== 		} membandingkan nilai dan tipe datanya

	solusi :

	ubah === menjadi ==
	atau
	1, 2, 3 menjadi '1', '2', '3'
	atau
	parseInt(prompt('')) agar tipe data nilai nya menjadi integer
*/


/*PENYELESAIAN*/
/*var angka = parseInt(prompt('masukkan angka :'));

if (angka === 1) {
	alert('anda memasukkan angka 1');
} else if (angka === 2) {
	alert('anda memasukkan angka 2');
} else if (angka === 3) {
	alert('anda memasukkan angka 3');
} else {
	alert('angka yang anda masukkan salah!');
}*/

/*
	Notes :
	
	==    		} operator perbandingan
	===   		} operator identitas (perbandingan nilai dan tipe data nya)

	hati-hati dengan penggunaan :

	prompt('')	} nilai yang di input dianggap sebagai String	
*/



/*DENGAN SWITCH*/

/*CONTOH 1*/
/*var angka = prompt('masukkan angka :');

switch(angka) {
	case '1' :
		alert('anda memasukkan angka 1');
		break;
	case '2' :
		alert('anda memasukkan angka 2');
		break;
	case '3' :
		alert('anda memasukkan angka 3');
		break;
	default :
		alert('angka yang anda masukkan salah!');
		break;
}*/

/*CONTOH 2*/
var item = prompt('masukkan nama makanan / minuman : \n(cth: nasi, daging, susu, hamburger, softdrink)');

switch(item) {
	case 'nasi' :
		alert('makanan / minuman SEHAT!');
		break;
	case 'daging' :
		alert('makanan / minuman SEHAT!');
		break;
	case 'susu' :
		alert('makanan / minuman SEHAT!');
		break;
	case 'hamburger' :
		alert('makanan / minuman TIDAK SEHAT!');
		break;
	case 'softdrink' :
		alert('makanan / minuman TIDAK SEHAT!');
		break;
	default :
		alert('anda memasukkan nama makanan / minuman yang salah!');
		break;
}

/*CARA PINTAS CONTOH 2 tanpa break;*/
/*var item = prompt('masukkan nama makanan / minuman : \n(cth: nasi, daging, susu, hamburger, softdrink)');

switch(item) {
	case 'nasi' :
	case 'daging' :
	case 'susu' :
		alert('makanan / minuman SEHAT!');
		break;
	case 'hamburger' :
	case 'softdrink' :
		alert('makanan / minuman TIDAK SEHAT!');
		break;
	default :
		alert('anda memasukkan nama makanan / minuman yang salah!');
		break;
}*/