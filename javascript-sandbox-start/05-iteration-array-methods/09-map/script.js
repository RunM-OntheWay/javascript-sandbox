const x = [1, 2, 3, 4, 5];

// map
const y = x.map((x0) => x0 * 2);

console.log(y);

const y2 = [];

// for each
x.forEach((x0) => {
	y2.push(x0 * 2);
});

console.log(y2);
