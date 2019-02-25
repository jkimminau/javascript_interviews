function rotated_binary_search(arr, value){
	var left = 0, right = arr.length - 1;
	while (left <= right){
		var mid = Math.floor((right + left) / 2);
		if (arr[mid] == value)
			return mid;
		else if (arr[left] <= arr[mid]){
			if (value >= arr[left] && value <= arr[mid])
				right = mid - 1;
			else
				left = mid + 1;
		}
		else{
			if (value >= arr[mid] && value <= arr[right])
				left = mid + 1;
			else
				right = mid - 1;	
		}
	}
	return (-1);
}

console.log(rotated_binary_search([7, 8, 9, 1, 2, 3, 4, 5, 6], 7));