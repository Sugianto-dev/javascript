/*
	SEBELUM REFACTORING
*/
function jumlahVolumeDuaKubus(a, b) {
	var volumeA;
	var volumeB;
	var total;

	volumeA = a * a * a;
	volumeB = b * b * b;

	total = volumeA + volumeB;

	return total;
}

alert(jumlahVolumeDuaKubus(8, 3));


/*
	SETELAH REFACTORING
*/
function jumlahVolumeDuaKubus(a, b) {
	return a * a * a + b * b * b;
}

alert(jumlahVolumeDuaKubus(8, 3));