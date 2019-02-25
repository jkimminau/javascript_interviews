function power(num, e){
	var tmp = num;
	while (--e)
		tmp *= num;
	return tmp;
}

function better(num, e, lst = {}){
	var ret = num, i = 1;
	if (lst[e])
		return lst[e];
	return lst[e] = better(num, Math.floor(e / 2), lst) + better(num, Math.floor((e + 1) / 2), lst);
}

console.log(power(10, 3));
console.log(better(10, 3));