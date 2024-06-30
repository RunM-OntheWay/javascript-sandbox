// Challenge 1

const getCelcius = (x) => Math.round(((x - 32) * 5) / 9, 2);

console.log(`The temperature is ${getCelcius(32)} \xB0C`);

// Challenge 2
const minMax = (arr) => {
	return {
		min: Math.min(...arr),
		max: Math.max(...arr),
	};
};
console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function (len, wid) {
	console.log(
		`The area of a rectangle with a length of ${len} and a width of ${wid} is ${
			len * wid
		}.`
	);
})(10, 5);
