function unique(value, index, self){
	return self.indexOf(value) === index;
}

function common_elements(arr1, arr2){
	arr1 = arr1.sort(function(a, b){return a - b}).filter(unique);
	arr2 = arr2.sort(function(a, b){return a - b}).filter(unique);
	var i = 0, j = 0, e = [];
	while (i < arr1.length && j < arr2.length){
		if (arr1[i] === arr2[j]){
			e.push(arr1[i]);
			i++;
			j++;
		}
		else{
			if (arr1[i] > arr2[j])
				j++;
			else
				i++;
		}
	}
	return e;
}

console.log(common_elements([1, 2, 3, 2, 5, 4, 5], [3, 2, 5, 5, 2, 3]));