function mostFrequent(arr){
	d = {}
	max = 0;
	num = 0;
	for (var i = 0; i < arr.length; i++){
		if (d[String(arr[i])] === undefined)
			d[String(arr[i])] = 1;
		else
			d[String(arr[i])] += 1;
		if (d[String(arr[i])] > max){
			max = d[String(arr[i])];
			num = arr[i];
		}
	}
	return num;
}

console.log(mostFrequent([2, 5, 7, 8, 3, 5, 6, 1, 4, 7, 8, 4, 3, 2, 4, 6, 4, 2, 2, 5, 7, 2, 5]));