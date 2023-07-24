var jmlAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

	if(noAngkot <= angkotBeroperasi){
		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
	} else if(noAngkot === 8 || noAngkot === 10) {							/*note : || adalah OR, && adalah AND*/
		console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
	} else {
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
	}

}