
console.log("Staarust version 01")

const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const thankYou = document.getElementById("thank-you");

console.log(form);

form.addEventListener("submit", function (event) {
	event.preventDefault();
    console.log(emailInput.value);
    form.style.display = "none";
    thankYou.style.display = "block";

});

