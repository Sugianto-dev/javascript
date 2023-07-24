// pembukaan
alert('tebak angka dari 1 - 10\nkamu punya 3 kesempatan');

// masukkan tebakan
var angka = Math.floor(Math.random()*10)+1;

var ulang = 3;
while (ulang > 0) {
	if (ulang > 1) {
		kesempatan = ulang - 1;
		var tebak = parseInt(prompt('masukkan angka tebakan:'));

		if (tebak == angka) {
			alert('anda benar!\nangka yang dicari adalah : ' + angka);
			ulang = 0;
		} else if (tebak < angka) {
			alert('terlalu RENDAH!\nayo masih ada ' + kesempatan + ' kesempatan');
		} else if (tebak > angka) {
			alert('terlalu TINGGI!\nayo masih ada ' + kesempatan + ' kesempatan');
		} else {
			alert('angka yang anda masukkan salah!\nayo masih ada ' + kesempatan + ' kesempatan');
		}
	} else {
		var tebak = parseInt(prompt('masukkan angka tebakan:'));

		if (tebak == angka) {
			alert('anda benar!\nangka yang dicari adalah : ' + angka);
			ulang = 0;
		} else if (tebak < angka) {
			alert('terlalu RENDAH!\nkesempatan anda habis');
			alert('anda gagal!\nangka yang dicari adalah ' + angka);
		} else if (tebak > angka) {
			alert('terlalu TINGGI!\nkesempatan anda habis');
			alert('anda gagal!\nangka yang dicari adalah ' + angka);
		} else {
			alert('angka yang anda masukkan salah!\nkesempatan anda habis');
			alert('anda gagal!\nangka yang dicari adalah ' + angka);
		}
	}

	ulang--;
}

alert('Terimakasih!');