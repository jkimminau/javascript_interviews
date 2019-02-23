function binary_search(arr, value){
	var left = 0, right = arr.length - 1;
	while (left <= right){
		var mid = Math.floor((right + left) / 2);
		if (value == arr[mid])
			return (mid);
		else if (value > arr[mid])
			left = mid + 1;
		else
			right = mid - 1;
	}
	return (-1);
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7 , 8, 9], 0));