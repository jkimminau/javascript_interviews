function sqrt(num){
	var left = 1, right = num - 1;
	while (left <= right){
		var mid = Math.floor((right + left) / 2), s = mid ** 2;
		if (s == num)
			return mid;
		else if(s > num)
			right = mid - 1;
		else
			left = mid + 1;
	}
	return NaN;
}

console.log(sqrt(121));