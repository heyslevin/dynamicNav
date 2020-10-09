//Selectors
const dropdown = document.querySelector(".dropbtn");
const circles = document.querySelectorAll(".circle");
const drawer = document.querySelector(".drawer");
const links = document.querySelectorAll(".linkArea");
const linkArray = [...links];

var drawerStatus = "closed";

//Stagger
const stagger = function () {
	let delay = 0;
	linkArray.forEach((link) => {
		link.style.transitionDelay = `${delay}ms`;
		delay += 300;
	});
};

//Functions
const toggleDrawer = function () {
	if (drawer.classList.contains("closeDrawer")) {
		linkArray.forEach((link) => {
			stagger();
			link.classList.toggle("transition");
			link.classList.toggle("opacity1");
		});
	} else {
		linkArray.forEach((link) => {
			link.style.transitionDelay = "0ms";
			link.classList.toggle("transition");
			link.classList.toggle("opacity1");
		});
	}

	drawer.classList.toggle("closeDrawer");
};

//Color for circles
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

for (i = 0; i < circles.length; i++) {
	let color = getRandomColor();
	circles[i].style.background = color;
}

//Events
dropdown.addEventListener("click", toggleDrawer);
