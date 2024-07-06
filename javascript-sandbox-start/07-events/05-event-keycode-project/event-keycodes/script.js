/*
const insertDiv = document.querySelector('#insert');
const keys = document.querySelectorAll('.key');
function altText(e) {
	e.key === ' '
		? (keys[0].innerHTML = `space <small>e.key</small>`)
		: (keys[0].innerHTML = `${e.key} <small>e.key</small>`);
	keys[1].innerHTML = `${e.keyCode} <small>e.keyCode</small>`;
	keys[2].innerHTML = `${e.code} <small>event.code</small>`;

	console.log(keys);
}

window.addEventListener('keypress', altText);
*/
function showKeyCodes(e) {
	const insert = document.getElementById('insert');
	insert.innerHTML = '';
	const keyCodes = {
		'e.key': e.key === ' ' ? 'Space' : e.key,
		'e.keyCode': e.keyCode,
		'e.code': e.code,
	};

	for (let key in keyCodes) {
		const div = document.createElement('div');
		div.className = 'key';

		const small = document.createElement('small');

		const keyText = document.createTextNode(key);
		const valueText = document.createTextNode(keyCodes[key]);

		small.appendChild(keyText);
		div.appendChild(valueText);
		div.appendChild(small);

		insert.appendChild(div);
	}
}

window.addEventListener('keydown', showKeyCodes);
