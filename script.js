// const dropdown = document.querySelector(".dropdown-content");
// const dropButton = document.querySelector(".dropbtn");

// let toggle = function toggleVisibility() {
// 	dropdown.classList.toggle("move-down");
// };

// dropdown.style.display = "block";

// dropButton.addEventListener("click", toggle);

const dropdown = document.querySelectorAll(".dropdown-content");
const dropButton = document.querySelectorAll(".dropbtn");

dropButtonArray = [...dropButton];
dropContentArray = [...dropdown];

let toggle = function toggleVisibility(e) {
	e.parentNode.getElementsByTagName("div")[0].classList.toggle("move-down");
};

dropContentArray.forEach((content) => {
	content.style.display = "block";
});

dropButton.forEach((button) => {
	button.addEventListener("mouseover", function (e) {
		toggle(e.target);
	});

	button.addEventListener("mouseout", function (e) {
		toggle(e.target);
	});
});
