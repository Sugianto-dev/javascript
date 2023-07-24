var s = '';
for(var i = 0; i < 10; i++){
	for(var j = 0; j <= i; j++){
		s += '*'; /* Sama dengan s = s + '*' */
	}
	s += '\n';
}

console.log(s);

console.log('\n');

var ss = '';
for(var ii = 10; ii > 0; ii--){
	for(var jj = 0; jj < ii; jj++){
		ss += '*'; /* Sama dengan ss = ss + '*' */
	}
	ss += '\n';
}

console.log(ss);