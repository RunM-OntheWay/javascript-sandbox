// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

// My solution
function capFirstLetter(str) {
	const firstChar = String(str[0]);
	const restOfString = str.split(str[0]);

	return firstChar.toUpperCase() + restOfString[1];
}

console.log(capFirstLetter(myString));

// Solutions 
let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);