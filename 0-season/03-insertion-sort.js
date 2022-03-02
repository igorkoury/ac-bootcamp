
// Exemple of insetion-sort implementation on JavaScript

function insertionSort(arr){

	let orderArr = [];
	let num = 0;
	let pos = 0;
	
	orderArr.push(arr[0]);

	for(let i = 1; i < arr.length; i++){
		
		for(let j = 0; j < orderArr.length; j++){
			console.log('Valor de J: ' + j);
			if(arr[i] < orderArr[j]){
				console.log('Entrei no IF');
				num = arr[i];
				pos = j;
				
			} else{
				console.log('Entrei no ELSE');
				pos = j + 1;
			}

		}
		orderArr.splice(pos, 0, arr[i]);
		console.log(orderArr);
	}
return orderArr;
}


console.log(insertionSort([7, 2, 9, 1])); 
