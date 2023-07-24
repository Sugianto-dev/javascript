for (i = 10; i >= 1; i--) {
	console.log(i);
}

console.log('\n');
/* JIKA DIUBAH KE BENTUK REKURSIF */

function tampilAngka(n) {

	// base case, agar tidak terjadi infinite loop
	if(n === 0) {
		return;
	}

	console.log(n);
	return tampilAngka(n-1);
}

tampilAngka(10);

console.log('\n');
/* CONTOH PEMANFAATAN REKURSIF : MEMBUAT FUNGSI FAKTORIAL*/

function faktorial(n) {
	if(n === 0) return 1;
	return n * faktorial(n-1);
}

console.log(faktorial(5));

/*
	Note : semua looping bisa dibuat rekursif, tapi tidak sebaliknya

	Implementasi Rekursif :
	- Menggantikan looping
	- Fibonacci
	- Pencarian dan penelusuran pada struktur data list dan tree
	- Bahasa pemrograman yang tidak memiliki pengulangan
		Contoh : haskell, Erlang, Prolog, dll
	- Dll.
*/