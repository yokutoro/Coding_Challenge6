function answer(targetArray) {
	let trackElements = [];
	let finalArray = [];
	let num = 0;

	targetArray.sort( (a,b) => a-b );
	let localArray = (element, count) => {
		let a = [];
		for( let i = 0; i < num; i++){
			a.push(element)
		} return a;
	}

	let isPresent = (item) => {
		if(trackElements.length === 0)
			return false;
		for(let i = 0; i < trackElements.length; i++){
			if(item === trackElements[i])
				return true
		} return false;
	}
	 for (let i = 0; i < targetArray.length; i++){
	 	if(isPresent(targetArray[i]))
	 		continue;
	 	else{
	 		for (let j = 0; j < targetArray.length; j++){
	 			if(targetArray[i] === targetArray[j])
	 				num++;
	 		}
	 		if(num === 1){
	 			trackElements.push(targetArray[i]);
	 			finalArray.push(targetArray[i]);
	 			num = 0;
	 		} else {
	 			trackElements.push(targetArray[i]);
	 			finalArray.push(localArray(targetArray[i], num));
	 			num = 0;
	 		}
	 	}
 	}
 	return finalArray;
}