function parse_int(str){
	var num = 0;
	str = str.toLowerCase();
	for (var i = 0; i < str.length; i++){
		if (Number(str.charAt(i)) >= 0 && Number(str.charAt(i)) <= 9)
			num = num * 10 + Number(str.charAt(i));
		else
			return NaN;
	}
	return num;
}

console.log(parse_int("123"));
console.log(parse_int("123!"));
console.log(parse_int("  123"));
console.log(parse_int("hello"));
console.log(parse_int("hello123"));