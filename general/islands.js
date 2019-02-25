function fill(island, i, j){
	island[i][j] = 2;
	if (i + 1 < island.length && island[i + 1][j] == 1)
		fill(island, i + 1, j);
	if (i - 1 >= 0 && island[i - 1][j] == 1)
		fill(island, i - 1, j);
	if (j + 1 < island[i].length && island[i][j + 1] == 1)
		fill(island, i, j + 1);
	if (j - 1 >= 0 && island[i][j - 1] == 1)
		fill(island, i, j - 1);
}

function islands(island){
	var count = 0;
	for (var i = 0; i < island.length; i++)
		for (var j = 0; j < island[i].length; j++)
			if (island[i][j] == 1){
				count++;
				fill(island, i ,j);
			}
	return count;
}

console.log(islands(
	[[1, 1, 0, 0, 1],
	 [1, 0, 0, 1, 1],
	 [0, 0, 0, 1, 0],
	 [0, 1, 1, 0, 0]]));