function isPrime(num){
	for (var i = 2; i < num; i++){
		if (num % i == 0)
			return (0);
	}
	return (1);
}

function first_n_primes(arr, n){
	var d = {}, ret = [];
	for (var i = 0; i < arr.length && ret.length < n; i++){
		if (d[arr[i]] == 1)
			ret.push(arr[i]);
		else if (d[arr[i]] == undefined)
			if (d[arr[i]] = isPrime(arr[i]))
				ret.push(arr[i]);
	}
	return ret;
}

console.log(first_n_primes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 3));