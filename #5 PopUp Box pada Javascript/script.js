/*1. alert*/
/*alert('halo');
alert('nama');
alert('saya');
alert('Sugianto');*/

/*2. prompt*/
/*var nama = prompt('masukkan nama :');
alert(nama);*/

/*3. confirm*/
/*var tes = confirm('kamu yakin ?');*/

/*alert(tes);*/

/*- PENGKONDISIAN (if else)*/
/*if (tes === true) {
	alert('user menekan OK!');
}else{
	alert('user menekan CANCEL!');
}*/



/*APLIKASI SEDERHANA*/
alert('selamat datang..');
var lagi = true;

/*- PENGULANGAN (while)*/
while( lagi === true ){
	var nama = prompt('masukkan nama :');
	alert('halo ' + nama)

	lagi = confirm('coba lagi ?');
}

alert('terima kasih..');