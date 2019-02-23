function only_once(arr){
	d = {}
	ones = {}
	for (var i = 0; i < arr.length; i++){
		if (!d[String(arr[i])]){
			d[String(arr[i])] = 1;
			ones[String(arr[i])] = 1;
		}
		else
			if (ones[String(arr[i])])
				delete ones[String(arr[i])]
	}
	return Object.keys(ones)[0];
}

console.log(only_once([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]));