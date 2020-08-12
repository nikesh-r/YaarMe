function openSideMenu() {
	const sideMenuElement = document.querySelector("#sidebar");
	sideMenuElement.classList.add("active");
}
function closeSideMenu() {
	const sideMenuElement = document.querySelector("#sidebar");
	sideMenuElement.classList.remove("active");
}
function toggleUserAccount() {
	const userDetails = document.querySelectorAll(".js-toggle-details");
	const elements = Array.from(userDetails);
	elements.forEach(element => {
		element.classList.toggle("hidden");
	});
	const toggleArrow = document.querySelector("#arrow");
	toggleArrow.classList.toggle("toggle-arrow");
}