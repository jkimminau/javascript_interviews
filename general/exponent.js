function power(num, e){
	var tmp = num;
	while (--e)
		tmp *= num;
	return tmp;
}

function better(num, e, lst = {}){
	if (lst[e])
		return lst[e];
	if (e == 0)
		return lst[e] = 1;
	else if (e == 1)
		return lst[e] = num;
	return lst[e] = better(num, Math.floor(e / 2), lst) * better(num, Math.floor((e + 1) / 2), lst);
}

console.log(power(10, 3));
console.log(better(10, 3));