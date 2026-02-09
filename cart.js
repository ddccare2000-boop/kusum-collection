// Initialize cart array from localStorage, or start with an empty array if none exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add an item to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart 🛒");
}

// Function to update the cart count in the header
function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    if (countEl) {
        countEl.innerText = cart.length;
    }
}

// Function to handle WhatsApp purchase
function buyOnWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello Kusum Collection! I want to order:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} — ₹${item.price}\n`;
        total += Number(item.price);
    });

    message += `\n*Total: ₹${total}*\n\nThank you!`;

    const phoneNumber = "919784620776"; // ← your number without +
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// Run on every page load to update the cart count from localStorage
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
