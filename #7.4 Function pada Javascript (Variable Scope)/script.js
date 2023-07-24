"use strict" // digunakan untuk membuat deklarasi "var" pada variable

// global scope / window scope
var a = 1;

function tes() {
	// name conflict
	var a = 2;
	console.log(a); // a yang akan di load adalah a di variable local = 2
	console.log(window.a); // a yang akan di load adalah a di window scope = 1
}

tes();

console.log(a); // a yang akan di load adalah a di window scope = 1

/*
	Note : deklarasi "var" sangat penting untuk variable scope
	jadi wajib menulis "var" ketika membuat variable.

	atau

	dengan menggunakkan : "use strict" dengan kutip dua
	maka deklarasi "var" akan otomatis dibuat jika tidak ada.
*/


/*
	MATERI 2
*/

var aa = 1;

function tess(aa) {		// argumen aa selalu menjadi local variable tanpa deklarasi "var"
	console.log(aa);
}

tes(2);  // 2 masuk ke aa variable local tess
console.log(aa);	// aa mengacu ke variable global = 1