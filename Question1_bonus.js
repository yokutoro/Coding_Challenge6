function answer(targetArray) {
	let arrayNum = [], arrayStr = [], finalArray = [];
	
	
	for( let i = 0; i < targetArray.length; i++){
		if( typeof targetArray[i] === 'number')
			arrayNum.push(targetArray[i])
		else 
			arrayStr.push(targetArray[i])
	}
	
	let transformArray = (array) => {
		let transformedArray = [];
		for( let i = 0; i < array.length; i++){
			if( typeof array[i] === 'number')
				transformedArray.push(array[i].toString());
			else if(typeof array[i] === 'string')
				transformedArray.push(Number(array[i]))
			else {
				let innerArray = [];
				for( let j = 0; j < array[i].length; j++){
					if( typeof array[i][j] === 'number')
						innerArray.push(array[i][j].toString());
					else
						innerArray.push(Number(array[i][j]));
				} transformedArray.push(innerArray);
			}
		} return transformedArray;
	}

	arrayNum.sort( (a,b) => a-b );
	if(arrayStr.length > 0) {
		arrayStr = transformArray(arrayStr);
		arrayStr.sort( (a,b) => a-b );
	}
	
	let buildArray = (array) => {
		let trackElements = [], builtArray = [], num = 0;
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
		 for (let i = 0; i < array.length; i++){
	 		if(isPresent(array[i]))
	 			continue;
	 		else{
	 			for (let j = 0; j < array.length; j++){
		 			if(array[i] === array[j])
		 				num++;
		 		}
		 		if(num === 1){
	 				trackElements.push(array[i]);
	 				builtArray.push(array[i]);
	 				num = 0;
	 			} else {
	 				trackElements.push(array[i]);
	 				builtArray.push(localArray(array[i], num));
	 				num = 0;
	 			}
	 		}
 		} return builtArray;
 	}

 	arrayNum = buildArray(arrayNum);
 	finalArray.push(arrayNum);
 	if(arrayStr.length > 0) {
		arrayStr = buildArray(arrayStr);
		arrayStr = transformArray(arrayStr);
		finalArray.push(arrayStr);
	}

 	return finalArray;
}