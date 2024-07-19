const infoList = document.getElementById("info-list");
const btn = document.getElementById("btn");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const userImgDiv = document.getElementById("user-img-div");

function fetchUser() {
	fetch("https://randomuser.me/api")
		.then((res) => res.json())
		.then((data) => {
			displayUser(data.results[0]);
			console.log(data.results[0]);
			displayUserInfo(data.results[0]);
		});
}

const displayUser = (user) => {
	if (user.gender === "female") {
		document.body.style.backgroundColor = "pink";
	} else {
		document.body.style.backgroundColor = "cyan";
	}
};

const displayUserInfo = (user) => {
	name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
	phone.innerText = `${user.phone}`;
	userImgDiv.innerHTML = `<img id="user-img" src="${user.picture.large}" />`;
};

fetchUser();
btn.addEventListener("click", fetchUser);
