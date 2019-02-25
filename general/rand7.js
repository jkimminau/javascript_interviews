function rand5(){
	return Math.floor(Math.random() * 5) + 1;
}

function rand7(){
	var res;
	while (res > 20 || !res)
		res = (rand5() - 1) + (5 * (rand5() - 1));
	return (res % 7) + 1;
}

console.log(rand7())