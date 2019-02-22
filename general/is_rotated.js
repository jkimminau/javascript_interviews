function is_rotated(arr1, arr2){
	if (arr1.length != arr2.length)
		return false;
	var j = arr2.indexOf(arr1[0]);
	tmp = j;
	while (j != -1 && j >= tmp){
		j = arr2.indexOf(arr1[0], tmp);
		tmp = j;
		var i = 0;
		while (arr1[i] == arr2[j]){
			i++;
			j++;
			if (j >= arr2.length)
				j = 0;
		}
		if (i == arr1.length)
			return true;
	}
	return false;
}

console.log(is_rotated([1, 2, 3, 5, 6, 7, 8], [5, 6, 7, 9, 1, 2, 3]));