/* -------------------------------------------------------------------------
HOME PAGE button: "Show a plant care tip"
Picks a random tip from the list and shows it on the page.
------------------------------------------------------------------------- */
function showTip() {
var tips = [
"Most houseplants prefer a good soak, then dry — not a daily splash.",
"Rotate your plant a quarter turn each week so it grows evenly.",
"Yellow leaves usually mean too much water, not too little.",
"Wipe dust off big leaves so they can breathe and catch more light.",
"Group plants together to raise humidity around them naturally."
];
var random = tips[Math.floor(Math.random() * tips.length)];
document.getElementById("tip-output").textContent = "🌿 " + random;
}

/* -------------------------------------------------------------------------
PRODUCTS PAGE button: "Add to cart"
Increases the cart counter shown in the header and shows a toast message.
------------------------------------------------------------------------- */
var cartCount = 0;

function addToCart(productName) {
cartCount = cartCount + 1;

// update the number shown in the header
var badge = document.getElementById("cart-count");
if (badge) {
badge.textContent = cartCount;
}

// show a small confirmation pop-up
showToast(productName + " added to your cart (" + cartCount + " item" +
(cartCount === 1 ? "" : "s") + ")");
}

function showToast(message) {
var toast = document.getElementById("toast");
if (!toast) return;
toast.textContent = message;
toast.classList.add("show");
clearTimeout(window._toastTimer);
window._toastTimer = setTimeout(function () {
toast.classList.remove("show");
}, 2200);
}

/* -------------------------------------------------------------------------
CONTACT PAGE button: "Send message"
Validates the form fields and shows a success or error message.
------------------------------------------------------------------------- */
function sendMessage() {
var name = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var message = document.getElementById("message").value.trim();
var status = document.getElementById("form-status");

// simple validation
if (name === "" || email === "" || message === "") {
status.textContent = "Please fill in your name, email and message.";
status.className = "form-status err";
return;
}
if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
status.textContent = "That email address doesn't look right.";
status.className = "form-status err";
return;
}

// success — in a real site this would be sent to a server
status.textContent = "Thanks, " + name + "! Your message is on its way. 🌱";
status.className = "form-status ok";

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";
}
