function removeItem(ItemNumber) {
	const ul = document.querySelector('ul');
	const li = document.querySelector(`li:nth-child(${ItemNumber})`);

	ul.removeChild(li);
}

function removeItem2(ItemNumber) {
	const ul = document.querySelector('ul');
	const li = document.querySelectorAll('li')[ItemNumber - 1];

	ul.removeChild(li);
}
