function binary_int(num){
	var i = 0, str = "";
	while (2 ** i <= num)
		i++;
	while (i-- > 0){
		if (num >= 2 ** i){
			str += "1";
			num -= 2 ** i;
		}
		else
			str += "0";
	}
	console.log(str);
}

binary_int(31);