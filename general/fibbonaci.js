function iterative(i){
	var a = 1, b = 0;
	while(i--){
		console.log(a);
		var tmp = a;
		a += b;
		b = tmp;
	}
}

function helper(i, num, prev){
	console.log(num);
	if (i > 1)
		helper(i - 1, num + prev, num);
}

function recursive(i){
	helper(i, 1, 0);
}

function dynamic(i, nums=[]){
	if (nums[i - 1] != undefined)
		return nums[i - 1];
	if (i <= 2)
		return 1;
	return nums[i - 1] = dynamic(i - 1, nums) + dynamic(i - 2,nums);
}

iterative(5);
recursive(5);
//console.log(dynamic(4));