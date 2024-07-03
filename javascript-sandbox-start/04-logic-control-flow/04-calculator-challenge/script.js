function calculator(num1, num2, operator) {
	let logItem;
	switch (operator) {
		case '+':
			logItem = num1 + num2;
			console.log(logItem);
			return logItem;
		case '-':
			logItem = num1 - num2;
			console.log(logItem);
			return logItem;
		case '*':
			logItem = num1 * num2;
			console.log(logItem);
			return logItem;
		case '/':
			logItem = num1 / num2;
			console.log(logItem);
			return logItem;

		default:
			console.log('Invalid operator');
			break;
	}
}

calculator(5, 2, '+'); // returns 7
calculator(5, 2, '-'); // returns 3
calculator(5, 2, '*'); // returns 10
calculator(5, 2, '/'); // returns 2.5
calculator(5, 2, '&'); // returns an error message
