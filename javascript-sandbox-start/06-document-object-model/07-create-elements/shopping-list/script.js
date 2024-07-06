const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

const text = document.createTextNode('Hello world');

div.appendChild(text);

console.log(div);

document.querySelector('ul').appendChild(div);
