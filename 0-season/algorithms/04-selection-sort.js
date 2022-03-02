// javascript implementation of the selection sort algorithm

function selectionSort(arr){

let min = 0;
let smallestPosition = 0;
let swap = false;

//search array
for(let i = 0; i < arr.length; i++){

	min = arr[i];

	//search array for smallest number
	for(let j = i; j < arr.length; j++){

		if(arr[j] < min){
			min = arr[j]
			smallestPosition = j;
			swap = true;
				
		}
	}
	//execute swap if the array need to be ordered
	if(swap){
		arr[smallestPosition] = arr[i];
		arr[i] = min;
	}

	swap = false;

}

return arr;

}

console.log(selectionSort([9, 8, 4, 3, 1, 2, 12, 11, 7]));
