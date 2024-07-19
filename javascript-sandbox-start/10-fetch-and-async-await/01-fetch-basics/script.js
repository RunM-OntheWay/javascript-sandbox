fetch("./movies.json")
	.then((response) => response.json())
	.then((data) => {
		data.forEach((element) => {
			const li = document.createElement("li");
			li.innerHTML = `${element.title}`;
			document.querySelector("body").appendChild(li);
		});
	});
