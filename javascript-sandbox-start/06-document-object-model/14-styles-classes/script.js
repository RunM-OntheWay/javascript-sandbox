const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
	// text.classList.toggle('dark');
	//text.classList.toggle('hidden');

	items.forEach((item, index) => {
		if (index % 2 === 0) {
			item.style.color = 'green';
		} else {
			item.style.color = 'red';
		}
	});
}

document.querySelector('button').onclick = run;
