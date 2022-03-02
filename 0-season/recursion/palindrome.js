function recursivePalindrome(str){

	if(str.length < 2){
		return true;
	}	


	if(str[0] != str[str.length-1]){
		return false;
	} else{
		str = str.replace(str[0], '');
		str = str.replace(str[str.length-1], '');
	}

	return recursivePalindrome(str);

} 



function iterationPalindrome(str){

	for(let i = 0; i < str.length; i++){

		if(str[0] == str[str.length-1]){
			str = str.replace(str.charAt(0), '');
			str = str.replace(str.charAt(str.length -1), '');
		} else{
			return false;
		}

		if(str.length < 2){
			return true;
		}
	}
		
	

}

console.log(recursivePalindrome('hannah'));

console.log('\n');

console.log(iterationPalindrome('hannah'));

