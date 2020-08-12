let leftTimeout, rightTimeout;

function showNextImage() {

	const leftPicture = document.querySelector(".pic-left");
	leftPicture.classList.remove("visible");

	const rightPicture = document.querySelector(".pic-right");
	rightPicture.classList.add("visible");
}

function showPreviousImage() {

	const leftPicture = document.querySelector(".pic-left");
	leftPicture.classList.add("visible");

	const rightPicture = document.querySelector(".pic-right");
	rightPicture.classList.remove("visible");
}

function finishLeftProgressBar() {
	clearTimeout(leftTimeout);
	const progressBarLeft = document.querySelector(".bar-left");
	progressBarLeft.classList.add("bar--finished");
	progressBarLeft.classList.remove("bar--inprocess");
	animateRightProgressBar();
	showNextImage();
}

function finishRightProgressBar() {
	clearTimeout(rightTimeout);
	const progressBarRight = document.querySelector(".bar-right");
	progressBarRight.classList.add("bar--finished");
	progressBarRight.classList.remove("bar--inprocess");
}

function animateLeftProgressBar() {
	const progressBarLeft = document.querySelector(".bar-left");
	progressBarLeft.classList.add("bar--inprocess");
	progressBarLeft.classList.remove("bar--finished");
	leftTimeout = setTimeout(finishLeftProgressBar, 5000);
}

function animateRightProgressBar() {
	const progressBarRight = document.querySelector(".bar-right");
	progressBarRight.classList.add("bar--inprocess");
	progressBarRight.classList.remove("bar--finished");
	rightTimeout = setTimeout(finishRightProgressBar, 5000);
}

function initLeftProgressBar() {
	clearTimeout(rightTimeout);
	const progressBarLeft = document.querySelector(".bar-left");
	progressBarLeft.classList.remove("bar--inprocess");
	progressBarLeft.classList.remove("bar--finished");
}

function initRightProgressBar() {
	const progressBarRight = document.querySelector(".bar-right");
	progressBarRight.classList.remove("bar--inprocess");
	progressBarRight.classList.remove("bar--finished");
}

function onForwardClick() {
	clearBothTimeouts();
	finishLeftProgressBar();
}

function onBackwardClick() {
	clearBothTimeouts();
	initLeftProgressBar();
	showPreviousImage();
	animateLeftProgressBar();
	initRightProgressBar();
}

function clearBothTimeouts() {
	clearTimeout(rightTimeout);
	clearTimeout(leftTimeout);
}

animateLeftProgressBar();