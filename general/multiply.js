function multiply (a, b){
	var num = 0, n = b / Math.abs(b);
	for (var i = 0; i < Math.abs(b); i++){
		num += a;
	}
	return num * n;
}

function better(a, b, lst = {}){
	if (lst[b])
		return lst[b];
	if (b == 0)
		return lst[b] = 0;
	else if (Math.abs(b) == 1)
		return lst[b] = a * b / Math.abs(b);
	return lst[b] = better(a, Math.floor(b / 2), lst) + better(a, Math.floor((b + 1) / 2), lst);
}

console.log(multiply(-4, -4));
console.log(better(-4, -4));