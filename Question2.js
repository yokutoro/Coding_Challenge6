function answer(queryArray, targetNum){
	for(let i = 0; i < queryArray.length; i++){
		for(let j = i + 1; j < queryArray.length; j++){
			if(queryArray[i] + queryArray[j] === targetNum)
				return [queryArray[i], queryArray[j]];
		}
	}
}