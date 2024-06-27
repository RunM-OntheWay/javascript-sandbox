const name = 'john';
const age = 30;
const person = {
	name: 'Brad',
	age: 40,
};

let newName = name;
newName = 'Johnathan';
let newPerson = person;
newPerson.name = 'Bredley';

console.log(newName, person, newPerson);
