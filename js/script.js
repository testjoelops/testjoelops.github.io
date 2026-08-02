
console.log("Staarust")

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

const newsletter = document.getElementById("newsletter-form");
const email = document.getElementById("email");
const firstName = document.getElementById("first_name");
const thankYou = document.getElementById("thank-you");
const form = document.getElementById("sd-newsletter");


email.addEventListener("input", function () {
	const username = email.value.split("@")[0];
	firstName.value = username;
});

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const formData = new FormData(form);
	const data = Object.fromEntries(formData.entries());

	console.log(data);

    newsletter.style.display = "none";
    thankYou.style.display = "block";

});
