// Initialize cart array from localStorage, or start with an empty array if none exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(name, price) {
    // Add item to the cart array
    cart.push({ name, price });
    
    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Update the cart count display
    updateCartCount();
    
    // Alert the user
    alert(name + " added to cart 🛒");
}

// Update the cart count on the page
function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    if (countEl) {
        countEl.innerText = cart.length;
    }
}

// Buy on WhatsApp: sends the cart details to WhatsApp
function buyOnWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Start building the message to send to WhatsApp
    let message = "Hello Kusum Collection! I want to order:\n\n";
    let total = 0;

    // Loop through each cart item and add it to the message
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} — ₹${item.price}\n`;
        total += Number(item.price);
    });

    // Add the total to the message
    message += `\n*Total: ₹${total}*\n\nThank you!`;

    // WhatsApp phone number (without the +)
    const phoneNumber = "919784620776";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab with the message
    window.open(whatsappURL, "_blank");
}

// Run this on every page load to update the cart count from localStorage
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
