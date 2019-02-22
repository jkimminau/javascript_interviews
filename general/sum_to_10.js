function sum_to_10(arr){
	d = {};
	pairs = [];
	for (var i = 0; i < arr.length; i++){
		if (d[String(10 - arr[i])] != undefined)
			pairs.push([arr[i], 10 - arr[i]]);
		d[String(arr[i])] = 1;
	}
	return pairs;
}

console.log(sum_to_10([1, 2, 9, 8, 7, 3, 5, 6, 7 ,4, 3, 2, 3, 4, 5, 6, 7]));