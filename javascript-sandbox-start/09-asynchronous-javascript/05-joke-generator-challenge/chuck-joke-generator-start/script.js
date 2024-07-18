const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const xhr = new XMLHttpRequest();

function getNewJoke() {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api.chucknorris.io/jokes/random");

	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			const data = JSON.parse(this.responseText);
			joke.innerHTML = `${data.value}`;
		} else {
			joke.innerHTML = "something ent wrong";
		}
	};

	xhr.send();
	console.log(200);
	return;
}

jokeBtn.addEventListener("click", getNewJoke);

document.addEventListener("DOMContentLoaded", getNewJoke);
