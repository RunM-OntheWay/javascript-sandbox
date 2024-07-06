// insertAdjacentElement Example
function insertElement() {
	const filter = document.querySelector('.filter');

	const h1 = document.createElement('h1');
	h1.textContent = 'insert adjacent el';

	filter.insertAdjacentElement('afterend', h1);
}
// insertAdjacentText Example

// insertAdjacentHTML example

// insertBefore Example

insertElement();
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
